import type WelcomePage from '../types/WelcomePage'
import type { WorkThrough } from '../types/WelcomePage'

const welcomePage = (): Partial<WelcomePage> => ({
  ['welcomePage.background']: '',
  ['welcomePage.progress.background']: '',
  ['welcomePage.progress.foreground']: '',
  ['welcomePage.tileBackground']: '',
  ['welcomePage.tileHoverBackground']: '',
  ['welcomePage.tileShadow']: ''
})

const workThrough = (): Partial<WorkThrough> => ({
  ['walkThrough.embeddedEditorBackground']: ''
})

export default {
  welcomePage,
  workThrough
}
