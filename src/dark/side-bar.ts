import type Scrollbar from 'src/types/SideBar'
import type { SideBarSectionHeader } from 'src/types/SideBar'

import colors from '../designs/index'

const sideBar = (): Partial<Scrollbar> => ({
  ['sideBar.background']: colors.grayColors1000,
  ['sideBar.foreground']: colors.grayColors100,
  ['sideBar.border']: colors.grayColors1000
})

const sideBarSectionHeader = (): Partial<SideBarSectionHeader> => ({
  ['sideBarSectionHeader.background']: '#272822'
})

export default { sideBar, sideBarSectionHeader }
