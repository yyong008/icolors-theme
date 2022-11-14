import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { dockerFileTypes } from '../constants'

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
