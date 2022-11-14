import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

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
