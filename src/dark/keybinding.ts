import type { KeybindingLabel, keybindingTable } from '../types/Keybinding'

import colors from '../designs/index'

const keybindingLabel = (): Partial<KeybindingLabel> => ({
  ['keybindingLabel.background']: '',
  ['keybindingLabel.foreground']: '',
  ['keybindingLabel.border']: '',
  ['keybindingLabel.bottomBorder']: ''
})

const keybindingTable = (): Partial<keybindingTable> => ({
  ['keybindingTable.headerBackground']: colors.redColors500,
  ['keybindingTable.rowsBackground']: ''
})

export default {
  keybindingLabel,
  keybindingTable
}
