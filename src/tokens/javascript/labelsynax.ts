import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const labelScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::label',
    scope: [],
    rawScope: ['entity.name.label'],
    foreground: colors.cyanColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(labelScopes, jsTypes)
