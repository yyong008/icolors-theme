import type { RawAtomTheme } from '../common.js'

import { mapColorsWithRuntimeWeightFn } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { markdownTypes } from '../constants.js'

const headingScopes: RawAtomTheme[] = [
  {
    name: 'markdown::heading',
    scope: [],
    rawScope: ['markup.heading'],
    foreground: mapColorsWithRuntimeWeightFn('900'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading.1',
    scope: [],
    rawScope: ['heading.1'],
    foreground: mapColorsWithRuntimeWeightFn('800'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading.2',
    scope: [],
    rawScope: ['heading.2'],
    foreground: mapColorsWithRuntimeWeightFn('700'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading.3',
    scope: [],
    rawScope: ['heading.3'],
    foreground: mapColorsWithRuntimeWeightFn('600'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading4',
    scope: [],
    rawScope: ['heading.4'],
    foreground: mapColorsWithRuntimeWeightFn('500'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading5',
    scope: [],
    rawScope: ['heading.5'],
    foreground: mapColorsWithRuntimeWeightFn('400'),
    fontStyle: 'bold'
  },
  {
    name: 'markdown::heading6',
    scope: [],
    rawScope: ['heading.6'],
    foreground: mapColorsWithRuntimeWeightFn('300'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(headingScopes, markdownTypes)
