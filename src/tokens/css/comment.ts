import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { styleTypes } from '../constants'

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
