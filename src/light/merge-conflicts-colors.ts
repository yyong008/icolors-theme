import type { Merge, MergeEditor } from 'src/types/Merge'

const merge = (): Partial<Merge> => ({
  ['merge.currentHeaderBackground']: '',
  ['merge.currentContentBackground']: '',
  ['merge.incomingHeaderBackground']: '',
  ['merge.incomingContentBackground']: '',
  ['merge.border']: '',
  ['merge.commonContentBackground']: '',
  ['merge.commonHeaderBackground']: ''
})

// TODO: editorOverviewRuler
const editorOverviewRuler = () => ({
  ['editorOverviewRuler.currentContentForeground']: '',
  ['editorOverviewRuler.incomingContentForeground']: '',
  ['editorOverviewRuler.commonContentForeground']: ''
})

const mergeEditor = (): Partial<MergeEditor> => ({
  ['mergeEditor.change.background']: '',
  ['mergeEditor.change.word.background']: '',
  ['mergeEditor.conflict.unhandledFocused.border']: '',
  ['mergeEditor.conflict.handledUnfocused.border']: '',
  ['mergeEditor.conflict.handledFocused.border']: '',
  ['mergeEditor.conflict.handled.minimapOverViewRuler']: '',
  ['mergeEditor.conflict.unhandled.minimapOverViewRuler']: '',
  ['mergeEditor.conflictingLines.background']: ''
})

export default {
  merge,
  editorOverviewRuler,
  mergeEditor
}
