/* eslint-disable @typescript-eslint/ban-types */
export default interface Editor {
  'editor.background': string
  'editor.foreground': string
  'editor.selectionBackground': string
  'editor.selectionForeground': string
  'editor.inactiveSelectionBackground': string
  'editor.selectionHighlightBackground': string
  'editor.selectionHighlightBorder': string
  'editor.wordHighlightBackground': string
  'editor.wordHighlightBorder': string
  'editor.wordHighlightStrongBackground': string
  'editor.wordHighlightStrongBorder': string
  'editor.findMatchBackground': string
  'editor.findMatchHighlightBackground': string
  'editor.findRangeHighlightBackground': string
  'editor.findMatchBorder': string
  'editor.findMatchHighlightBorder': string
  'editor.findRangeHighlightBorder': string
  'editor.hoverHighlightBackground': string
  'editor.lineHighlightBackground': string
  'editor.lineHighlightBorder': string
  'editor.rangeHighlightBackground': string
  'editor.rangeHighlightBorder': string
  'editor.symbolHighlightBackground': string
  'editor.symbolHighlightBorder': string
  'editor.guides.indentation': boolean
  'editor.guides.highlightActiveIndentation': boolean
  'editor.inlineSuggest.enabled': boolean
  rulers: {}
  'editor.linkedEditingBackground': string
  'editor.foldBackground': string
  'editor.stackFrameHighlightBackground': string
  'editor.focusedStackFrameHighlightBackground': string // debug
  'editor.inlineValuesForeground': string
  'editor.inlineValuesBackground': string
  // Snippets colors
  'editor.snippetTabstopHighlightBackground': string
  'editor.snippetTabstopHighlightBorder': string
  'editor.snippetFinalTabstopHighlightBackground': string
  'editor.snippetFinalTabstopHighlightBorder': string
}

export interface EditorDebug {
  'editor.focusedStackFrameHighlightBackground': string // debug
  'editor.inlineValuesForeground': string
  'editor.inlineValuesBackground': string
}

export interface EditorBracketHighlight {
  'editorBracketHighlight.foreground1': string
  'editorBracketHighlight.foreground2': string
  'editorBracketHighlight.foreground3': string
  'editorBracketHighlight.foreground4': string
  'editorBracketHighlight.foreground5': string
  'editorBracketHighlight.foreground6': string
  'editorBracketHighlight.unexpectedBracket.foreground': string
}

export interface EditorBracketMatch {
  'editorBracketMatch.background': string
  'editorBracketMatch.border': string
}

export interface EditorBracketPairGuide {
  'editorBracketPairGuide.activeBackground1': string
  'editorBracketPairGuide.activeBackground2': string
  'editorBracketPairGuide.activeBackground3': string
  'editorBracketPairGuide.activeBackground4': string
  'editorBracketPairGuide.activeBackground5': string
  'editorBracketPairGuide.activeBackground6': string
  'editorBracketPairGuide.background1': string
  'editorBracketPairGuide.background2': string
  'editorBracketPairGuide.background3': string
  'editorBracketPairGuide.background4': string
  'editorBracketPairGuide.background5': string
  'editorBracketPairGuide.background6': string
}

export interface EditorCodeLens {
  'editorCodeLens.foreground': string
}

export interface EditorCommentsWidget {
  'editorCommentsWidget.resolvedBorder': string
  'editorCommentsWidget.unresolvedBorder': string
  'editorCommentsWidget.rangeBackground': string
  'editorCommentsWidget.rangeBorder': string
  'editorCommentsWidget.rangeActiveBackground': string
  'editorCommentsWidget.rangeActiveBorder': string
}

export interface EditorCursor {
  'editorCursor.background': string
  'editorCursor.foreground': string
}

export interface EditorError {
  'editorError.foreground': string
  'editorError.border': string
  'editorError.background': string
}

export interface EditorGhostText {
  'editorGhostText.border': string
  'editorGhostText.background': string
  'editorGhostText.foreground': string
}

export interface EditorGroup {
  'editorGroup.border': string
  'editorGroup.dropBackground': string
  'editorGroup.emptyBackground': string
  'editorGroup.focusedEmptyBorder': string
  'editorGroup.dropIntoPromptForeground': string
  'editorGroup.dropIntoPromptBackground': string
  'editorGroup.dropIntoPromptBorder': string
}

export interface EditorGroupHeader {
  'editorGroupHeader.noTabsBackground': string
  'editorGroupHeader.tabsBackground': string
  'editorGroupHeader.tabsBorder': string
  'editorGroupHeader.border': string
}

