// Menu: OSX Defaults
// Description: Set OSX defaults from Shell script.
// Author: Jhey Tompkins
// Twitter: @jh3yy
const $HOME = exec('echo $HOME', { silent: true }).trim()
console.info('Setting OSX Defaults')
await exec(`sh ${$HOME}/.kenv/scripts/kody/osx.sh`)
console.info('OSX defaults set')