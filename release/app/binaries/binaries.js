/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/prefer-default-export */
const path = require('path');
const app = require('electron').remote.app;

export const getBinariesDirectoryPath = () => {
  let app_path: null | string = null;
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    app_path = path.join('app');
  } else {
    app_path = path.join(app.getAppPath(), '..');
  }
  const binaries_directory = path.join(app_path, 'binaries');
  return binaries_directory;
};
