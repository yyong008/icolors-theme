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
  ['pickerGroup.foreground']: '#75715E',
  ['pickerGroup.border']: ''
})

const quickInput = (): Partial<QuickInput> => ({
  ['quickInput.background']: colors.grayColors300,
  ['quickInput.foreground']: mapColorsWithRuntimeWeight('500')
})

const quickInputList = (): Partial<QuickInputList> => ({
  ['quickInputList.focusBackground']: colors.grayColors300,
  ['quickInputList.focusForeground']: colors.grayColors1100,
  ['quickInputList.focusIconForeground']: mapColorsWithRuntimeWeight('400')
  // ['quickInputList.background']: colors.grayColors1100
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
