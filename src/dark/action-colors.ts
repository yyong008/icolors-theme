import type Toolbar from '../types/Toolbar'

import { mapColorsWithRuntimeWeight } from '../designs/index'

const actionColors = (): Partial<Toolbar> => ({
  ['toolbar.hoverBackground']: mapColorsWithRuntimeWeight('800'),
  ['toolbar.hoverOutline']: mapColorsWithRuntimeWeight('800'),
  ['toolbar.activeBackground']: mapColorsWithRuntimeWeight('600')
})

export default {
  actionColors
}
