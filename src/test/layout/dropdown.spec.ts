import { setRuntimeColors } from '../../designs/index'
import dp from '../../dark/dropdown-control'

describe('dropdown', () => {
  it('dropdown::length', () => {
    const dropdown = dp.dropdown()

    expect(Object.keys(dropdown)).toHaveLength(4)
  })

  it('dropdown::blueColors', () => {
    setRuntimeColors('blueColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#69c0ff",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#5cdbd3",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#85a5ff",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::goldColors', () => {
    setRuntimeColors('goldColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#ffd666",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::greenColors', () => {
    setRuntimeColors('greenColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#95de64",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::limeColors', () => {
    setRuntimeColors('limeColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#d3f261",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#ff85c0",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#ffc069",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#b37feb",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::redColors', () => {
    setRuntimeColors('redColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#ff7875",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#ff9c6e",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })

  it('dropdown::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const dropdown = dp.dropdown()

    expect(dropdown).toMatchInlineSnapshot(`
      {
        "dropdown.background": "#141414",
        "dropdown.border": "#fff566",
        "dropdown.foreground": "#f5f5f5",
        "dropdown.listBackground": "#262626",
      }
    `)
  })
})
