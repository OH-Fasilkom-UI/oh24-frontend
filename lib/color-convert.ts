const colors = `
Outer Space
Style Name
Hex Code
Sample
Usage
50
F0F8FF
-
100
0E191C
-
200
101617
-
300
FFFFFF
-
400
FFFFFF
-
500
FFFFFF
-
600
FFFFFF
-
700
FFFFFF
-
800
FFFFFF
-
900
FFFFFF
-
950
FFFFFF
-
`

const trimmed = colors
  .trim()
  .split('\n')
  .filter((item) => item !== '-' && item !== '')

const colorName = trimmed[0].replace(/ /g, '')
const colorPrefix = 'Misc'

const customColors: { [key: string]: string } = {}

for (let i = 5; i < trimmed.length - 1; i += 2) {
  const colorNumber = trimmed[i]
  const colorHex = trimmed[i + 1]
  customColors[`${colorPrefix}/${colorName}/${colorNumber}`] = `#${colorHex}`
}

console.log(customColors)
