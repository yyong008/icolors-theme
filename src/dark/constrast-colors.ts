import type ContrastColors from '../types/ContrastColors'

import { mapColorsWithRuntimeWeight } from '../designs/index'

const ContrastColors = (): Partial<ContrastColors> => ({
  contrastActiveBorder: mapColorsWithRuntimeWeight('1000'),
  contrastBorder: ''
})

export default {
  ContrastColors
}
