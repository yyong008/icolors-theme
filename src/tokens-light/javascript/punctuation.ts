import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::comment',
    scope: [],
    rawScope: ['punctuation.definition.comment'],
    foreground: colors.grayColors600,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::string.template',
    scope: [],
    rawScope: [
      'punctuation.definition.string.template.begin',
      'punctuation.definition.string.template.end'
    ],
    foreground: colors.grayColors800,
    fontStyle: ''
  },
  {
    name: '(c|m)(j|t)s(x)::comma',
    scope: [],
    rawScope: [
      'punctuation.separator.comma',
      'punctuation.terminator.statement'
    ],
    foreground: colors.grayColors1000,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, jsTypes)
