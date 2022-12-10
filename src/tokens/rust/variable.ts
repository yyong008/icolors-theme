import type { RawAtomTheme } from '../common'

import colors, {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const variableScopes: RawAtomTheme[] = [
  {
    name: 'rust::variable',
    scope: [],
    rawScope: [
      'variable.other',
      'keyword.operator.key-value',
      'punctuation.comma'
    ],
    foreground: colors.grayColors100,
    fontStyle: 'bold'
  },
  {
    name: 'rust::mut',
    scope: [],
    rawScope: ['storage.modifier.mut'],
    foreground: mapColorsReverseWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'rust:variable.language.self',
    scope: [],
    rawScope: ['variable.language.self'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: 'italic bold'
  }
]

export default gnAtomThemeFns(variableScopes, rustTypes)
