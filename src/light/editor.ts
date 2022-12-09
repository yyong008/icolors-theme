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

import colors, { mapColorsWithRuntimeWeight } from '../designs/index'

const editor = (): Partial<Editor> => ({
  ['editor.background']: colors.grayColors300,
  ['editor.foreground']: mapColorsWithRuntimeWeight('400'),
  ['editor.selectionHighlightBackground']: mapColorsWithRuntimeWeight('200'),
  ['editor.selectionBackground']: '',
  ['editor.wordHighlightBackground']: '',
  ['editor.wordHighlightStrongBackground']: ''
})

// TODO: type
const editorLineHight = () => ({
  ['editor.lineHighlightBackground']: mapColorsWithRuntimeWeight('100'),
  ['editor.lineHighlightBorder']: mapColorsWithRuntimeWeight('200')
})

const editorCursor = (): Partial<EditorCursor> => ({
  ['editorCursor.foreground']: mapColorsWithRuntimeWeight('600'),
  ['editorCursor.background']: colors.grayColors300
})

const editorWhitespace = (): Partial<EditorWhitespace> => ({
  ['editorWhitespace.foreground']: ''
})

const editorIndentGuide = (): Partial<EditorIndentGuide> => ({
  ['editorIndentGuide.background']: '',
  ['editorIndentGuide.activeBackground']: ''
})

const editorGroupColors = (): Partial<EditorGroup> => ({
  ['editorGroup.border']: mapColorsWithRuntimeWeight('400'),
  ['editorGroup.dropBackground']: ''
})

const editorGroupHeaderColors = (): Partial<EditorGroupHeader> => ({
  ['editorGroupHeader.tabsBackground']: colors.grayColors300,
  ['editorGroupHeader.noTabsBackground']: '',
  ['editorGroupHeader.tabsBorder']: colors.grayColors500,
  ['editorGroupHeader.border']: ''
})

const editorWidget = (): Partial<EditorWidget> => ({
  ['editorWidget.background']: mapColorsWithRuntimeWeight('200')
})

const editorHoverWidget = (): Partial<EditorHoverWidget> => ({
  ['editorHoverWidget.background']: colors.grayColors300,
  ['editorHoverWidget.border']: mapColorsWithRuntimeWeight('400')
})

const editorSuggestWidget = (): Partial<EditorSuggestWidget> => ({
  ['editorSuggestWidget.background']: colors.grayColors100,
  ['editorSuggestWidget.border']: mapColorsWithRuntimeWeight('200')
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
  editorLineHight,
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
