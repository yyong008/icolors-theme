import type { RawAtomTheme } from '../common'

import colors from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

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
