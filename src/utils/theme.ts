import type { SystemColorTypes } from '../designs/type'

import * as fs from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// dark
import createThemeColors from '../dark/index'
import createColorTokens from '../tokens/index'

// light
import createLightThemeColors from '../light/index'
import createLightColorTokens from '../tokens-light/index'

import { setRuntimeColors } from '../designs/index'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function genThemePath(themeName: string) {
  const themePath = join(__dirname, `../../themes/${themeName}.json`)
  return themePath
}

export const createThemeFn = async (
  runTimeColor: SystemColorTypes,
  themeColorName: string,
  isLight: boolean
) => {
  setRuntimeColors(runTimeColor)
  return {
    name: themeColorName,
    semanticHighlighting: false,
    colors: isLight
      ? await createLightThemeColors()
      : await createThemeColors(),
    tokenColors: isLight ? createLightColorTokens() : createColorTokens()
  }
}

export async function createTheme(
  runTimeColor: SystemColorTypes,
  themeColorName: string,
  isLight: boolean
) {
  const theme = await createThemeFn(runTimeColor, themeColorName, isLight)
  await fs.writeFile(
    genThemePath(theme.name),
    JSON.stringify(theme, null, 2),
    'utf8'
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function writeThemeInPkg(themes: any) {
  const pkgPath = __dirname + '../../package.json'
  const pkgJson = JSON.parse(await fs.readFile(pkgPath, 'utf-8'))

  pkgJson['contributes']['themes'] = {
    ...pkgJson['contributes']['themes'],
    ...themes
  }
  await fs.writeFile(pkgPath, JSON.stringify(pkgJson, null, 2), 'utf8')
}
