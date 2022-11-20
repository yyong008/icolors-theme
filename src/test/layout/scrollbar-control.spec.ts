import { setRuntimeColors } from '../../designs/index'
import sc from '../../dark/scrollbar-control'

describe('scrollbar', () => {
  it('scrollbar::length', () => {
    const scrollbar = sc.scrollbar()

    expect(Object.keys(scrollbar)).toHaveLength(1)
  })

  it('scrollbar::blueColors', () => {
    setRuntimeColors('blueColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::goldColors', () => {
    setRuntimeColors('goldColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::greenColors', () => {
    setRuntimeColors('greenColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::limeColors', () => {
    setRuntimeColors('limeColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::redColors', () => {
    setRuntimeColors('redColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })

  it('scrollbar::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const scrollbar = sc.scrollbar()

    expect(scrollbar).toMatchInlineSnapshot(`
      {
        "scrollbar.shadow": "",
      }
    `)
  })
})

describe('scrollbarSlider', () => {
  it('scrollbarSlider::length', () => {
    const scrollbarSlider = sc.scrollbarSlider()

    expect(Object.keys(scrollbarSlider)).toHaveLength(3)
  })

  it('scrollbarSlider::blueColors', () => {
    setRuntimeColors('blueColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::goldColors', () => {
    setRuntimeColors('goldColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::greenColors', () => {
    setRuntimeColors('greenColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::limeColors', () => {
    setRuntimeColors('limeColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::redColors', () => {
    setRuntimeColors('redColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })

  it('scrollbarSlider::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const scrollbarSlider = sc.scrollbarSlider()

    expect(scrollbarSlider).toMatchInlineSnapshot(`
      {
        "scrollbarSlider.activeBackground": "",
        "scrollbarSlider.background": "",
        "scrollbarSlider.hoverBackground": "",
      }
    `)
  })
})
