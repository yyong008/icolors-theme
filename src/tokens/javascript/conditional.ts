import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const conditionalScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::conditional',
    scope: [],
    rawScope: ['keyword.control.conditional'],
    foreground: colors.magentaColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(conditionalScopes, jsTypes)
