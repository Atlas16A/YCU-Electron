import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  close: (args: unknown) => ipcRenderer.send('close', args),
  minimize: (args: unknown) => ipcRenderer.send('minimize', args),
  taskselect: (args: unknown) => ipcRenderer.send('TaskSelect', args),
  taskrun: (args: unknown) => ipcRenderer.send('TaskRun', args),
});
