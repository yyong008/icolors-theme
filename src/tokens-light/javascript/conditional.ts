import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const conditionalScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::conditional',
    scope: [],
    rawScope: ['keyword.control.conditional'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(conditionalScopes, jsTypes)
