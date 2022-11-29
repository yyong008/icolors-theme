import type { RawAtomTheme } from '../common.js'

import colors, { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const objectScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::objectKey',
    scope: [],
    rawScope: ['meta.object-literal.key'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(objectScopes, jsTypes)
