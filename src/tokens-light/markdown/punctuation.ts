import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: 'markdown::punctuation',
    scope: [],
    rawScope: [
      'punctuation.definition.link.title.begin',
      'punctuation.definition.link.title.end',
      'punctuation.definition.metadata',
      'punctuation.definition.metadata'
    ],
    foreground: colors.grayColors800,
    fontStyle: 'bold'
  },
  {
    name: 'markdown::header::punctuation',
    scope: [],
    rawScope: ['punctuation.definition.heading'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::punctuation',
    scope: [],
    rawScope: ['punctuation.definition', 'markup.fenced_code.block'],
    foreground: colors.grayColors1200,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, markdownTypes)
