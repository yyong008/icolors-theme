import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { dockerFileTypes } from '../constants'

const dockerScopes: RawAtomTheme[] = [
  {
    name: 'dockerfile::source',
    scope: [],
    rawScope: ['source.dockerfile'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: ''
  },
  {
    name: 'dockerfile::command::key',
    scope: [],
    rawScope: ['keyword.other.special-method'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'dockerfile::special-method',
    scope: [],
    rawScope: ['keyword.other.special-method.dockerfile'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(dockerScopes, dockerFileTypes)
