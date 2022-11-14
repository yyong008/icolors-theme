import type BaseColors from '../types/BaseColors'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const baseColors = (): Partial<BaseColors> => ({
  focusBorder: mapColorsWithRuntimeWeight('400'),
  foreground: colors.grayColors100,
  disabledForeground: colors.grayColors800,
  descriptionForeground: mapColorsWithRuntimeWeight('400'),
  errorForeground: colors.redColors600
})

export default { baseColors }
