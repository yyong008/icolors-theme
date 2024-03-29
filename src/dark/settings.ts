import type Settings from 'src/types/Settings'

import colors, {
  mapColorsWithRuntimeWeight,
  mapColorsReverseWithRuntimeWeight
} from '../designs/index'

const settingEditor = (): Partial<Settings> => ({
  ['settings.headerForeground']: mapColorsWithRuntimeWeight('600'),
  ['settings.modifiedItemIndicator']: mapColorsReverseWithRuntimeWeight('500'),
  ['settings.dropdownBackground']: colors.grayColors900,
  ['settings.dropdownForeground']: colors.grayColors100,
  ['settings.dropdownBorder']: '',
  ['settings.dropdownListBorder']: '',
  ['settings.checkboxBackground']: colors.grayColors1200,
  ['settings.checkboxForeground']: mapColorsWithRuntimeWeight('500'),
  ['settings.checkboxBorder']: '',
  ['settings.rowHoverBackground']: '',
  ['settings.textInputBackground']: colors.grayColors900,
  ['settings.textInputForeground']: '',
  ['settings.textInputBorder']: '',
  ['settings.numberInputBackground']: colors.grayColors900,
  ['settings.numberInputForeground']: colors.grayColors100,
  ['settings.numberInputBorder']: '',
  ['settings.focusedRowBackground']: mapColorsReverseWithRuntimeWeight('800'),
  ['settings.focusedRowBorder']: mapColorsReverseWithRuntimeWeight('300'),
  ['settings.headerBorder']: mapColorsWithRuntimeWeight('700'),
  ['settings.sashBorder']: mapColorsWithRuntimeWeight('700')
})

export default {
  settingEditor
}
