import { setRuntimeColors } from '../../designs/index'
import bc from '../../dark/base-colors'

describe('base-colors', () => {
  it('base-colors::length', () => {
    const banner = bc.baseColors()

    expect(Object.keys(banner)).toHaveLength(5)
  })

  it('base-colors::blueColors', () => {
    setRuntimeColors('blueColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#69c0ff",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#69c0ff",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#5cdbd3",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#5cdbd3",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#85a5ff",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#85a5ff",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::goldColors', () => {
    setRuntimeColors('goldColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#ffd666",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#ffd666",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::greenColors', () => {
    setRuntimeColors('greenColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#95de64",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#95de64",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::limeColors', () => {
    setRuntimeColors('limeColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#d3f261",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#d3f261",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#ff85c0",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#ff85c0",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#ffc069",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#ffc069",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#b37feb",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#b37feb",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::redColors', () => {
    setRuntimeColors('redColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#ff7875",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#ff7875",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#ff9c6e",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#ff9c6e",
        "foreground": "#ffffff",
      }
    `)
  })

  it('base-colors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const banner = bc.baseColors()

    expect(banner).toMatchInlineSnapshot(`
      {
        "descriptionForeground": "#fff566",
        "disabledForeground": "#595959",
        "errorForeground": "#f5222d",
        "focusBorder": "#fff566",
        "foreground": "#ffffff",
      }
    `)
  })
})

describe('base-colors-widget', () => {
  it('base-colors-widget::length', () => {
    const bcw = bc.baseColorsWidget()

    expect(Object.keys(bcw)).toHaveLength(1)
  })

  it('base-colors-widget::blueColors', () => {
    setRuntimeColors('blueColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::goldColors', () => {
    setRuntimeColors('goldColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::greenColors', () => {
    setRuntimeColors('greenColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::limeColors', () => {
    setRuntimeColors('limeColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::redColors', () => {
    setRuntimeColors('redColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })

  it('base-colors-widget::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const bcw = bc.baseColorsWidget()

    expect(bcw).toMatchInlineSnapshot(`
      {
        "widget.shadow": "",
      }
    `)
  })
})

describe('base-colors-selection', () => {
  it('base-colors-selection::length', () => {
    const bcs = bc.baseColorsSelection()

    expect(Object.keys(bcs)).toHaveLength(1)
  })

  it('base-colors-selection::blueColors', () => {
    setRuntimeColors('blueColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::goldColors', () => {
    setRuntimeColors('goldColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::greenColors', () => {
    setRuntimeColors('greenColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::limeColors', () => {
    setRuntimeColors('limeColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::redColors', () => {
    setRuntimeColors('redColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })

  it('base-colors-selection::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const bcs = bc.baseColorsSelection()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "selection.shadow": "",
      }
    `)
  })
})

describe('base-colors-sash', () => {
  it('base-colors-sash::length', () => {
    const bcs = bc.baseColorsSash()

    expect(Object.keys(bcs)).toHaveLength(1)
  })

  it('base-colors-sash::blueColors', () => {
    setRuntimeColors('blueColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::goldColors', () => {
    setRuntimeColors('goldColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::greenColors', () => {
    setRuntimeColors('greenColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::limeColors', () => {
    setRuntimeColors('limeColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::redColors', () => {
    setRuntimeColors('redColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-sash::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })
})

describe('base-colors-icon', () => {
  it('base-colors-icon::length', () => {
    const bcs = bc.baseColorsSash()

    expect(Object.keys(bcs)).toHaveLength(1)
  })

  it('base-colors-icon::blueColors', () => {
    setRuntimeColors('blueColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::goldColors', () => {
    setRuntimeColors('goldColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::greenColors', () => {
    setRuntimeColors('greenColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::limeColors', () => {
    setRuntimeColors('limeColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::redColors', () => {
    setRuntimeColors('redColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })

  it('base-colors-icon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const bcs = bc.baseColorsSash()

    expect(bcs).toMatchInlineSnapshot(`
      {
        "sash.hoverBorder": "",
      }
    `)
  })
})
