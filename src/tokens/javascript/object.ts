import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeight } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const objectScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::objectKey',
    scope: [],
    rawScope: ['meta.object-literal.key'],
    foreground: mapColorsWithRuntimeWeight('100'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(objectScopes, jsTypes)
