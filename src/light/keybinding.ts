import type { KeybindingLabel, keybindingTable } from '../types/Keybinding.js'

import colors from '../designs/index.js'

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
