const $HOME = exec('echo $HOME', { silent: true }).trim()

const PROPS = {
    FILE_REGEXP: /\.link$/,
    FILE_SUFFIX: '.link',
}

const backupDotfile = dest => {
    if (test('-f', dest) && !test('-L', dest)) {
        const bak = `${dest}.bak`
        console.info(`Backing up ${dest} to ${bak}`)
        cp('-rf', dest, bak)
        rm('-rf', dest)
    }
}

const restoreDotfile = dest => {
    const bak = `${dest}.bak`
    if (test('-f', bak)) {
        console.info(`Putting original back ${dest}`)
        cp('-rf', bak, dest)
        console.info(`Removing symlink backup from ${dest}.bak`)
        rm('-rf', bak)
    }
}

const symlinkDotfile = (source, dest, backup) => {
    console.info(`Symlinking ${source} to ${dest}`)
    if (backup) backupDotfile(dest)
    const result = ln('-sf', source, dest)
    if (result.code !== 0) {
        if (backup) restoreDotfile(dest)
        throw new Error(result.stderr)
    }
}

const ROOT = `${$HOME}/.kenv/scripts/links`
const files = await ls('-AR', ROOT).filter(f => f.match(PROPS.FILE_REGEXP))

if (files.length) {
    for (const file of files) {
        const source = `${ROOT}/${file}`
        let name = basename(file).replace(PROPS.FILE_SUFFIX, '')
        const dest = `${$HOME}/${name}`
        try {
            symlinkDotfile(source, dest, true)
        } catch (err) {
            throw new Error(err)
        }
    }
}

// Symlink VSCode settings
const vsBase = `${$HOME}/Library/Application Support/Code/User`
ln('-sf', `${$HOME}/.kenv/scripts/links/vscode/keybindings.json`, `${vsBase}/keybindings.json`)
ln('-sf', `${$HOME}/.kenv/scripts/links/vscode/settings.json`, `${vsBase}/settings.json`)
// Symlink Spectacle settings
const specsBase = `${$HOME}/Library/Application Support/Spectacle`
ln('-sf', `${$HOME}/.kenv/scripts/links/spectacle/Shortcuts.json`, `${specsBase}/Shortcuts.json`)
