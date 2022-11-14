import type { RawAtomTheme } from '../common'

import { mapColors } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { yamlTypes } from '../constants'

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
