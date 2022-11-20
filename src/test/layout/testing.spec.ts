import { setRuntimeColors } from '../../designs/index'
import tc from '../../dark/testing-color'

describe('testing', () => {
  it('testing::length', () => {
    const testing = tc.testing()

    expect(Object.keys(testing)).toHaveLength(13)
  })

  it('testing::blueColors', () => {
    setRuntimeColors('blueColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::goldColors', () => {
    setRuntimeColors('goldColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::greenColors', () => {
    setRuntimeColors('greenColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::limeColors', () => {
    setRuntimeColors('limeColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::redColors', () => {
    setRuntimeColors('redColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })

  it('testing::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const testing = tc.testing()

    expect(testing).toMatchInlineSnapshot(`
      {
        "testing.iconErrored": "",
        "testing.iconFailed": "#ff7875",
        "testing.iconPassed": "",
        "testing.iconQueued": "",
        "testing.iconSkipped": "",
        "testing.iconUnset": "",
        "testing.message.error.decorationForeground": "",
        "testing.message.error.lineBackground": "",
        "testing.message.info.decorationForeground": "",
        "testing.message.info.lineBackground": "",
        "testing.peekBorder": "",
        "testing.peekHeaderBackground": "",
        "testing.runAction": "",
      }
    `)
  })
})
