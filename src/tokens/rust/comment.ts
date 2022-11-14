import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'rust::comment',
    scope: [],
    rawScope: [
      'comment.line.double-slash',
      'comment.block',
      'comment.line.documentation',
      'comment.line.shebang'
    ],
    foreground: colors.grayColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, rustTypes)
