import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const constScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::const',
    scope: [],
    rawScope: ['storage.type'],
    foreground: colors.grayColors100,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(constScopes, jsTypes)
