import { setRuntimeColors } from '../../designs/index'
import mcc from '../../dark/merge-conflicts-colors'

describe('merge', () => {
  it('merge::length', () => {
    const merge = mcc.merge()

    expect(Object.keys(merge)).toHaveLength(7)
  })

  it('merge::blueColors', () => {
    setRuntimeColors('blueColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::goldColors', () => {
    setRuntimeColors('goldColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::greenColors', () => {
    setRuntimeColors('greenColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::limeColors', () => {
    setRuntimeColors('limeColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::redColors', () => {
    setRuntimeColors('redColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })

  it('merge::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const merge = mcc.merge()

    expect(merge).toMatchInlineSnapshot(`
      {
        "merge.border": "",
        "merge.commonContentBackground": "",
        "merge.commonHeaderBackground": "",
        "merge.currentContentBackground": "",
        "merge.currentHeaderBackground": "",
        "merge.incomingContentBackground": "",
        "merge.incomingHeaderBackground": "",
      }
    `)
  })
})

describe('editorOverviewRuler', () => {
  it('editorOverviewRuler::length', () => {
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(Object.keys(editorOverviewRuler)).toHaveLength(3)
  })

  it('editorOverviewRuler::blueColors', () => {
    setRuntimeColors('blueColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::goldColors', () => {
    setRuntimeColors('goldColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::greenColors', () => {
    setRuntimeColors('greenColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::limeColors', () => {
    setRuntimeColors('limeColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::redColors', () => {
    setRuntimeColors('redColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })

  it('editorOverviewRuler::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const editorOverviewRuler = mcc.editorOverviewRuler()

    expect(editorOverviewRuler).toMatchInlineSnapshot(`
      {
        "editorOverviewRuler.commonContentForeground": "",
        "editorOverviewRuler.currentContentForeground": "",
        "editorOverviewRuler.incomingContentForeground": "",
      }
    `)
  })
})

describe('mergeEditor', () => {
  it('mergeEditor::length', () => {
    const mergeEditor = mcc.mergeEditor()

    expect(Object.keys(mergeEditor)).toHaveLength(8)
  })

  it('mergeEditor::blueColors', () => {
    setRuntimeColors('blueColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::goldColors', () => {
    setRuntimeColors('goldColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::greenColors', () => {
    setRuntimeColors('greenColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::limeColors', () => {
    setRuntimeColors('limeColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::redColors', () => {
    setRuntimeColors('redColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })

  it('mergeEditor::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const mergeEditor = mcc.mergeEditor()

    expect(mergeEditor).toMatchInlineSnapshot(`
      {
        "mergeEditor.change.background": "",
        "mergeEditor.change.word.background": "",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "",
        "mergeEditor.conflict.handledFocused.border": "",
        "mergeEditor.conflict.handledUnfocused.border": "",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "",
        "mergeEditor.conflict.unhandledFocused.border": "",
        "mergeEditor.conflictingLines.background": "",
      }
    `)
  })
})
