import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

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
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::type.key',
    scope: [],
    rawScope: [
      'storage.type.type',
      'storage.type.interface',
      'storage.type.namespace'
    ],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::type.declare',
    scope: [],
    rawScope: ['storage.modifier'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: '(j|t)sx::namespace::name',
    scope: [],
    rawScope: ['entity.name.type.module'],
    foreground: mapColorsWithRuntimeWeightFn('900'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(typeSystemScopes, jsTypes)
