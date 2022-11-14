import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

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
