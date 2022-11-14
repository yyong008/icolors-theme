import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

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
