import type WelcomePage from '../types/WelcomePage'
import type { WorkThrough } from '../types/WelcomePage'

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const welcomePage = (): Partial<WelcomePage> => ({
  ['welcomePage.background']: colors.grayColors300,
  // ['welcomePage.foreground']: colors.grayColors1100,
  ['welcomePage.progress.background']: mapColorsWithRuntimeWeight('900'),
  ['welcomePage.progress.foreground']: mapColorsWithRuntimeWeight('300'),
  ['welcomePage.tileBackground']: colors.grayColors500,
  ['welcomePage.tileHoverBackground']: colors.grayColors700,
  ['welcomePage.tileShadow']: ''
})

const workThrough = (): Partial<WorkThrough> => ({
  ['walkThrough.embeddedEditorBackground']: ''
})

export default {
  welcomePage,
  workThrough
}
