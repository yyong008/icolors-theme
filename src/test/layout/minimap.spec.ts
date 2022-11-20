import { setRuntimeColors } from '../../designs/index'
import mm from '../../dark/minimap'

describe('minimap', () => {
  it('minimap::length', () => {
    const minimap = mm.minimap()

    expect(Object.keys(minimap)).toHaveLength(1)
  })

  it('minimap::blueColors', () => {
    setRuntimeColors('blueColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::goldColors', () => {
    setRuntimeColors('goldColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::greenColors', () => {
    setRuntimeColors('greenColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::limeColors', () => {
    setRuntimeColors('limeColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::redColors', () => {
    setRuntimeColors('redColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })

  it('minimap::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const minimap = mm.minimap()

    expect(minimap).toMatchInlineSnapshot(`
      {
        "minimap.selectionHighlight": "#878b9180",
      }
    `)
  })
})

describe('minimapGutter', () => {
  it('minimapGutter::length', () => {
    const minimapGutter = mm.minimapGutter()

    expect(Object.keys(minimapGutter)).toHaveLength(3)
  })

  it('minimapGutter::blueColors', () => {
    setRuntimeColors('blueColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::goldColors', () => {
    setRuntimeColors('goldColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::greenColors', () => {
    setRuntimeColors('greenColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::limeColors', () => {
    setRuntimeColors('limeColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::redColors', () => {
    setRuntimeColors('redColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })

  it('minimapGutter::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const minimapGutter = mm.minimapGutter()

    expect(minimapGutter).toMatchInlineSnapshot(`
      {
        "minimapGutter.activeBackground": "",
        "minimapGutter.background": "",
        "minimapGutter.hoverBackground": "",
      }
    `)
  })
})

describe('minimapSlider', () => {
  it('minimapSlider::length', () => {
    const minimapSlider = mm.minimapSlider()

    expect(Object.keys(minimapSlider)).toHaveLength(3)
  })

  it('minimapSlider::blueColors', () => {
    setRuntimeColors('blueColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::goldColors', () => {
    setRuntimeColors('goldColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::greenColors', () => {
    setRuntimeColors('greenColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::limeColors', () => {
    setRuntimeColors('limeColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::redColors', () => {
    setRuntimeColors('redColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })

  it('minimapSlider::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const minimapSlider = mm.minimapSlider()

    expect(minimapSlider).toMatchInlineSnapshot(`
      {
        "minimapSlider.addedBackground": "",
        "minimapSlider.deletedBackground": "",
        "minimapSlider.modifiedBackground": "",
      }
    `)
  })
})
