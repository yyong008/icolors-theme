import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { dockerFileTypes } from '../constants'

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
