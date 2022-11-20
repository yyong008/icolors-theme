import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const asyncScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::asyncAwait',
    scope: [],
    rawScope: ['storage.modifier.async', 'keyword.control.flow'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(asyncScopes, jsTypes)
