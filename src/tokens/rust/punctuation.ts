import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeight } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::generic',
    scope: [],
    rawScope: ['punctuation.brackets.angle'],
    foreground: colors.grayColors800,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::match::arrow::fat',
    scope: [],
    rawScope: ['keyword.operator.arrow.fat'],
    foreground: mapColorsWithRuntimeWeight('700'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, rustTypes)
