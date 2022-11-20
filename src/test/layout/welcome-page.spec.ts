import { setRuntimeColors } from '../../designs/index'
import wp from '../../dark/welcome-page-colors'

describe('welcomePage', () => {
  it('welcomePage::length', () => {
    const welcomePage = wp.welcomePage()

    expect(Object.keys(welcomePage)).toHaveLength(6)
  })

  it('welcomePage::blueColors', () => {
    setRuntimeColors('blueColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#003a8c",
        "welcomePage.progress.foreground": "#91d5ff",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#00474f",
        "welcomePage.progress.foreground": "#87e8de",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#061178",
        "welcomePage.progress.foreground": "#adc6ff",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::goldColors', () => {
    setRuntimeColors('goldColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#874d00",
        "welcomePage.progress.foreground": "#ffe58f",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::greenColors', () => {
    setRuntimeColors('greenColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#135200",
        "welcomePage.progress.foreground": "#b7eb8f",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::limeColors', () => {
    setRuntimeColors('limeColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#3f6600",
        "welcomePage.progress.foreground": "#eaff8f",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#780650",
        "welcomePage.progress.foreground": "#ffadd2",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#873800",
        "welcomePage.progress.foreground": "#ffd591",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#22075e",
        "welcomePage.progress.foreground": "#d3adf7",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::redColors', () => {
    setRuntimeColors('redColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#820014",
        "welcomePage.progress.foreground": "#ffa39e",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#871400",
        "welcomePage.progress.foreground": "#ffbb96",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })

  it('welcomePage::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const welcomePage = wp.welcomePage()

    expect(welcomePage).toMatchInlineSnapshot(`
      {
        "welcomePage.background": "#1f1f1f",
        "welcomePage.progress.background": "#876800",
        "welcomePage.progress.foreground": "#fffb8f",
        "welcomePage.tileBackground": "#262626",
        "welcomePage.tileHoverBackground": "#000000",
        "welcomePage.tileShadow": "",
      }
    `)
  })
})

describe('workThrough', () => {
  it('workThrough::length', () => {
    const workThrough = wp.workThrough()

    expect(Object.keys(workThrough)).toHaveLength(1)
  })

  it('workThrough::blueColors', () => {
    setRuntimeColors('blueColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::goldColors', () => {
    setRuntimeColors('goldColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::greenColors', () => {
    setRuntimeColors('greenColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::limeColors', () => {
    setRuntimeColors('limeColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::redColors', () => {
    setRuntimeColors('redColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })

  it('workThrough::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const workThrough = wp.workThrough()

    expect(workThrough).toMatchInlineSnapshot(`
      {
        "walkThrough.embeddedEditorBackground": "",
      }
    `)
  })
})
