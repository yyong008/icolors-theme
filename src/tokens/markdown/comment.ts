import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

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
