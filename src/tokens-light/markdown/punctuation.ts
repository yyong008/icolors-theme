import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeight } from '../../designs/index.js'
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
    foreground: mapColorsWithRuntimeWeight('400'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(punctuationScopes, markdownTypes)
