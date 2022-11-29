import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const constScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::const',
    scope: [],
    rawScope: ['storage.type'],
    foreground: colors.grayColors1000,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(constScopes, jsTypes)
