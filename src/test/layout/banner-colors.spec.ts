// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import br from '../../dark/banner-colors'

describe('banner-colors', () => {
  it('banner-colors::blueColors', () => {
    setRuntimeColors('blueColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#69c0ff",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#5cdbd3",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#85a5ff",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::goldColors', () => {
    setRuntimeColors('goldColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#ffd666",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::greenColors', () => {
    setRuntimeColors('greenColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#95de64",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::limeColors', () => {
    setRuntimeColors('limeColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#d3f261",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#ff85c0",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#ffc069",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#b37feb",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::redColors', () => {
    setRuntimeColors('redColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#ff7875",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#ff9c6e",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })

  it('banner-colors::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const banner = br.banner()

    expect(Object.keys(banner)).toHaveLength(3)
    expect(banner).toMatchInlineSnapshot(`
      {
        "banner.background": "#ff7875",
        "banner.foreground": "#fff566",
        "banner.iconForeground": "#ff4d4f",
      }
    `)
  })
})
