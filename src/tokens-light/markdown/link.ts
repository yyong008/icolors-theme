import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

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
