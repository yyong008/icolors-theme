import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'styles::variable',
    scope: [],
    rawScope: ['variable', 'variable.argument'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(variableScopes, styleTypes)
