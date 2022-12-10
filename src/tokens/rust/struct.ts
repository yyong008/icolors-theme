import type { RawAtomTheme } from '../common'

import { mapColorsReverseWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const structScopes: RawAtomTheme[] = [
  {
    name: 'rust::{str, String}',
    scope: [],
    rawScope: ['storage.type', 'keyword.declaration.struct'],
    foreground: mapColorsReverseWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(structScopes, rustTypes)
