import type {
  QuickInput,
  QuickInputList,
  QuickInputTitle
} from 'src/types/QuickInput'

import type { PickerGroup } from 'src/types/PickerGroup'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

// pickerGroup
// quickInput
// quickInputList
// quickInputTitle

const pickerGroup = (): Partial<PickerGroup> => ({
  ['pickerGroup.foreground']: '',
  ['pickerGroup.border']: ''
})

const quickInput = (): Partial<QuickInput> => ({
  ['quickInput.background']: mapColorsWithRuntimeWeight('100'),
  ['quickInput.foreground']: colors.greenColors1000
})

const quickInputList = (): Partial<QuickInputList> => ({
  ['quickInputList.focusBackground']: mapColorsWithRuntimeWeight('400'),
  ['quickInputList.focusForeground']: colors.grayColors1100,
  ['quickInputList.focusIconForeground']: ''
})

const quickInputTitle = (): Partial<QuickInputTitle> => ({
  ['quickInputTitle.background']: ''
})

export default {
  pickerGroup,
  quickInput,
  quickInputList,
  quickInputTitle
}
