import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const punctuationScopes: RawAtomTheme[] = [
  {
    name: 'shell::punctuation',
    scope: [],
    rawScope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'string.interpolated.backtick'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(punctuationScopes, shellTypes)
