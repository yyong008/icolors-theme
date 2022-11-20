import { setRuntimeColors } from '../../designs/index'
import ls from '../../dark/lists'

describe('list', () => {
  it('list::length', () => {
    const list = ls.list()

    expect(Object.keys(list)).toHaveLength(5)
  })

  it('list::blueColors', () => {
    setRuntimeColors('blueColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::goldColors', () => {
    setRuntimeColors('goldColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::greenColors', () => {
    setRuntimeColors('greenColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::limeColors', () => {
    setRuntimeColors('limeColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::redColors', () => {
    setRuntimeColors('redColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })

  it('list::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const list = ls.list()

    expect(list).toMatchInlineSnapshot(`
      {
        "list.activeSelectionBackground": "#75715E",
        "list.dropBackground": "#414339",
        "list.highlightForeground": "#f8f8f2",
        "list.hoverBackground": "#3e3d32",
        "list.inactiveSelectionBackground": "#414339",
      }
    `)
  })
})
