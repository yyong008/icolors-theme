import { setRuntimeColors } from '../../designs/index'
import pg from '../../dark/picker-group'

describe('pickerGroup', () => {
  it('pickerGroup::length', () => {
    const pickerGroup = pg.pickerGroup()

    expect(Object.keys(pickerGroup)).toHaveLength(1)
  })

  it('pickerGroup::blueColors', () => {
    setRuntimeColors('blueColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::goldColors', () => {
    setRuntimeColors('goldColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::greenColors', () => {
    setRuntimeColors('greenColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::limeColors', () => {
    setRuntimeColors('limeColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::redColors', () => {
    setRuntimeColors('redColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })

  it('pickerGroup::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const pickerGroup = pg.pickerGroup()

    expect(pickerGroup).toMatchInlineSnapshot(`
      {
        "pickerGroup.foreground": "#75715E",
      }
    `)
  })
})
