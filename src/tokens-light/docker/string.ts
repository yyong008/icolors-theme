import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { dockerFileTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'dockerfile::comment',
    scope: [],
    rawScope: ['string.quoted.single', 'string.quoted.double'],
    foreground: colors.grayColors600,
    fontStyle: 'bold italic'
  }
]

export default gnAtomThemeFns(stringScopes, dockerFileTypes)
