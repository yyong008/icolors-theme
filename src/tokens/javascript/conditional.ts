import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

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
