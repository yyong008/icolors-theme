import type { SystemColorTypes } from './designs/type'

import { createTheme } from './utils/index'
import { darkThemesArr, lightThemesArr } from './utils/constants'

async function main() {
  for (const arr of lightThemesArr) {
    const [runtimeColor, themeColorName] = arr as [SystemColorTypes, string]
    await createTheme(runtimeColor, themeColorName, true)
  }

  for (const arr of darkThemesArr) {
    const [runtimeColor, themeColorName] = arr as [SystemColorTypes, string]
    await createTheme(runtimeColor, themeColorName, false)
  }
}

main()
