import {
  Notebook,
  NotebookScrollbarSlider,
  NotebookStatusErrorIcon,
  NotebookStatusRunningIcon,
  NotebookStatusSuccessIcon
} from 'src/types/Notebook.js'

const notebook = (): Partial<Notebook> => ({
  ['notebook.editorBackground']: '',
  ['notebook.cellBorderColor']: '',
  ['notebook.cellHoverBackground']: '',
  ['notebook.cellInsertionIndicator']: '',
  ['notebook.cellStatusBarItemHoverBackground']: '',
  ['notebook.cellToolbarSeparator']: '',
  ['notebook.cellEditorBackground']: '',
  ['notebook.focusedCellBackground']: '',
  ['notebook.focusedCellBorder']: '',
  ['notebook.focusedEditorBorder']: '',
  ['notebook.inactiveFocusedCellBorder']: '',
  ['notebook.inactiveSelectedCellBorder']: '',
  ['notebook.outputContainerBackgroundColor']: '',
  ['notebook.outputContainerBorderColor']: '',
  ['notebook.selectedCellBackground']: '',
  ['notebook.selectedCellBorder']: '',
  ['notebook.symbolHighlightBackground']: ''
})

const notebookScrollbarSlider = (): Partial<NotebookScrollbarSlider> => ({
  ['notebookScrollbarSlider.activeBackground']: '',
  ['notebookScrollbarSlider.background']: '',
  ['notebookScrollbarSlider.hoverBackground']: ''
})

const notebookStatusErrorIcon = (): Partial<NotebookStatusErrorIcon> => ({
  ['notebookStatusErrorIcon.foreground']: ''
})

const notebookStatusRunningIcon = (): Partial<NotebookStatusRunningIcon> => ({
  ['notebookStatusRunningIcon.foreground']: ''
})

const notebookStatusSuccessIcon = (): Partial<NotebookStatusSuccessIcon> => ({
  ['notebookStatusSuccessIcon.foreground']: ''
})

export default {
  notebook,
  notebookScrollbarSlider,
  notebookStatusErrorIcon,
  notebookStatusRunningIcon,
  notebookStatusSuccessIcon
}
