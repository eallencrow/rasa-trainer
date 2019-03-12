const { app } = require('electron')
const fs = require('fs')
const jsyaml = require('js-yaml')

const configUrl = app.getAppPath() + '/config.yml'

let config = jsyaml.load(fs.readFileSync(configUrl))

class Config {
    constructor(obj) {
        obj && Object.assign(this, obj)
    }
}

module.exports = new Config(config)
