import type Settings from 'src/types/Settings'

import colors, {
  mapColorsWithRuntimeWeight,
  mapColorsReverseWithRuntimeWeight
} from '../designs/index.js'

const settingEditor = (): Partial<Settings> => ({
  ['settings.headerForeground']: mapColorsWithRuntimeWeight('600'),
  ['settings.modifiedItemIndicator']: colors.greenColors500,
  ['settings.dropdownBackground']: colors.grayColors500,
  ['settings.dropdownForeground']: colors.grayColors1100,
  ['settings.dropdownBorder']: '',
  ['settings.dropdownListBorder']: '',
  ['settings.checkboxBackground']: colors.grayColors300,
  ['settings.checkboxForeground']: colors.grayColors1100,
  ['settings.checkboxBorder']: '',
  ['settings.rowHoverBackground']: '',
  ['settings.textInputBackground']: colors.grayColors500,
  ['settings.textInputForeground']: colors.grayColors1100,
  ['settings.textInputBorder']: '',
  ['settings.numberInputBackground']: colors.grayColors300,
  ['settings.numberInputForeground']: colors.grayColors1100,
  ['settings.numberInputBorder']: '',
  ['settings.focusedRowBackground']: mapColorsWithRuntimeWeight('100'),
  ['settings.focusedRowBorder']: mapColorsReverseWithRuntimeWeight('300'),
  ['settings.headerBorder']: mapColorsWithRuntimeWeight('300'),
  ['settings.sashBorder']: mapColorsWithRuntimeWeight('200')
})

export default {
  settingEditor
}
