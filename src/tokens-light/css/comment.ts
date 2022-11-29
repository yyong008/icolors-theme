import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'styles::comment',
    scope: [],
    rawScope: ['comment.block', 'comment.line.double-slash'],
    foreground: colors.grayColors700,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, styleTypes)
