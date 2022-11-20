import { setRuntimeColors } from '../../designs/index'
import kb from '../../dark/keybinding'

describe('keybindingLabel', () => {
  it('keybindingLabel::length', () => {
    const keybindingLabel = kb.keybindingLabel()

    expect(Object.keys(keybindingLabel)).toHaveLength(4)
  })

  it('keybindingLabel::blueColors', () => {
    setRuntimeColors('blueColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::goldColors', () => {
    setRuntimeColors('goldColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::greenColors', () => {
    setRuntimeColors('greenColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::limeColors', () => {
    setRuntimeColors('limeColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::redColors', () => {
    setRuntimeColors('redColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })

  it('keybindingLabel::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const keybindingLabel = kb.keybindingLabel()

    expect(keybindingLabel).toMatchInlineSnapshot(`
      {
        "keybindingLabel.background": "",
        "keybindingLabel.border": "",
        "keybindingLabel.bottomBorder": "",
        "keybindingLabel.foreground": "",
      }
    `)
  })
})

describe('keybindingTable', () => {
  it('keybindingTable::length', () => {
    const keybindingTable = kb.keybindingTable()

    expect(Object.keys(keybindingTable)).toHaveLength(2)
  })

  it('keybindingTable::blueColors', () => {
    setRuntimeColors('blueColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::goldColors', () => {
    setRuntimeColors('goldColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::greenColors', () => {
    setRuntimeColors('greenColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::limeColors', () => {
    setRuntimeColors('limeColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::redColors', () => {
    setRuntimeColors('redColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })

  it('keybindingTable::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const keybindingTable = kb.keybindingTable()

    expect(keybindingTable).toMatchInlineSnapshot(`
      {
        "keybindingTable.headerBackground": "#ff4d4f",
        "keybindingTable.rowsBackground": "",
      }
    `)
  })
})
