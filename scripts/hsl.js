// Menu: HSL
// Description: Convert any color to HSL.
// Author: Jhey Tompkins
// Twitter: @jh3yy

let { setSelectedText } = await kit('text')
const Color = await npm('color')

const stringColor = await arg('Color String:', (input) => {
  try {
    const value = Color(input).hsl() || input
    return [
      {
        name: `hsl: ${value}`,
        value,
        info: `<div style="background-color: ${input} height: 100px;
        width: 100px;">${input}</div>`,
      },
    ]
  } catch (err) {
    console.error(err)
  }
  return []
})

setSelectedText(stringColor)
