// import colors from '../designs/index'

import type {
  diffEditor,
  diffEditorGutter,
  diffEditorOverview
} from '../types/DiffEditor.js'

const diffEditor = (): Partial<diffEditor> => ({
  ['diffEditor.insertedTextBackground']: '#4b661680',
  ['diffEditor.removedTextBackground']: '#90274A70',
  ['diffEditor.removedTextBorder']: '',
  ['diffEditor.border']: '',
  ['diffEditor.diagonalFill']: '',
  ['diffEditor.insertedLineBackground']: '',
  ['diffEditor.removedLineBackground']: ''
})

const diffEditorGutter = (): Partial<diffEditorGutter> => ({
  ['diffEditorGutter.insertedLineBackground']: '',
  ['diffEditorGutter.removedLineBackground']: ''
})

const diffEditorOverview = (): Partial<diffEditorOverview> => ({
  ['diffEditorOverview.insertedForeground']: '',
  ['diffEditorOverview.removedForeground']: ''
})

export default {
  diffEditor,
  diffEditorGutter,
  diffEditorOverview
}
