import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeight } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
    rawScope: ['punctuation.separator.comma'],
    foreground: mapColorsWithRuntimeWeight('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, jsTypes)
