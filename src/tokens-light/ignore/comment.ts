import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { ignoreTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'json::comment',
    scope: [],
    extraScope: ['comment.line.number-sign'],
    rawScope: [],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, ignoreTypes)
