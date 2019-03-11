const { app, BrowserWindow } = require('electron')

let win;

function chooseWorkspace() {
    win = new BrowserWindow({
        show: false
    })
    win.on('ready-to-show', win.show)
    win.on('closed', () => {
        win = null;
    })
    win.loadFile(__dirname + '/views/choose_workspace.html')
}

app.on('ready', chooseWorkspace)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if(win === null) {
        chooseWorkspace()
    }
})