import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

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
