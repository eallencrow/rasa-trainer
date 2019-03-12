const { dialog } = require('electron')

// function chooseWorkspace() {
//     win = new BrowserWindow({
//         show: false
//     })
//     win.on('ready-to-show', win.show)
//     win.on('closed', () => {
//         win = null;
//     })
//     win.webContents.openDevTools()
//     win.loadFile(__dirname + '/views/choose_workspace.html')
//     win.webContents.on('did-finish-load', () => {
//         win.webContents.send('workspaces', config.workspaces)
//     })
// }

class Workspace {
    constructor(location) {
        this.location = location
    }
    static select() {
        return new Workspace(dialog.showOpenDialog({properties: ['openDirectory']}))
    }
}

module.exports = Workspace
