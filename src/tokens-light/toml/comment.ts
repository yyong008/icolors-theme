import type { RawAtomTheme } from '../common.js'

import { mapColors } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { tomlTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'toml::comment',
    scope: [],
    rawScope: ['punctuation.definition.comment', 'comment.line.number-sign'],
    foreground: mapColors('grayColors600'),
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, tomlTypes)