export interface EditorGutter {
  'editorGutter.background': string
  'editorGutter.modifiedBackground': string
  'editorGutter.addedBackground': string
  'editorGutter.deletedBackground': string
  'editorGutter.commentRangeForeground': string
  'editorGutter.foldingControlForeground': string
}

export interface EditorHint {
  'editorHint.foreground': string
  'editorHint.border': string
}

export interface EditorHoverWidget {
  'editorHoverWidget.foreground': string
  'editorHoverWidget.background': string
  'editorHoverWidget.border': string
  'editorHoverWidget.highlightForeground': string
  'editorHoverWidget.statusBarBackground': string
}

export interface EditorIndentGuide {
  'editorIndentGuide.background': string
  'editorIndentGuide.activeBackground': string
}

export interface EditorInfo {
  'editorInfo.foreground': string
  'editorInfo.border': string
  'editorInfo.background': string
}

export interface EditorInlayHint {
  'editorInlayHint.background': string
  'editorInlayHint.foreground': string
  'editorInlayHint.typeForeground': string
  'editorInlayHint.typeBackground': string
  'editorInlayHint.parameterForeground': string
  'editorInlayHint.parameterBackground': string
}

export interface EditorLightBulb {
  'editorLightBulb.foreground': string
}

export interface EditorLightBulbAutoFix {
  'editorLightBulbAutoFix.foreground': string
}

export interface EditorLineNumber {
  'editorLineNumber.foreground': string
  'editorLineNumber.activeForeground': string
}

export interface EditorLink {
  'editorLink.activeForeground': string
}

export interface EditorMarkerNavigation {
  'editorMarkerNavigation.background': string
}

export interface EditorMarkerNavigationError {
  'editorMarkerNavigationError.background': string
}

export interface EditorMarkerNavigationInfo {
  'editorMarkerNavigationInfo.background': string
}

export interface EditorMarkerNavigationWarning {
  'editorMarkerNavigationWarning.background': string
}

export interface EditorOverviewRuler {
  'editorOverviewRuler.background': string
  'editorOverviewRuler.border': string
  'editorOverviewRuler.findMatchForeground': string
  'editorOverviewRuler.rangeHighlightForeground': string
  'editorOverviewRuler.selectionHighlightForeground': string
  'editorOverviewRuler.wordHighlightForeground': string
  'editorOverviewRuler.wordHighlightStrongForeground': string
  'editorOverviewRuler.modifiedForeground': string
  'editorOverviewRuler.addedForeground': string
  'editorOverviewRuler.deletedForeground': string
  'editorOverviewRuler.errorForeground': string
  'editorOverviewRuler.warningForeground': string
  'editorOverviewRuler.infoForeground': string
  'editorOverviewRuler.bracketMatchForeground': string
  // Merge conflicts colors
  'editorOverviewRuler.currentContentForeground': string
  'editorOverviewRuler.incomingContentForeground': string
  'editorOverviewRuler.commonContentForeground': string
}

export interface EditorPane {
  'editorPane.background': string
}

export interface EditorRuler {
  'editorRuler.background': string
}

export interface EditorStickyScroll {
  'editorStickyScroll.background': string
}

export interface EditorStickyScrollHover {
  'editorStickyScrollHover.background': string
}

export interface EditorSuggestWidget {
  'editorSuggestWidget.background': string
  'editorSuggestWidget.border': string
  'editorSuggestWidget.foreground': string
  'editorSuggestWidget.focusHighlightForeground': string
  'editorSuggestWidget.highlightForeground': string
  'editorSuggestWidget.selectedBackground': string
  'editorSuggestWidget.selectedForeground': string
  'editorSuggestWidget.selectedIconForeground': string
}

export interface EditorSuggestWidgetStatus {
  'editorSuggestWidgetStatus.foreground': string
}

export interface EditorUnicodeHighlight {
  'editorUnicodeHighlight.border': string
  'editorUnicodeHighlight.background': string
}

export interface EditorUnnecessaryCode {
  'editorUnnecessaryCode.border': string
  'editorUnnecessaryCode.opacity': string
}

export interface EditorWarning {
  'editorWarning.foreground': string
  'editorWarning.border': string
  'editorWarning.background': string
}

export interface EditorWhitespace {
  'editorWhitespace.foreground': string
}

export interface EditorWidget {
  'editorWidget.foreground': string
  'editorWidget.background': string
  'editorWidget.border': string
  'editorWidget.resizeBorder': string
}
