// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import bge from '../../dark/badge.js'

describe('badge', () => {
  it('badge::blueColors', () => {
    setRuntimeColors('blueColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#69c0ff",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#5cdbd3",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#85a5ff",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::goldColors', () => {
    setRuntimeColors('goldColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#ffd666",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::greenColors', () => {
    setRuntimeColors('greenColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#95de64",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::limeColors', () => {
    setRuntimeColors('limeColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#d3f261",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#ff85c0",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#ffc069",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#b37feb",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::redColors', () => {
    setRuntimeColors('redColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#ff7875",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#ff9c6e",
        "badge.foreground": "#ffffff",
      }
    `)
  })

  it('badge::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const badge = bge.badge()

    expect(Object.keys(badge)).toHaveLength(2)
    expect(badge).toMatchInlineSnapshot(`
      {
        "badge.background": "#fff566",
        "badge.foreground": "#ffffff",
      }
    `)
  })
})
