import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { shellTypes } from '../constants'

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
