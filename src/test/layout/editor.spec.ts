import { setRuntimeColors } from '../../designs/index'
import ed from '../../dark/editor'

describe('editor', () => {
  it('editor::length', () => {
    const editor = ed.editor()

    expect(Object.keys(editor)).toHaveLength(7)
  })

  it('editor::blueColors', () => {
    setRuntimeColors('blueColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#69c0ff",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#5cdbd3",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#85a5ff",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::goldColors', () => {
    setRuntimeColors('goldColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#ffd666",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::greenColors', () => {
    setRuntimeColors('greenColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#95de64",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::limeColors', () => {
    setRuntimeColors('limeColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#d3f261",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#ff85c0",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#ffc069",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#b37feb",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::redColors', () => {
    setRuntimeColors('redColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#ff7875",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#ff9c6e",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })

  it('editor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editor = ed.editor()

    expect(editor).toMatchInlineSnapshot(`
      {
        "editor.background": "#1f1f1f",
        "editor.foreground": "#fff566",
        "editor.lineHighlightBackground": "#3e3d32",
        "editor.selectionBackground": "#878b9180",
        "editor.selectionHighlightBackground": "#575b6180",
        "editor.wordHighlightBackground": "#4a4a7680",
        "editor.wordHighlightStrongBackground": "#6a6a9680",
      }
    `)
  })
})

describe('editorCursor', () => {
  it('editorCursor::length', () => {
    const editorCursor = ed.editorCursor()

    expect(Object.keys(editorCursor)).toHaveLength(1)
  })

  it('editorCursor::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::redColors', () => {
    setRuntimeColors('redColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })

  it('editorCursor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorCursor = ed.editorCursor()

    expect(editorCursor).toMatchInlineSnapshot(`
      {
        "editorCursor.foreground": "#f8f8f0",
      }
    `)
  })
})

describe('editorWhitespace', () => {
  it('editorWhitespace::length', () => {
    const editorWhitespace = ed.editorWhitespace()

    expect(Object.keys(editorWhitespace)).toHaveLength(1)
  })

  it('editorWhitespace::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::redColors', () => {
    setRuntimeColors('redColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })

  it('editorWhitespace::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorWhitespace = ed.editorWhitespace()

    expect(editorWhitespace).toMatchInlineSnapshot(`
      {
        "editorWhitespace.foreground": "#464741",
      }
    `)
  })
})

describe('editorIndentGuide', () => {
  it('editorIndentGuide::length', () => {
    const editorIndentGuide = ed.editorIndentGuide()

    expect(Object.keys(editorIndentGuide)).toHaveLength(2)
  })

  it('editorIndentGuide::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::redColors', () => {
    setRuntimeColors('redColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })

  it('editorIndentGuide::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorIndentGuide = ed.editorIndentGuide()

    expect(editorIndentGuide).toMatchInlineSnapshot(`
      {
        "editorIndentGuide.activeBackground": "#767771",
        "editorIndentGuide.background": "#464741",
      }
    `)
  })
})

describe('editorGroupColors', () => {
  it('editorGroupColors::length', () => {
    const editorGroupColors = ed.editorGroupColors()

    expect(Object.keys(editorGroupColors)).toHaveLength(2)
  })

  it('editorGroupColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#69c0ff",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#5cdbd3",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#85a5ff",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#ffd666",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#95de64",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#d3f261",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#ff85c0",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#ffc069",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#b37feb",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::redColors', () => {
    setRuntimeColors('redColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#ff7875",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#ff9c6e",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })

  it('editorGroupColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorGroupColors = ed.editorGroupColors()

    expect(editorGroupColors).toMatchInlineSnapshot(`
      {
        "editorGroup.border": "#fff566",
        "editorGroup.dropBackground": "#41433980",
      }
    `)
  })
})

describe('editorGroupHeaderColors', () => {
  it('editorGroupHeaderColors::length', () => {
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(Object.keys(editorGroupHeaderColors)).toHaveLength(1)
  })

  it('editorGroupHeaderColors::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::redColors', () => {
    setRuntimeColors('redColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })

  it('editorGroupHeaderColors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorGroupHeaderColors = ed.editorGroupHeaderColors()

    expect(editorGroupHeaderColors).toMatchInlineSnapshot(`
      {
        "editorGroupHeader.tabsBackground": "#1e1f1c",
      }
    `)
  })
})

describe('editorHoverWidget', () => {
  it('editorHoverWidget::length', () => {
    const editorHoverWidget = ed.editorHoverWidget()

    expect(Object.keys(editorHoverWidget)).toHaveLength(2)
  })

  it('editorHoverWidget::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::redColors', () => {
    setRuntimeColors('redColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })

  it('editorHoverWidget::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorHoverWidget = ed.editorHoverWidget()

    expect(editorHoverWidget).toMatchInlineSnapshot(`
      {
        "editorHoverWidget.background": "#262626",
        "editorHoverWidget.border": "#75715E",
      }
    `)
  })
})

describe('editorSuggestWidget', () => {
  it('editorSuggestWidget::length', () => {
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(Object.keys(editorSuggestWidget)).toHaveLength(2)
  })

  it('editorSuggestWidget::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::redColors', () => {
    setRuntimeColors('redColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })

  it('editorSuggestWidget::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorSuggestWidget = ed.editorSuggestWidget()

    expect(editorSuggestWidget).toMatchInlineSnapshot(`
      {
        "editorSuggestWidget.background": "#272822",
        "editorSuggestWidget.border": "#75715E",
      }
    `)
  })
})

describe('editorLineNumber', () => {
  it('editorLineNumber::length', () => {
    const editorLineNumber = ed.editorLineNumber()

    expect(Object.keys(editorLineNumber)).toHaveLength(2)
  })

  it('editorLineNumber::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::redColors', () => {
    setRuntimeColors('redColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })

  it('editorLineNumber::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorLineNumber = ed.editorLineNumber()

    expect(editorLineNumber).toMatchInlineSnapshot(`
      {
        "editorLineNumber.activeForeground": "#c2c2bf",
        "editorLineNumber.foreground": "#90908a",
      }
    `)
  })
})

describe('editorDebug', () => {
  it('editorDebug::length', () => {
    const editorDebug = ed.editorDebug()

    expect(Object.keys(editorDebug)).toHaveLength(3)
  })

  it('editorDebug::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::redColors', () => {
    setRuntimeColors('redColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })

  it('editorDebug::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorDebug = ed.editorDebug()

    expect(editorDebug).toMatchInlineSnapshot(`
      {
        "editor.focusedStackFrameHighlightBackground": "",
        "editor.inlineValuesBackground": "",
        "editor.inlineValuesForeground": "",
      }
    `)
  })
})

describe('editorCommentsWidget', () => {
  it('editorCommentsWidget::length', () => {
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(Object.keys(editorCommentsWidget)).toHaveLength(6)
  })

  it('editorCommentsWidget::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::redColors', () => {
    setRuntimeColors('redColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })

  it('editorCommentsWidget::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorCommentsWidget = ed.editorCommentsWidget()

    expect(editorCommentsWidget).toMatchInlineSnapshot(`
      {
        "editorCommentsWidget.rangeActiveBackground": "",
        "editorCommentsWidget.rangeActiveBorder": "",
        "editorCommentsWidget.rangeBackground": "",
        "editorCommentsWidget.rangeBorder": "",
        "editorCommentsWidget.resolvedBorder": "",
        "editorCommentsWidget.unresolvedBorder": "",
      }
    `)
  })
})
