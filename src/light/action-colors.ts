import type Toolbar from '../types/Toolbar.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const actionColors = (): Partial<Toolbar> => ({
  ['toolbar.hoverBackground']: colors.grayColors1300,
  ['toolbar.hoverOutline']: mapColorsWithRuntimeWeight('300'),
  ['toolbar.activeBackground']: mapColorsWithRuntimeWeight('600')
})

export default {
  actionColors
}
