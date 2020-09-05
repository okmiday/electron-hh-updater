const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'HHUpdater.app', 'Contents', 'MacOS', 'HHUpdater')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'HHUpdater')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'HHUpdater.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
