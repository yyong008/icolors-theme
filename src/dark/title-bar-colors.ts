import type TitleBar from '../types/TitleBar'

import colors, {
  mapColorsWithRuntimeWeight,
  mapColorsReverseWithRuntimeWeight
} from '../designs/index.js'

const titleBar = (): Partial<TitleBar> => ({
  ['titleBar.activeBackground']: mapColorsWithRuntimeWeight('600'),
  ['titleBar.activeForeground']: mapColorsWithRuntimeWeight('500'),
  ['titleBar.inactiveBackground']: colors.grayColors1000,
  ['titleBar.inactiveForeground']: mapColorsReverseWithRuntimeWeight('500'),
  ['titleBar.border']: colors.redColors400
})

export default { titleBar }
