import type { SystemColorTypes } from './designs/type'

import { createTheme } from './utils/index'

const themesArr = [
  ['blueColors', 'iColorDarkBlue'],
  ['geekBlueColors', 'iColorDarkGeekBlue'],
  ['cyanColors', 'iColorDarkCyan'],
  ['goldColors', 'iColorDarkGold'],
  ['greenColors', 'iColorDarkGreen'],
  ['limeColors', 'iColorDarkLime'],
  ['magentaColors', 'iColorDarkMagenta'],
  ['orangeColors', 'iColorDarkOrgane'],
  ['purpleColors', 'iColorDarkPurple'],
  ['redColors', 'iColorDarkRed'],
  ['volcanoColors', 'iColorDarkVolcano'],
  ['yellowColors', 'iColorDarkYellow']
]

async function main() {
  for (const arr of themesArr) {
    const [runtimeColor, themeColorName] = arr as [SystemColorTypes, string]
    await createTheme(runtimeColor, themeColorName)
  }
}

main()
