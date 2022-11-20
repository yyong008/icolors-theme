import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const keywordScopes: RawAtomTheme[] = [
  {
    name: 'rust::keyword',
    scope: [],
    rawScope: ['storage.type'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(keywordScopes, rustTypes)
