import type BaseColors from '../types/BaseColors'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const baseColors = (): Partial<BaseColors> => ({
  focusBorder: mapColorsWithRuntimeWeight('400'),
  foreground: colors.grayColors300,
  disabledForeground: colors.grayColors800,
  descriptionForeground: mapColorsWithRuntimeWeight('400'),
  errorForeground: colors.redColors600
})

const baseColorsWidget = () => ({
  'widget.shadow': mapColorsWithRuntimeWeight('200')
})

const baseColorsSelection = () => ({
  'selection.shadow': ''
})

const baseColorsIcon = () => ({
  'icon.foreground': colors.grayColors200
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
