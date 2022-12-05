import type BaseColors from '../types/BaseColors.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const baseColors = (): Partial<BaseColors> => ({
  focusBorder: mapColorsWithRuntimeWeight('400'),
  foreground: colors.grayColors1100,
  disabledForeground: colors.grayColors800,
  descriptionForeground: colors.grayColors1100,
  errorForeground: colors.redColors600
})

const baseColorsWidget = () => ({
  'widget.shadow': colors.grayColors1300
})

const baseColorsSelection = () => ({
  'selection.shadow': ''
})

const baseColorsIcon = () => ({
  'icon.foreground': colors.grayColors1300
})

const baseColorsSash = () => ({
  'sash.hoverBorder': ''
})

export default {
  baseColors,
  baseColorsWidget,
  baseColorsSelection,
  baseColorsIcon,
  baseColorsSash
}
