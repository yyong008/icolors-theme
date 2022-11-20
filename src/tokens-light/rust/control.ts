import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { rustTypes } from '../constants.js'

const controlScopes: RawAtomTheme[] = [
  {
    name: 'rust::keyword.control',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(controlScopes, rustTypes)
