import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsxTypes } from '../constants'

const typeSystemScopes: RawAtomTheme[] = [
  {
    name: '(j|t)sx::type.primitive',
    scope: [],
    rawScope: [
      'support.type.primitive',
      'entity.name.type',
      'entity.name.type.alias'
    ],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::type.buildin',
    scope: [],
    rawScope: ['support.type.builtin'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: '(j|t)sx::type.key',
    scope: [],
    rawScope: ['storage.type.type'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold italic'
  }
]

export default gnAtomThemeFns(typeSystemScopes, jsxTypes)
