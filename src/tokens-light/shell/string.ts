import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { shellTypes } from '../constants.js'

const stringScopes: RawAtomTheme[] = [
  {
    name: 'shell::string',
    scope: [],
    rawScope: ['string.quoted.double', 'string.quoted.single'],
    foreground: colors.grayColors100,
    fontStyle: 'italic'
  }
]

export default gnAtomThemeFns(stringScopes, shellTypes)
