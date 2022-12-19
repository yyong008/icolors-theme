import type { RawAtomTheme } from '../common'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const typeSystemScopes: RawAtomTheme[] = [
  {
    name: '(j|t)sx::type.primitive',
    scope: [],
    rawScope: [
      'support.type.primitive',
      'entity.name.type',
      'entity.name.type.alias'
    ],
    foreground: mapColorsWithRuntimeWeightFn('500'),
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
    foreground: mapColorsReverseWithRuntimeWeightFn('400'),
    fontStyle: 'bold italic'
  },
  {
    name: '(j|t)sx::type.declare',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::namespace::name',
    scope: [],
    rawScope: ['entity.name.type.module'],
    foreground: mapColorsWithRuntimeWeightFn('200'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(typeSystemScopes, jsTypes)
