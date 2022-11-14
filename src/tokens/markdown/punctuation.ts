import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
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
    foreground: colors.yellowColors600,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(punctuationScopes, markdownTypes)
