import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::label',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: colors.purpleColors600,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::generic',
    scope: [],
    rawScope: ['punctuation.brackets.angle'],
    foreground: colors.grayColors900,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, rustTypes)
