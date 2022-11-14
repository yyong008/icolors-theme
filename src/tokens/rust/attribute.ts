import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { rustTypes } from '../constants'

const attributeScopes: RawAtomTheme[] = [
  {
    name: 'rust::attribute',
    scope: [],
    rawScope: ['punctuation.definition.attribute', 'meta.attribute'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: ''
  }
]

export default gnAtomThemeFns(attributeScopes, rustTypes)
