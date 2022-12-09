import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::comment',
    scope: [],
    rawScope: [
      'comment.line.double-slash',
      'comment.block',
      'comment.block.documentation',
      'comment.line.shebang'
    ],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, jsTypes)
