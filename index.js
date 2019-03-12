const { app } = require('electron')
const config = require('./src/config')

const { init, onActivate } = require('./src/windows')(app, config)

app.on('ready', init)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', onActivate)