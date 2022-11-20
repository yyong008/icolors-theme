import { setRuntimeColors } from '../../designs/index'
import tr from '../../dark/tree'

describe('tree', () => {
  it('tree::length', () => {
    const tree = tr.tree()

    expect(Object.keys(tree)).toHaveLength(3)
  })

  it('tree::blueColors', () => {
    setRuntimeColors('blueColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#69c0ff",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#5cdbd3",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#85a5ff",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::goldColors', () => {
    setRuntimeColors('goldColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#ffd666",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::greenColors', () => {
    setRuntimeColors('greenColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#95de64",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::limeColors', () => {
    setRuntimeColors('limeColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#d3f261",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#ff85c0",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#ffc069",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#b37feb",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::redColors', () => {
    setRuntimeColors('redColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#ff7875",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#ff9c6e",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })

  it('tree::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const tree = tr.tree()

    expect(tree).toMatchInlineSnapshot(`
      {
        "tree.indentGuidesStroke": "#fff566",
        "tree.tableColumnsBorder": "",
        "tree.tableOddRowsBackground": "",
      }
    `)
  })
})
