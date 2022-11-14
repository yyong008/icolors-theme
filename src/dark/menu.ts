import type { Menu, MenuBar } from 'src/types/Menu.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const menu = (): Partial<Menu> => ({
  ['menu.background']: colors.grayColors1100,
  ['menu.foreground']: colors.grayColors100,
  ['menu.selectionForeground']: colors.grayColors100,
  ['menu.selectionBackground']: mapColorsWithRuntimeWeight('900'),
  ['menu.selectionBorder']: '',
  ['menu.separatorBackground']: '',
  ['menu.border']: ''
})

const menuBar = (): Partial<MenuBar> => ({
  ['menubar.selectionForeground']: colors.grayColors100,
  ['menubar.selectionBackground']: mapColorsWithRuntimeWeight('900'),
  ['menubar.selectionBorder']: ''
})

export default {
  menu,
  menuBar
}
