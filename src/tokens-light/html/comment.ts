import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { dockerFileTypes } from '../constants.js'

const htmlCommentScopes: RawAtomTheme[] = [
  {
    name: 'html::comment',
    scope: [],
    rawScope: ['punctuation.definition.comment', 'comment.block'],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(htmlCommentScopes, dockerFileTypes)
