import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const structScopes: RawAtomTheme[] = [
  {
    name: 'rust::{str, String}',
    scope: [],
    rawScope: [
      // impl keyword
      'keyword.other'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(structScopes, rustTypes)
