import type BaseColors from '../types/BaseColors.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const baseColors = (): Partial<BaseColors> => ({
  focusBorder: mapColorsWithRuntimeWeight('400'),
  foreground: colors.grayColors300,
  disabledForeground: colors.grayColors800,
  descriptionForeground: mapColorsWithRuntimeWeight('400'),
  errorForeground: colors.redColors600
})

const baseColorsWidget = () => ({
  'widget.shadow': ''
})

const baseColorsSelection = () => ({
  'selection.shadow': ''
})

const baseColorsIcon = () => ({
  'icon.foreground': ''
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
