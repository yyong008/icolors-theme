import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const macroScopes: RawAtomTheme[] = [
  {
    name: 'rust::marco',
    scope: [],
    rawScope: ['entity.name.function.macro'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(macroScopes, rustTypes)
