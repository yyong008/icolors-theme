import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const orderScopes: RawAtomTheme[] = [
  {
    name: 'markdown::{order, unorder}',
    scope: [],
    rawScope: ['markup.list.numbered', 'markup.list.unnumbered'],
    foreground: colors.volcanoColors500,
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(orderScopes, markdownTypes)
