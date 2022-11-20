import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: 'styles::comment',
    scope: [],
    rawScope: ['punctuation.definition.entity'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, styleTypes)
