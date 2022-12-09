import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const typeSystemScopes: RawAtomTheme[] = [
  {
    name: 'rust::typeSystem',
    scope: [],
    rawScope: ['entity.name.type', 'storage.type'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(typeSystemScopes, rustTypes)
