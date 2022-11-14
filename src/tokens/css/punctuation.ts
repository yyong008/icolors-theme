import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
