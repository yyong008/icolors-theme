import type { RawAtomTheme } from '../common'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index'
import { gnAtomThemeFns } from '../common'
import { markdownTypes } from '../constants'

const headingScopes: RawAtomTheme[] = [
  {
    name: 'markdown::heading',
    scope: [],
    rawScope: ['markup.heading'],
    foreground: mapColorsWithRuntimeWeightFn('900'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading1',
    scope: [],
    rawScope: ['markup.heading1'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading2',
    scope: [],
    rawScope: ['markup.heading2'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading3',
    scope: [],
    rawScope: ['markup.heading3'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading4',
    scope: [],
    rawScope: ['markup.heading4'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading5',
    scope: [],
    rawScope: ['markup.heading5'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading6',
    scope: [],
    rawScope: ['markup.heading6'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(headingScopes, markdownTypes)
