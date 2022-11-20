import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { jsTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::string::template',
    scope: [],
    rawScope: ['string.template'],
    foreground: colors.grayColors200,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, jsTypes)
