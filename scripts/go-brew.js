// Menu: Go Brew
// Description: Install my favorite apps.
// Author: Jhey Tompkins
// Twitter: @jh3yy

// const INSTALL_STRING = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

const BREW_INSTALLED = await which('brew')
const $HOME = exec('echo $HOME', { silent: true }).trim()
const APP_CONFIG = await readFile(`${$HOME}/.kenv/scripts/kody/config.json`, 'utf-8')
const APP_LIST = JSON.parse(APP_CONFIG).apps.join(' ')

const COMMAND = `brew install ${APP_LIST}`
await exec(COMMAND)