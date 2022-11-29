import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { htmlTypes } from '../constants.js'

const htmlCommentScopes: RawAtomTheme[] = [
  {
    name: 'html::comment',
    scope: [],
    rawScope: ['punctuation.definition.comment', 'comment.block'],
    foreground: colors.grayColors600,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(htmlCommentScopes, htmlTypes)
