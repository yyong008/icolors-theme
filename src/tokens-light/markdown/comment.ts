import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'markdown::comment',
    scope: [],
    extraScope: [
      'punctuation.definition.comment.shell',
      'comment.line.number-sign.shell'
    ],
    rawScope: [],
    foreground: colors.limeColors500,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, markdownTypes)
