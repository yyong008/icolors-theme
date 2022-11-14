import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { luaTypes } from '../constants'

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
