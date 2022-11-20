import { setRuntimeColors } from '../../designs/index'
import tc from '../../dark/text-colors'

describe('textBlockQuote', () => {
  it('textBlockQuote::length', () => {
    const textBlockQuote = tc.textBlockQuote()

    expect(Object.keys(textBlockQuote)).toHaveLength(2)
  })

  it('textBlockQuote::blueColors', () => {
    setRuntimeColors('blueColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::goldColors', () => {
    setRuntimeColors('goldColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::greenColors', () => {
    setRuntimeColors('greenColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::limeColors', () => {
    setRuntimeColors('limeColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::redColors', () => {
    setRuntimeColors('redColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })

  it('textBlockQuote::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const textBlockQuote = tc.textBlockQuote()

    expect(textBlockQuote).toMatchInlineSnapshot(`
      {
        "textBlockQuote.background": "",
        "textBlockQuote.border": "",
      }
    `)
  })
})

describe('textCodeBlock', () => {
  it('textCodeBlock::length', () => {
    const textCodeBlock = tc.textCodeBlock()

    expect(Object.keys(textCodeBlock)).toHaveLength(1)
  })

  it('textCodeBlock::blueColors', () => {
    setRuntimeColors('blueColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::goldColors', () => {
    setRuntimeColors('goldColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::greenColors', () => {
    setRuntimeColors('greenColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::limeColors', () => {
    setRuntimeColors('limeColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::redColors', () => {
    setRuntimeColors('redColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })

  it('textCodeBlock::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const textCodeBlock = tc.textCodeBlock()

    expect(textCodeBlock).toMatchInlineSnapshot(`
      {
        "textCodeBlock.background": "",
      }
    `)
  })
})

describe('textLink', () => {
  it('textLink::length', () => {
    const textLink = tc.textLink()

    expect(Object.keys(textLink)).toHaveLength(2)
  })

  it('textLink::blueColors', () => {
    setRuntimeColors('blueColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::goldColors', () => {
    setRuntimeColors('goldColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::greenColors', () => {
    setRuntimeColors('greenColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::limeColors', () => {
    setRuntimeColors('limeColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::redColors', () => {
    setRuntimeColors('redColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })

  it('textLink::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const textLink = tc.textLink()

    expect(textLink).toMatchInlineSnapshot(`
      {
        "textLink.activeForeground": "",
        "textLink.foreground": "",
      }
    `)
  })
})

describe('textPreformat', () => {
  it('textPreformat::length', () => {
    const textPreformat = tc.textPreformat()

    expect(Object.keys(textPreformat)).toHaveLength(1)
  })

  it('textPreformat::blueColors', () => {
    setRuntimeColors('blueColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::goldColors', () => {
    setRuntimeColors('goldColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::greenColors', () => {
    setRuntimeColors('greenColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::limeColors', () => {
    setRuntimeColors('limeColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::redColors', () => {
    setRuntimeColors('redColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })

  it('textPreformat::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const textPreformat = tc.textPreformat()

    expect(textPreformat).toMatchInlineSnapshot(`
      {
        "textPreformat.foreground": "",
      }
    `)
  })
})

describe('textSeparator', () => {
  it('textSeparator::length', () => {
    const textSeparator = tc.textSeparator()

    expect(Object.keys(textSeparator)).toHaveLength(1)
  })

  it('textSeparator::blueColors', () => {
    setRuntimeColors('blueColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::goldColors', () => {
    setRuntimeColors('goldColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::greenColors', () => {
    setRuntimeColors('greenColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::limeColors', () => {
    setRuntimeColors('limeColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::redColors', () => {
    setRuntimeColors('redColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })

  it('textSeparator::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const textSeparator = tc.textSeparator()

    expect(textSeparator).toMatchInlineSnapshot(`
      {
        "textSeparator.foreground": "",
      }
    `)
  })
})
