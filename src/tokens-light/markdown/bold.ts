import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const boldScopes: RawAtomTheme[] = [
  {
    name: 'markdown::bold',
    scope: [],
    extraScope: ['markup.bold', 'punctuation.definition.bold'],
    rawScope: [],
    foreground: colors.limeColors500,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(boldScopes, markdownTypes)
