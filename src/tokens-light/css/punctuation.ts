import type { RawAtomTheme } from '../common.js'

import colors, {
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: 'styles::punctuation',
    scope: [],
    rawScope: ['punctuation.definition.entity'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: ''
  },
  {
    name: 'styles::punctuation::separator',
    scope: [],
    rawScope: ['punctuation.separator.key-value'],
    foreground: colors.grayColors1100,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, styleTypes)
