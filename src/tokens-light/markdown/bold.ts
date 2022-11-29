import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const boldScopes: RawAtomTheme[] = [
  {
    name: 'markdown::bold',
    scope: [],
    extraScope: ['markup.bold', 'punctuation.definition.bold'],
    rawScope: [],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(boldScopes, markdownTypes)
