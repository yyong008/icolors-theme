import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { luaTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'lua::comment',
    scope: [],
    extraScope: [
      'punctuation.definition.comment',
      'comment.line.double-dash',
      'comment.block'
    ],
    rawScope: [],
    foreground: colors.grayColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, luaTypes)
