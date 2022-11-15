import { setRuntimeColors } from '../../designs/index'
import bc from '../../dark/breadcrumbs-colors'

describe('breadbrumbs', () => {
  it('breadbrumbs::length', () => {
    const breadbrumbs = bc.breadbrumbs()

    expect(Object.keys(breadbrumbs)).toHaveLength(4)
  })

  it('breadbrumbs::blueColors', () => {
    setRuntimeColors('blueColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#69c0ff",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#69c0ff",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#5cdbd3",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#5cdbd3",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#85a5ff",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#85a5ff",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::goldColors', () => {
    setRuntimeColors('goldColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#ffd666",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#ffd666",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::greenColors', () => {
    setRuntimeColors('greenColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#95de64",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#95de64",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::limeColors', () => {
    setRuntimeColors('limeColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#d3f261",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#d3f261",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#ff85c0",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#ff85c0",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#ffc069",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#ffc069",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#b37feb",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#b37feb",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::redColors', () => {
    setRuntimeColors('redColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#ff7875",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#ff7875",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#ff9c6e",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#ff9c6e",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })

  it('breadbrumbs::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const breadbrumbs = bc.breadbrumbs()

    expect(breadbrumbs).toMatchInlineSnapshot(`
      {
        "breadcrumb.activeSelectionForeground": "#fff566",
        "breadcrumb.background": "#1f1f1f",
        "breadcrumb.focusForeground": "#fff566",
        "breadcrumb.foreground": "#ffffff",
      }
    `)
  })
})

describe('breadcrumbPicker', () => {
  it('breadcrumbPicker::length', () => {
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(Object.keys(breadcrumbPicker)).toHaveLength(1)
  })

  it('breadcrumbPicker::blueColors', () => {
    setRuntimeColors('blueColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::goldColors', () => {
    setRuntimeColors('goldColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::greenColors', () => {
    setRuntimeColors('greenColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::limeColors', () => {
    setRuntimeColors('limeColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::redColors', () => {
    setRuntimeColors('redColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })

  it('breadcrumbPicker::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const breadcrumbPicker = bc.breadcrumbPicker()

    expect(breadcrumbPicker).toMatchInlineSnapshot(`
      {
        "breadcrumbPicker.background": "#262626",
      }
    `)
  })
})
