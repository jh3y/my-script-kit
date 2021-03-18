// Menu: OG Image
// Description: Generate an OG image with @jh3y/og-image.
// Author: Jhey Tompkins
// Twitter: @jh3yy
let OG = await npm('@jh3y/og-generator')
let { getSelectedFile } = await kit('file')

let reflection = await getSelectedFile()
console.info(reflection)
// await OG.run([
//   "--type",
//   "OG",
//   "-t",
//   "Test Title",
//   // "-i",
//   // `./src/${DOC.heroImage}`,
//   "--hue",
//   `${Math.floor(Math.random() * 359)}`,
//   "--output",
//   `~/Downloads/og-image.png`,
// ])