import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const builtinScopes: RawAtomTheme[] = [
  {
    name: 'shell::comment',
    scope: [],
    rawScope: [
      'punctuation.definition.comment.shebang',
      'comment.line.number-sign.shebang',
      'keyword.operator.heredoc',
      'keyword.control.heredoc-token',
      'string.unquoted.heredoc.expanded'
    ],
    foreground: colors.grayColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(builtinScopes, shellTypes)
