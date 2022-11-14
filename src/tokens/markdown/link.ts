import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

const linkScopes: RawAtomTheme[] = [
  {
    name: 'markdown::link',
    scope: [],
    rawScope: ['string.other.link.title', 'markup.underline.link'],
    foreground: colors.greenColors400,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(linkScopes, markdownTypes)
