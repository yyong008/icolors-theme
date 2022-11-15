import type Breadcrumb from 'src/types/Breadcrumb'
import type { BreadcrumbPicker } from 'src/types/Breadcrumb'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const breadbrumbs = (): Partial<Breadcrumb> => ({
  ['breadcrumb.foreground']: colors.grayColors100,
  ['breadcrumb.background']: colors.grayColors1100,
  ['breadcrumb.focusForeground']: mapColorsWithRuntimeWeight('400'),
  ['breadcrumb.activeSelectionForeground']: mapColorsWithRuntimeWeight('400')
})

const breadcrumbPicker = (): Partial<BreadcrumbPicker> => ({
  ['breadcrumbPicker.background']: colors.grayColors1000
})

export default {
  breadbrumbs,
  breadcrumbPicker
}
