// Menu: CodePen
// Description: Develop a CodePen demo.
// Author: Jhey Tompkins
// Twitter: @jh3yy

const penName = await arg('New CodePen Name:')

const PEN_ROOT = await env('CODEPEN_ROOT_PATH', {
  message: 'Where do CodePen live?',
})
const TEMPLATES = ['index.pug', 'dev.pug', 'script.js', 'style.styl']
const DESTINATION = `${PEN_ROOT}/src/${penName}`
// If the directory doesn't exist, create the files.
if (!test('-e', DESTINATION)) {
  mkdir('-p', DESTINATION)
  // Create files from my templates.
  for (const temp of TEMPLATES) {
    let content = await compileTemplate(`codepen/${temp}`, { name: penName })
    await writeFile(`${DESTINATION}/${temp}`, content)
    await writeFile(`${DESTINATION}/${temp}`, content)
  }
}
// The files are there. Open them up!
exec(`code ${DESTINATION}`)
await edit(`${DESTINATION}/${TEMPLATES[1]}`)

// Kick off development. Make Awesome Stuff!
iterm(`cd ${PEN_ROOT}; make develop PEN=${penName}`)
