import type { RawAtomTheme } from '../common'

import colors, { mapColorsWithRuntimeWeight } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

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
