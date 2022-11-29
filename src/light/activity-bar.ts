import type {
  ActivityBar,
  ActivityBarBadge,
  ActivityBarItem
} from '../types/ActivityBar.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const activityBar = (): Partial<ActivityBar> => ({
  ['activityBar.background']: colors.grayColors400,
  ['activityBar.foreground']: mapColorsWithRuntimeWeight('800'),
  ['activityBar.dropBorder']: '',
  ['activityBar.inactiveForeground']: mapColorsWithRuntimeWeight('600'),
  ['activityBar.border']: colors.grayColors500
})

const activityBarBadge = (): Partial<ActivityBarBadge> => ({
  ['activityBarBadge.background']: mapColorsWithRuntimeWeight('800'),
  ['activityBarBadge.foreground']: colors.grayColors100
})

const activityBarItem = (): Partial<ActivityBarItem> => ({
  ['activityBarItem.settingsProfilesHoverForeground']: '',
  ['activityBarItem.settingsProfilesBackground']: '',
  ['activityBarItem.settingsProfilesForeground']: ''
})

export default { activityBar, activityBarBadge, activityBarItem }
