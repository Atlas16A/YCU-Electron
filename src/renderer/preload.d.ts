import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      minimize(arg0: string): unknown;
      close(arg0: string): unknown;
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
