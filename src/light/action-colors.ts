import type Toolbar from '../types/Toolbar.js'

import { mapColorsWithRuntimeWeight } from '../designs/index.js'

const actionColors = (): Partial<Toolbar> => ({
  ['toolbar.hoverBackground']: mapColorsWithRuntimeWeight('200'),
  ['toolbar.hoverOutline']: mapColorsWithRuntimeWeight('300'),
  ['toolbar.activeBackground']: mapColorsWithRuntimeWeight('300')
})

export default {
  actionColors
}
