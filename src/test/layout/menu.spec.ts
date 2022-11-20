import { setRuntimeColors } from '../../designs/index'
import mn from '../../dark/menu'

describe('menu', () => {
  it('menu::length', () => {
    const menu = mn.menu()

    expect(Object.keys(menu)).toHaveLength(7)
  })

  it('menu::blueColors', () => {
    setRuntimeColors('blueColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#003a8c",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#00474f",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#061178",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::goldColors', () => {
    setRuntimeColors('goldColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#874d00",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::greenColors', () => {
    setRuntimeColors('greenColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#135200",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::limeColors', () => {
    setRuntimeColors('limeColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#3f6600",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#780650",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#873800",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#22075e",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::redColors', () => {
    setRuntimeColors('redColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#820014",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#871400",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })

  it('menu::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const menu = mn.menu()

    expect(menu).toMatchInlineSnapshot(`
      {
        "menu.background": "#1f1f1f",
        "menu.border": "",
        "menu.foreground": "#ffffff",
        "menu.selectionBackground": "#876800",
        "menu.selectionBorder": "",
        "menu.selectionForeground": "#ffffff",
        "menu.separatorBackground": "",
      }
    `)
  })
})

describe('menuBar', () => {
  it('menuBar::length', () => {
    const button = mn.menuBar()

    expect(Object.keys(button)).toHaveLength(3)
  })

  it('menuBar::blueColors', () => {
    setRuntimeColors('blueColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#003a8c",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#00474f",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#061178",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::goldColors', () => {
    setRuntimeColors('goldColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#874d00",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::greenColors', () => {
    setRuntimeColors('greenColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#135200",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::limeColors', () => {
    setRuntimeColors('limeColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#3f6600",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#780650",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#873800",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#22075e",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::redColors', () => {
    setRuntimeColors('redColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#820014",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#871400",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })

  it('menuBar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const menuBar = mn.menuBar()

    expect(menuBar).toMatchInlineSnapshot(`
      {
        "menubar.selectionBackground": "#876800",
        "menubar.selectionBorder": "",
        "menubar.selectionForeground": "#ffffff",
      }
    `)
  })
})
