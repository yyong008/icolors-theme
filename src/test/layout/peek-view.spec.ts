import { setRuntimeColors } from '../../designs/index'
import pv from '../../dark/peek-view-colors'

describe('peekView', () => {
  it('peekView::length', () => {
    const peekView = pv.peekView()

    expect(Object.keys(peekView)).toHaveLength(1)
  })

  it('peekView::blueColors', () => {
    setRuntimeColors('blueColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::goldColors', () => {
    setRuntimeColors('goldColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::greenColors', () => {
    setRuntimeColors('greenColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::limeColors', () => {
    setRuntimeColors('limeColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::redColors', () => {
    setRuntimeColors('redColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })

  it('peekView::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const peekView = pv.peekView()

    expect(peekView).toMatchInlineSnapshot(`
      {
        "peekView.border": "#0050b3",
      }
    `)
  })
})

describe('peekViewEditor', () => {
  it('peekViewEditor::length', () => {
    const peekViewEditor = pv.peekViewEditor()

    expect(Object.keys(peekViewEditor)).toHaveLength(2)
  })

  it('peekViewEditor::blueColors', () => {
    setRuntimeColors('blueColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::goldColors', () => {
    setRuntimeColors('goldColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::greenColors', () => {
    setRuntimeColors('greenColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::limeColors', () => {
    setRuntimeColors('limeColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::redColors', () => {
    setRuntimeColors('redColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })

  it('peekViewEditor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const peekViewEditor = pv.peekViewEditor()

    expect(peekViewEditor).toMatchInlineSnapshot(`
      {
        "peekViewEditor.background": "#272822",
        "peekViewEditor.matchHighlightBackground": "#75715E",
      }
    `)
  })
})

describe('peekViewResult', () => {
  it('peekViewResult::length', () => {
    const peekViewResult = pv.peekViewResult()

    expect(Object.keys(peekViewResult)).toHaveLength(3)
  })

  it('peekViewResult::blueColors', () => {
    setRuntimeColors('blueColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::goldColors', () => {
    setRuntimeColors('goldColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::greenColors', () => {
    setRuntimeColors('greenColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::limeColors', () => {
    setRuntimeColors('limeColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::redColors', () => {
    setRuntimeColors('redColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })

  it('peekViewResult::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const peekViewResult = pv.peekViewResult()

    expect(peekViewResult).toMatchInlineSnapshot(`
      {
        "peekViewResult.background": "#1e1f1c",
        "peekViewResult.matchHighlightBackground": "#75715E",
        "peekViewResult.selectionBackground": "#414339",
      }
    `)
  })
})

describe('peekViewTitle', () => {
  it('peekViewTitle::length', () => {
    const peekViewTitle = pv.peekViewTitle()

    expect(Object.keys(peekViewTitle)).toHaveLength(1)
  })

  it('peekViewTitle::blueColors', () => {
    setRuntimeColors('blueColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::goldColors', () => {
    setRuntimeColors('goldColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::greenColors', () => {
    setRuntimeColors('greenColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::limeColors', () => {
    setRuntimeColors('limeColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::redColors', () => {
    setRuntimeColors('redColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })

  it('peekViewTitle::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const peekViewTitle = pv.peekViewTitle()

    expect(peekViewTitle).toMatchInlineSnapshot(`
      {
        "peekViewTitle.background": "#1e1f1c",
      }
    `)
  })
})
