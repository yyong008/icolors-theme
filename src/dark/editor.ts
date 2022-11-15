import type Editor from '../types/Editor'
import type {
  EditorCursor,
  EditorWhitespace,
  EditorIndentGuide,
  EditorGroup,
  EditorGroupHeader,
  EditorWidget,
  EditorHoverWidget,
  EditorSuggestWidget,
  EditorLineNumber,
  EditorDebug,
  EditorCommentsWidget
} from '../types/Editor'

import colors, {
  mapColorsReverseWithRuntimeWeight,
  mapColorsWithRuntimeWeight
} from '../designs/index'

const editor = (): Partial<Editor> => ({
  ['editor.background']: colors.grayColors1200,
  ['editor.foreground']: mapColorsWithRuntimeWeight('400'),
  ['editor.selectionHighlightBackground']: '#575b6180',
  ['editor.selectionBackground']: '#878b9180',
  ['editor.wordHighlightBackground']: '#4a4a7680',
  ['editor.wordHighlightStrongBackground']: '#6a6a9680',
  ['editor.lineHighlightBackground']: '#3e3d3290'
})

const editorCursor = (): Partial<EditorCursor> => ({
  ['editorCursor.foreground']: '#f8f8f0'
})

const editorWhitespace = (): Partial<EditorWhitespace> => ({
  ['editorWhitespace.foreground']: '#464741'
})

const editorIndentGuide = (): Partial<EditorIndentGuide> => ({
  ['editorIndentGuide.background']: '#464741',
  ['editorIndentGuide.activeBackground']: '#767771'
})

const editorGroupColors = (): Partial<EditorGroup> => ({
  ['editorGroup.border']: mapColorsWithRuntimeWeight('400'),
  ['editorGroup.dropBackground']: '#41433980'
})

const editorGroupHeaderColors = (): Partial<EditorGroupHeader> => ({
  ['editorGroupHeader.tabsBackground']: '#1e1f1c'
})

const editorWidget = (): Partial<EditorWidget> => ({
  ['editorWidget.background']: colors.grayColors1100
})

const editorHoverWidget = (): Partial<EditorHoverWidget> => ({
  ['editorHoverWidget.background']: colors.grayColors1000,
  ['editorHoverWidget.border']: '#75715E'
})

const editorSuggestWidget = (): Partial<EditorSuggestWidget> => ({
  ['editorSuggestWidget.background']: '#272822',
  ['editorSuggestWidget.border']: '#75715E'
})

const editorLineNumber = (): Partial<EditorLineNumber> => ({
  ['editorLineNumber.foreground']: colors.grayColors900,
  ['editorLineNumber.activeForeground']: mapColorsWithRuntimeWeight('600')
})

export const editorDebug = (): Partial<EditorDebug> => ({
  ['editor.focusedStackFrameHighlightBackground']: '',
  ['editor.inlineValuesForeground']: '',
  ['editor.inlineValuesBackground']: ''
})

const editorCommentsWidget = (): Partial<EditorCommentsWidget> => ({
  ['editorCommentsWidget.resolvedBorder']: '',
  ['editorCommentsWidget.unresolvedBorder']: '',
  ['editorCommentsWidget.rangeBackground']: '',
  ['editorCommentsWidget.rangeBorder']: '',
  ['editorCommentsWidget.rangeActiveBackground']: '',
  ['editorCommentsWidget.rangeActiveBorder']: ''
})

export default {
  editor,
  editorCursor,
  editorWhitespace,
  editorIndentGuide,
  editorGroupColors,
  editorGroupHeaderColors,
  editorWidget,
  editorHoverWidget,
  editorSuggestWidget,
  editorLineNumber,
  editorDebug,
  editorCommentsWidget
}
