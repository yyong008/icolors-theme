import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const yamlScopes: RawAtomTheme[] = [
  {
    name: 'markdown::yaml',
    scope: [],
    rawScope: [
      'punctuation.definition',
      'fenced_code.block.language',
      'punctuation.definition.raw',
      'punctuation.definition.link.description.begin',
      'punctuation.definition.link.description.end',
      'punctuation.definition.metadata'
    ],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(yamlScopes, markdownTypes)
