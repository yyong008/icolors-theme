import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
    foreground: colors.grayColors900,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, jsTypes)
