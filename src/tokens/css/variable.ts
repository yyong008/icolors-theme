import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
