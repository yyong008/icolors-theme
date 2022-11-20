import type ContrastColors from '../types/ContrastColors.js'

import { mapColorsWithRuntimeWeight } from '../designs/index.js'

const ContrastColors = (): Partial<ContrastColors> => ({
  contrastActiveBorder: mapColorsWithRuntimeWeight('1000'),
  contrastBorder: ''
})

export default {
  ContrastColors
}
