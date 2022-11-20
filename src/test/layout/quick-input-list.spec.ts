import { setRuntimeColors } from '../../designs/index.js'
import qil from '../../dark/quick-input'

describe('quickInputList', () => {
  it('quickInputList::length', () => {
    const quickInputList = qil.quickInputList()

    expect(Object.keys(quickInputList)).toHaveLength(3)
  })

  it('quickInputList::blueColors', () => {
    setRuntimeColors('blueColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#003a8c",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#69c0ff",
      }
    `)
  })

  it('quickInputList::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#00474f",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#5cdbd3",
      }
    `)
  })

  it('quickInputList::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#061178",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#85a5ff",
      }
    `)
  })

  it('quickInputList::goldColors', () => {
    setRuntimeColors('goldColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#874d00",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#ffd666",
      }
    `)
  })

  it('quickInputList::greenColors', () => {
    setRuntimeColors('greenColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#135200",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#95de64",
      }
    `)
  })

  it('quickInputList::limeColors', () => {
    setRuntimeColors('limeColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#3f6600",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#d3f261",
      }
    `)
  })

  it('quickInputList::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#780650",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#ff85c0",
      }
    `)
  })

  it('quickInputList::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#873800",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#ffc069",
      }
    `)
  })

  it('quickInputList::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#22075e",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#b37feb",
      }
    `)
  })

  it('quickInputList::redColors', () => {
    setRuntimeColors('redColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#820014",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#ff7875",
      }
    `)
  })

  it('quickInputList::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#871400",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#ff9c6e",
      }
    `)
  })

  it('quickInputList::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const quickInputList = qil.quickInputList()

    expect(quickInputList).toMatchInlineSnapshot(`
      {
        "quickInputList.focusBackground": "#876800",
        "quickInputList.focusForeground": "#ffffff",
        "quickInputList.focusIconForeground": "#fff566",
      }
    `)
  })
})
