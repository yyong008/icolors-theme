import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

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
