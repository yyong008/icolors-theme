import { setRuntimeColors } from '../../designs/index'
import nb from '../../dark/notebook-colors'

describe('notebook', () => {
  it('notebook::length', () => {
    const notebook = nb.notebook()

    expect(Object.keys(notebook)).toHaveLength(17)
  })

  it('notebook::blueColors', () => {
    setRuntimeColors('blueColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::goldColors', () => {
    setRuntimeColors('goldColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::greenColors', () => {
    setRuntimeColors('greenColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::limeColors', () => {
    setRuntimeColors('limeColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::redColors', () => {
    setRuntimeColors('redColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })

  it('notebook::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notebook = nb.notebook()

    expect(notebook).toMatchInlineSnapshot(`
      {
        "notebook.cellBorderColor": "",
        "notebook.cellEditorBackground": "",
        "notebook.cellHoverBackground": "",
        "notebook.cellInsertionIndicator": "",
        "notebook.cellStatusBarItemHoverBackground": "",
        "notebook.cellToolbarSeparator": "",
        "notebook.editorBackground": "",
        "notebook.focusedCellBackground": "",
        "notebook.focusedCellBorder": "",
        "notebook.focusedEditorBorder": "",
        "notebook.inactiveFocusedCellBorder": "",
        "notebook.inactiveSelectedCellBorder": "",
        "notebook.outputContainerBackgroundColor": "",
        "notebook.outputContainerBorderColor": "",
        "notebook.selectedCellBackground": "",
        "notebook.selectedCellBorder": "",
        "notebook.symbolHighlightBackground": "",
      }
    `)
  })
})

describe('notebookScrollbarSlider', () => {
  it('notebookScrollbarSlider::length', () => {
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(Object.keys(notebookScrollbarSlider)).toHaveLength(3)
  })

  it('notebookScrollbarSlider::blueColors', () => {
    setRuntimeColors('blueColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::goldColors', () => {
    setRuntimeColors('goldColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::greenColors', () => {
    setRuntimeColors('greenColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::limeColors', () => {
    setRuntimeColors('limeColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::redColors', () => {
    setRuntimeColors('redColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('notebookScrollbarSlider::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notebookScrollbarSlider = nb.notebookScrollbarSlider()

    expect(notebookScrollbarSlider).toMatchInlineSnapshot(`
      {
        "notebookScrollbarSlider.activeBackground": "",
        "notebookScrollbarSlider.background": "",
        "notebookScrollbarSlider.hoverBackground": "",
      }
    `)
  })
})

describe('notebookStatusErrorIcon', () => {
  it('notebookStatusErrorIcon::length', () => {
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(Object.keys(notebookStatusErrorIcon)).toHaveLength(1)
  })

  it('notebookStatusErrorIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusErrorIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notebookStatusErrorIcon = nb.notebookStatusErrorIcon()

    expect(notebookStatusErrorIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusErrorIcon.foreground": "",
      }
    `)
  })
})

describe('notebookStatusRunningIcon', () => {
  it('notebookStatusRunningIcon::length', () => {
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(Object.keys(notebookStatusRunningIcon)).toHaveLength(1)
  })

  it('notebookStatusRunningIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusRunningIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notebookStatusRunningIcon = nb.notebookStatusRunningIcon()

    expect(notebookStatusRunningIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusRunningIcon.foreground": "",
      }
    `)
  })
})

describe('notebookStatusSuccessIcon', () => {
  it('notebookStatusSuccessIcon::length', () => {
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(Object.keys(notebookStatusSuccessIcon)).toHaveLength(1)
  })

  it('notebookStatusSuccessIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })

  it('notebookStatusSuccessIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notebookStatusSuccessIcon = nb.notebookStatusSuccessIcon()

    expect(notebookStatusSuccessIcon).toMatchInlineSnapshot(`
      {
        "notebookStatusSuccessIcon.foreground": "",
      }
    `)
  })
})
