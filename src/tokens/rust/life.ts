import type { RawAtomTheme } from '../common'

import { mapColorsReverseWithRuntimeWeight } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const keywordScopes: RawAtomTheme[] = [
  {
    name: 'rust::lifetime',
    scope: [],
    rawScope: ['punctuation.definition.lifetime'],
    foreground: mapColorsReverseWithRuntimeWeight('600'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(keywordScopes, rustTypes)
