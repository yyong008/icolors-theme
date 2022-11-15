import type { StatusBar, StatusBarItem } from '../types/StatusBar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const statusBarColors = (): Partial<StatusBar> => ({
  [`statusBar.foreground`]: mapColorsWithRuntimeWeight('500'),
  [`statusBar.background`]: colors.grayColors900
})

const statusBarItemColors = (): Partial<StatusBarItem> => ({
  [`statusBarItem.activeBackground`]: mapColorsWithRuntimeWeight('1000'),
  [`statusBarItem.hoverBackground`]: colors.grayColors100,
  [`statusBarItem.prominentForeground`]: mapColorsWithRuntimeWeight('500'),
  [`statusBarItem.prominentBackground`]: colors.grayColors1200,
  [`statusBarItem.prominentHoverBackground`]: colors.grayColors1100,
  [`statusBarItem.remoteBackground`]: colors.grayColors1000,
  [`statusBarItem.remoteForeground`]: mapColorsWithRuntimeWeight('500'),
  [`statusBarItem.errorBackground`]: colors.redColors700,
  [`statusBarItem.errorForeground`]: colors.grayColors100,
  [`statusBarItem.warningBackground`]: colors.yellowColors700,
  [`statusBarItem.warningForeground`]: colors.grayColors100,
  [`statusBarItem.compactHoverBackground`]: colors.cyanColors700,
  [`statusBarItem.focusBorder`]: colors.grayColors100
})

export default {
  statusBarColors,
  statusBarItemColors
}
