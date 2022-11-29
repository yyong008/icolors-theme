import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { editorconfigTypes } from '../constants'

const editorconfigScopes: RawAtomTheme[] = [
  {
    name: 'editorconfig::comment',
    scope: [],
    rawScope: ['comment.line.number-sign.editorconfig'],
    foreground: colors.grayColors800,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(editorconfigScopes, editorconfigTypes)
