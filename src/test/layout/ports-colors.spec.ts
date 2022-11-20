import { setRuntimeColors } from '../../designs/index'
import pc from '../../dark/ports-colors'

describe('ports', () => {
  it('ports::length', () => {
    const ports = pc.ports()

    expect(Object.keys(ports)).toHaveLength(1)
  })

  it('ports::blueColors', () => {
    setRuntimeColors('blueColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::goldColors', () => {
    setRuntimeColors('goldColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::greenColors', () => {
    setRuntimeColors('greenColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::limeColors', () => {
    setRuntimeColors('limeColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::redColors', () => {
    setRuntimeColors('redColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })

  it('ports::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const ports = pc.ports()

    expect(ports).toMatchInlineSnapshot(`
      {
        "ports.iconRunningProcessForeground": "#ccccc7",
      }
    `)
  })
})
