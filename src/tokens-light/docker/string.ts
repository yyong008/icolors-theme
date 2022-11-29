import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { dockerFileTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'dockerfile::quoted',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: colors.grayColors800,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, dockerFileTypes)
