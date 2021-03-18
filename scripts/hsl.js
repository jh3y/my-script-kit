// Menu: HSL
// Description: Convert any color to HSL.
// Author: Jhey Tompkins
// Twitter: @jh3yy

let { setSelectedText } = await kit("text")
const Color = await npm("color")

const createHTML = color =>
  `<div class="h-full text-xs flex justify-center items-center" style="background-color: ${color}"><span class="p-2">${
    color || ""
  }</span></div>`

const createChoices = (input, value) => {
  console.info(input, value)
  return [
    {
      name: value,
      value: value,
      //I renamed "info" to "html"
      html: createHTML(input),
    },
  ]
}

const hslArray = await arg("Color String:", input => {
  let hsl = input
  try {
    hsl = Color(input).hsl()
  } catch {
    //catch error and return whatever
    return createChoices(input, "Invalid color")
  }
  //The HSL lib was returning an object with a "color" prop as an Array
  return createChoices(input, hsl.toString())
})

setSelectedText(hslArray)