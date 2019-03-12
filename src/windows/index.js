const Workspace = require('./workspace')

let workspace;

function onActivate() {
    if (workspace == null) {
        workspace = Workspace.select();
    }
}

function chooseWorkspace() {
    workspace = Workspace.select();
    console.log(workspace)
}

function openWorkspace(loc) {
    workspace = new Workspace(loc)
}

module.exports = (app, config) => {
    function init() {
        if (!config.lastWorkspace) {
            chooseWorkspace()
        } else {
            openWorkspace(config.lastWorkspace)
        }
    }

    return {
        init,
        onActivate
    }
}
