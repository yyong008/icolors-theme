import { setRuntimeColors } from '../../designs/index'
import sb from '../../dark/side-bar'

describe('sideBar', () => {
  it('sideBar::length', () => {
    const sideBar = sb.sideBar()

    expect(Object.keys(sideBar)).toHaveLength(3)
  })

  it('sideBar::blueColors', () => {
    setRuntimeColors('blueColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::goldColors', () => {
    setRuntimeColors('goldColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::greenColors', () => {
    setRuntimeColors('greenColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::limeColors', () => {
    setRuntimeColors('limeColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::redColors', () => {
    setRuntimeColors('redColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })

  it('sideBar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const sideBar = sb.sideBar()

    expect(sideBar).toMatchInlineSnapshot(`
      {
        "sideBar.background": "#262626",
        "sideBar.border": "#262626",
        "sideBar.foreground": "#ffffff",
      }
    `)
  })
})
