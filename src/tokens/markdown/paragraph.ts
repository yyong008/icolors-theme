import type { RawAtomTheme } from '../common.js'

import colors from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const commentScopes: RawAtomTheme[] = [
  {
    name: 'markdown::paragraph',
    scope: [],
    extraScope: [],
    rawScope: ['meta.paragraph'],
    foreground: colors.grayColors300,
    fontStyle: ''
  }
]

export default gnAtomThemeFns(commentScopes, markdownTypes)
