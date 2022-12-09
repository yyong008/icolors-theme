import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { jsTypes } from '../constants'

const stringScopes: RawAtomTheme[] = [
  {
    name: '(c|m)(j|t)s(x)::string::template',
    scope: [],
    rawScope: ['string.template'],
    foreground: colors.grayColors1000,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(stringScopes, jsTypes)
