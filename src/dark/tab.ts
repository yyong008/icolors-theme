import type Tab from '../types/Tab'

import colors, {
  mapColorsWithRuntimeWeight,
  mapColorsReverseWithRuntimeWeightAlpha
} from '../designs/index'

const tab = (): Partial<Tab> => ({
  ['tab.activeBackground']: mapColorsReverseWithRuntimeWeightAlpha('100', '00'),
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors1000,
  ['tab.border']: '',
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: colors.grayColors100,
  ['tab.lastPinnedBorder']: '',
  ['tab.activeBorder']: mapColorsWithRuntimeWeight('700'),
  ['tab.unfocusedActiveBorder']: '',
  ['tab.activeBorderTop']: '',
  ['tab.unfocusedActiveBorderTop']: '',
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: '',
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: '',
  ['tab.unfocusedHoverBorder']: '',
  ['tab.activeModifiedBorder']: '',
  ['tab.inactiveModifiedBorder']: '',
  ['tab.unfocusedActiveModifiedBorder']: '',
  ['tab.unfocusedInactiveModifiedBorder']: ''
})

export default { tab }
