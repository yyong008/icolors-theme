import type { RawAtomTheme } from '../common'

import { mapColors } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { tomlTypes } from '../constants'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'toml::comment',
    scope: [],
    rawScope: ['punctuation.definition.comment', 'comment.line.number-sign'],
    foreground: mapColors('grayColors800'),
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, tomlTypes)
