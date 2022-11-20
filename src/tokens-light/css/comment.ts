import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'styles::comment',
    scope: [],
    // TODO: design remove css comment.line.double-slash
    rawScope: ['comment.block', 'comment.line.double-slash'],
    foreground: colors.grayColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, styleTypes)
