import type { RawAtomTheme } from '../common.js'

import { mapColors } from '../../designs/index.js'
import { gnAtomThemeFns } from '../common.js'
import { tomlTypes } from '../constants.js'

const vueSyntaxScopes: RawAtomTheme[] = [
  {
    name: 'vue::bind',
    scope: [],
    rawScope: [
      'punctuation.attribute-shorthand.bind.html',
      'keyword.control.conditional'
    ],
    foreground: mapColors('magentaColors200'),
    fontStyle: 'bold'
  },
  {
    name: 'vue::slot',
    scope: [],
    rawScope: [
      'punctuation.attribute-shorthand.slot.html',
      'entity.other.attribute-name.html'
    ],
    foreground: mapColors('yellowColors300'),
    fontStyle: 'bold'
  },
  {
    name: 'vue::scriptTag',
    scope: [],
    rawScope: [
      'entity.name.tag.template.html',
      'entity.name.tag.script.html',
      'entity.name.tag.style.html'
    ],
    foreground: mapColors('greenColors400'),
    fontStyle: 'bold'
  },
  {
    name: 'vue::shortEvent',
    scope: [],
    rawScope: ['punctuation.attribute-shorthand.event.html'],
    foreground: mapColors('greenColors400'),
    fontStyle: 'bold'
  }
]

export default gnAtomThemeFns(vueSyntaxScopes, tomlTypes)
