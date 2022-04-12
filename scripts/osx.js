// Menu: OSX Defaults
// Description: Set OSX defaults from Shell script.
// Author: Jhey Tompkins
// Twitter: @jh3yy
// const $HOME = exec('echo $HOME', { silent: true }).trim()
const $HOME = home()
console.info('Setting OSX Defaults')
await exec(`sh ${$HOME}/.kenv/kenvs/my-script-kit/scripts/kody/osx.sh`)
console.info('OSX defaults set')