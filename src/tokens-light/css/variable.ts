import type { RawAtomTheme } from '../common.js'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeight
} from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'styles::variable',
    scope: [],
    rawScope: ['variable', 'variable.argument', 'variable.other'],
    foreground: mapColorsReverseWithRuntimeWeight('800'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(variableScopes, styleTypes)
