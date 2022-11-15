import type { RawAtomTheme } from '../common'

import {
  mapColorsWithRuntimeWeightFn,
  mapColorsReverseWithRuntimeWeightFn
} from '../../designs/index'

import { gnAtomThemeFns } from '../common'
import { jsonTypes } from '../constants'

const propsScopes: RawAtomTheme[] = [
  {
    name: 'json::key',
    scope: [],
    rawScope: [],
    extraScope: ['support.type.property-name.json.comments'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: 'json::value',
    scope: [],
    rawScope: ['string.quoted.double', 'string.quoted.single'],
    foreground: mapColorsReverseWithRuntimeWeightFn('400'),
    fontStyle: ''
  },
  {
    name: 'json::constant::{language, numberic}',
    scope: [],
    rawScope: ['constant.language', 'constant.numeric'],
    foreground: mapColorsReverseWithRuntimeWeightFn('400'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(propsScopes, jsonTypes)
