import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const loopScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::while',
    scope: [],
    rawScope: ['keyword.control'],
    foreground: colors.purpleColors600,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(loopScopes, rustTypes)
