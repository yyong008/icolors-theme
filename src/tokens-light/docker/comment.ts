import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { dockerFileTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'dockerfile::comment',
    scope: [],
    rawScope: ['comment.line.number-sign'],
    foreground: colors.grayColors600,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, dockerFileTypes)
