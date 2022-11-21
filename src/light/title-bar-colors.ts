import type TitleBar from '../types/TitleBar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const titleBar = (): Partial<TitleBar> => ({
  ['titleBar.activeBackground']: colors.grayColors300,
  ['titleBar.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['titleBar.inactiveBackground']: colors.grayColors300,
  ['titleBar.inactiveForeground']: mapColorsWithRuntimeWeight('500'),
  ['titleBar.border']: colors.grayColors500
})

export default { titleBar }
