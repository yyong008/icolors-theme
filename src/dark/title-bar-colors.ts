import type TitleBar from '../types/TitleBar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const titleBar = (): Partial<TitleBar> => ({
  ['titleBar.activeBackground']: colors.grayColors1000,
  ['titleBar.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['titleBar.inactiveBackground']: colors.grayColors1000,
  ['titleBar.inactiveForeground']: mapColorsWithRuntimeWeight('700'),
  ['titleBar.border']: colors.grayColors900
})

export default { titleBar }
