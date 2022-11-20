import type {
  ActivityBar,
  ActivityBarBadge,
  ActivityBarItem
} from '../types/ActivityBar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const activityBar = (): Partial<ActivityBar> => ({
  ['activityBar.background']: colors.grayColors1100,
  ['activityBar.foreground']: mapColorsWithRuntimeWeight('300'),
  ['activityBar.dropBorder']: '',
  ['activityBar.inactiveForeground']: mapColorsWithRuntimeWeight('700'),
  ['activityBar.border']: colors.grayColors900
})

const activityBarBadge = (): Partial<ActivityBarBadge> => ({
  ['activityBarBadge.background']: mapColorsWithRuntimeWeight('600'),
  ['activityBarBadge.foreground']: colors.grayColors100
})

const activityBarItem = (): Partial<ActivityBarItem> => ({
  ['activityBarItem.settingsProfilesHoverForeground']: '',
  ['activityBarItem.settingsProfilesBackground']: '',
  ['activityBarItem.settingsProfilesForeground']: ''
})

export default { activityBar, activityBarBadge, activityBarItem }
