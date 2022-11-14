import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

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
