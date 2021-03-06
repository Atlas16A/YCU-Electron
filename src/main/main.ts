/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { spawn, exec } from 'child_process';
import fs, { existsSync } from 'fs';
import https from 'https';
import extract from 'extract-zip';
import { URL } from 'url';
import { resolveHtmlPath } from './util';

const appRootDir = require('app-root-dir').get();

console.log(appRootDir);
// This monstrosity is the best way to ensure YCU has yagna and jq available, because electron is stupid and wont package them inside it.
// -----------------------------------------------------------------------------------------------------------
const BinaryCheck = path.join(appRootDir, 'Binaries/');

const BinDownloadURL = `https://github.com/Atlas16A/ycu-binaries/archive/refs/tags/Ready.zip`;

async function f() {
  if (fs.existsSync(BinaryCheck) === false) {
    console.log('No Binaries: Downloading...');
    // eslint-disable-next-line no-inner-declarations
    async function downloadFile(
      DownloadURL: string | https.RequestOptions | URL,
      makePath: fs.PathLike
    ) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const promise = new Promise((resolve, reject) => {
        https
          // eslint-disable-next-line consistent-return
          .get(DownloadURL, (response) => {
            const code = response.statusCode ?? 0;

            if (code >= 400) {
              return reject(new Error(response.statusMessage));
            }

            // handle redirects
            if (code > 300 && code < 400 && !!response.headers.location) {
              return downloadFile(response.headers.location, makePath);
            }

            // save the file to disk
            const fileWriter = fs
              .createWriteStream(makePath)
              .on('finish', () => {
                extract(path.join(appRootDir, 'Binaries.zip'), {
                  dir: path.join(appRootDir, 'Binaries/'),
                });
                setTimeout(() => {
                  const YagnaSource = path.join(appRootDir, 'Binaries/');

                  console.log(YagnaSource);
                  // Start Yagna service
                  spawn('yagna', ['service', 'run'], {
                    // stdio: ['ignore', out, err],
                    // detached: true,
                    env: { PATH: YagnaSource },
                  });
                  console.log('yagna running 2');
                }, 5000);

                resolve({});
              });

            response.pipe(fileWriter);
          })
          .on('error', (error) => {
            reject(error);
          });
      });
      return promise;
    }
    console.log('why dont you work');
    await downloadFile(BinDownloadURL, 'Binaries.zip');
  } else {
    const YagnaSource = path.join(appRootDir, 'Binaries/');

    console.log(YagnaSource);
    // Start Yagna service
    spawn('yagna', ['service', 'run'], {
      // stdio: ['ignore', out, err],
      // detached: true,
      env: { PATH: YagnaSource },
    });
    console.log('yagna running 1');
  }
}
f();

// ----------------------------------------------------------------------------------------------------------
class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const jq = path.join(`${appRootDir}/bin/jq.exe`);

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1440,
    height: 1024,
    transparent: true,
    useContentSize: true,
    resizable: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
    frame: false,
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

/* app
  .whenReady()
  .then(() => {
    // eslint-disable-next-line func-names
    setTimeout(function () {
      // Pulls Key from Yagna
      const YagnaGetAPPKEY = exec(
        `yagna app-key list --json | ${jq} -r .values[][1]`,
        {
          env: { PATH: YagnaSource },
        }
      );

      YagnaGetAPPKEY.stdout?.on('data', (data) => {
        console.log(`Key Get: ${data}`);
        YagnaKey = data;
      });

      YagnaGetAPPKEY.stderr?.on('data', (data) => {
        console.error(`Key Get: ${data}`);
      });

      YagnaGetAPPKEY.on('close', (code) => {
        console.log(`Key Get process exited with code ${code}`);
      });

      // eslint-disable-next-line func-names
      setTimeout(function () {
        // set yagna payment mode to sender
        const YagnaPayMode = exec('yagna payment init --sender', {
          env: {
            YAGNA_APPKEY: YagnaKey,
          },
        });

        YagnaPayMode.stdout?.on('data', (data) => {
          console.log(`Sender mode: ${data}`);
        });

        YagnaPayMode.stderr?.on('data', (data) => {
          console.error(`Sender mode error: ${data}`);
        });

        YagnaPayMode.on('close', (code) => {
          console.log(`Sender mode process exited with code ${code}`);
        });
      }, 6000);
    }, 6000);
  })
  .catch(console.log); */
