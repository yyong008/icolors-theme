import { setRuntimeColors } from '../../designs/index'
import wd from '../../dark/window'

describe('window', () => {
  it('window::length', () => {
    const window = wd.window()

    expect(Object.keys(window)).toHaveLength(2)
  })

  it('window::blueColors', () => {
    setRuntimeColors('blueColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#69c0ff",
        "window.inactiveBorder": "#69c0ff",
      }
    `)
  })

  it('window::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#5cdbd3",
        "window.inactiveBorder": "#5cdbd3",
      }
    `)
  })

  it('window::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#85a5ff",
        "window.inactiveBorder": "#85a5ff",
      }
    `)
  })

  it('window::goldColors', () => {
    setRuntimeColors('goldColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#ffd666",
        "window.inactiveBorder": "#ffd666",
      }
    `)
  })

  it('window::greenColors', () => {
    setRuntimeColors('greenColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#95de64",
        "window.inactiveBorder": "#95de64",
      }
    `)
  })

  it('window::limeColors', () => {
    setRuntimeColors('limeColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#d3f261",
        "window.inactiveBorder": "#d3f261",
      }
    `)
  })

  it('window::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#ff85c0",
        "window.inactiveBorder": "#ff85c0",
      }
    `)
  })

  it('window::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#ffc069",
        "window.inactiveBorder": "#ffc069",
      }
    `)
  })

  it('window::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#b37feb",
        "window.inactiveBorder": "#b37feb",
      }
    `)
  })

  it('window::redColors', () => {
    setRuntimeColors('redColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#ff7875",
        "window.inactiveBorder": "#ff7875",
      }
    `)
  })

  it('window::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#ff9c6e",
        "window.inactiveBorder": "#ff9c6e",
      }
    `)
  })

  it('window::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const window = wd.window()

    expect(window).toMatchInlineSnapshot(`
      {
        "window.activeBorder": "#fff566",
        "window.inactiveBorder": "#fff566",
      }
    `)
  })
})
