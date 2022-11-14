import type {
  PeekView,
  PeekViewEditor,
  PeekViewResult,
  PeekViewTitle
} from 'src/types/PeekView'

import colors from '../designs/index'

const peekView = (): Partial<PeekView> => ({
  ['peekView.border']: colors.blueColors800
})

const peekViewEditor = (): Partial<PeekViewEditor> => ({
  ['peekViewEditor.background']: '#272822',
  ['peekViewEditor.matchHighlightBackground']: '#75715E'
})

const peekViewResult = (): Partial<PeekViewResult> => ({
  ['peekViewResult.background']: '#1e1f1c',
  ['peekViewResult.selectionBackground']: '#414339',
  ['peekViewResult.matchHighlightBackground']: '#75715E'
})

const peekViewTitle = (): Partial<PeekViewTitle> => ({
  ['peekViewTitle.background']: '#1e1f1c'
})

export default {
  peekView,
  peekViewEditor,
  peekViewResult,
  peekViewTitle
}
