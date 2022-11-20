import type Scrollbar from 'src/types/SideBar'
import type { SideBarSectionHeader } from 'src/types/SideBar'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index.js'

const sideBar = (): Partial<Scrollbar> => ({
  ['sideBar.background']: colors.grayColors300,
  ['sideBar.foreground']: colors.grayColors1100,
  ['sideBar.border']: colors.grayColors900
})

const sideBarSectionHeader = (): Partial<SideBarSectionHeader> => ({
  ['sideBarSectionHeader.background']: colors.grayColors300
})

export default { sideBar, sideBarSectionHeader }
