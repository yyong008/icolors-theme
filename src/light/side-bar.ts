import type Scrollbar from 'src/types/SideBar'
import type { SideBarSectionHeader } from 'src/types/SideBar'

import colors from '../designs/index.js'

const sideBar = (): Partial<Scrollbar> => ({
  ['sideBar.background']: colors.grayColors400,
  ['sideBar.foreground']: colors.grayColors1100,
  ['sideBar.border']: colors.grayColors500
})

const sideBarSectionHeader = (): Partial<SideBarSectionHeader> => ({
  ['sideBarSectionHeader.background']: colors.grayColors300
})

export default { sideBar, sideBarSectionHeader }
