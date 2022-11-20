import type { QuickInputList } from 'src/types/QuickInput'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const quickInputList = (): Partial<QuickInputList> => ({
  ['quickInputList.focusBackground']: mapColorsWithRuntimeWeight('900'),
  ['quickInputList.focusForeground']: colors.grayColors100,
  ['quickInputList.focusIconForeground']: mapColorsWithRuntimeWeight('400')
  // ['quickInputList.background']: colors.grayColors1100
})

export default { quickInputList }
