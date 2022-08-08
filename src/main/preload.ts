import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  close: () => ipcRenderer.send('close'),
  minimize: () => ipcRenderer.send('minimize'),
});
