import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { editorconfigTypes } from '../constants.js'

const editorconfigScopes: RawAtomTheme[] = [
  {
    name: 'editorconfig::comment',
    scope: [],
    rawScope: ['comment.line.number-sign', 'punctuation.definition.comment'],
    foreground: colors.grayColors700,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(editorconfigScopes, editorconfigTypes)
