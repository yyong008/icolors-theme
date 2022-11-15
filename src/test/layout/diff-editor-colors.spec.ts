import { setRuntimeColors } from '../../designs/index'
import dec from '../../dark/diff-editor-colors'

describe('diffEditor', () => {
  it('diffEditor::length', () => {
    const diffEditor = dec.diffEditor()

    expect(Object.keys(diffEditor)).toHaveLength(7)
  })

  it('diffEditor::blueColors', () => {
    setRuntimeColors('blueColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::goldColors', () => {
    setRuntimeColors('goldColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::greenColors', () => {
    setRuntimeColors('greenColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::limeColors', () => {
    setRuntimeColors('limeColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::redColors', () => {
    setRuntimeColors('redColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })

  it('diffEditor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const diffEditor = dec.diffEditor()

    expect(diffEditor).toMatchInlineSnapshot(`
      {
        "diffEditor.border": "",
        "diffEditor.diagonalFill": "",
        "diffEditor.insertedLineBackground": "",
        "diffEditor.insertedTextBackground": "#4b661680",
        "diffEditor.removedLineBackground": "",
        "diffEditor.removedTextBackground": "#90274A70",
        "diffEditor.removedTextBorder": "",
      }
    `)
  })
})

describe('diffEditorGutter', () => {
  it('diffEditorGutter::length', () => {
    const diffEditorGutter = dec.diffEditorGutter()

    expect(Object.keys(diffEditorGutter)).toHaveLength(2)
  })

  it('diffEditorGutter::blueColors', () => {
    setRuntimeColors('blueColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::goldColors', () => {
    setRuntimeColors('goldColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::greenColors', () => {
    setRuntimeColors('greenColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::limeColors', () => {
    setRuntimeColors('limeColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::redColors', () => {
    setRuntimeColors('redColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })

  it('diffEditorGutter::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const diffEditorGutter = dec.diffEditorGutter()

    expect(diffEditorGutter).toMatchInlineSnapshot(`
      {
        "diffEditorGutter.insertedLineBackground": "",
        "diffEditorGutter.removedLineBackground": "",
      }
    `)
  })
})

describe('diffEditorOverview', () => {
  it('diffEditorOverview::length', () => {
    const diffEditorOverview = dec.diffEditorOverview()

    expect(Object.keys(diffEditorOverview)).toHaveLength(2)
  })

  it('diffEditorOverview::blueColors', () => {
    setRuntimeColors('blueColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::goldColors', () => {
    setRuntimeColors('goldColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::greenColors', () => {
    setRuntimeColors('greenColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::limeColors', () => {
    setRuntimeColors('limeColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::redColors', () => {
    setRuntimeColors('redColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })

  it('diffEditorOverview::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const diffEditorOverview = dec.diffEditorOverview()

    expect(diffEditorOverview).toMatchInlineSnapshot(`
      {
        "diffEditorOverview.insertedForeground": "",
        "diffEditorOverview.removedForeground": "",
      }
    `)
  })
})
