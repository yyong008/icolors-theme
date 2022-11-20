import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { styleTypes } from '../constants.js'

const operatorScopes: RawAtomTheme[] = [
  {
    name: 'styles::operator',
    scope: [],
    rawScope: [
      'keyword.operator.logical',
      'keyword.operator',
      'keyword.other.important',
      'keyword.operator.combinator'
    ],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(operatorScopes, styleTypes)
