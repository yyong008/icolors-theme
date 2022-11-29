import type { Menu, MenuBar } from 'src/types/Menu.js'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const menu = (): Partial<Menu> => ({
  ['menu.background']: colors.grayColors300,
  ['menu.foreground']: colors.grayColors1300,
  ['menu.selectionForeground']: colors.grayColors100,
  ['menu.selectionBackground']: mapColorsWithRuntimeWeight('900'),
  ['menu.selectionBorder']: '',
  ['menu.separatorBackground']: '',
  ['menu.border']: mapColorsWithRuntimeWeight('700')
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
