import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

const sourceScopes: RawAtomTheme[] = [
  {
    name: 'styles::source',
    scope: [],
    rawScope: ['source'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(sourceScopes, styleTypes)
