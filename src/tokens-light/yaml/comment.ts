import type { RawAtomTheme } from '../common.js'

import { mapColors } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { yamlTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'yaml::comment',
    scope: [],
    rawScope: ['comment.line.number-sign', 'punctuation.definition.comment'],
    foreground: mapColors('grayColors800'),
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(commentScopes, yamlTypes)
