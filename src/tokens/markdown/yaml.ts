import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

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
