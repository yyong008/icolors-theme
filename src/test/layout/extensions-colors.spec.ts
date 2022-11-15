import { setRuntimeColors } from '../../designs/index'
import ec from '../../dark/extensions-colors'

describe('extensionButton', () => {
  it('extensionButton::length', () => {
    const extensionButton = ec.extensionButton()

    expect(Object.keys(extensionButton)).toHaveLength(3)
  })

  it('extensionButton::blueColors', () => {
    setRuntimeColors('blueColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#69c0ff",
        "extensionButton.prominentForeground": "#003a8c",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#5cdbd3",
        "extensionButton.prominentForeground": "#00474f",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#85a5ff",
        "extensionButton.prominentForeground": "#061178",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::goldColors', () => {
    setRuntimeColors('goldColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#ffd666",
        "extensionButton.prominentForeground": "#874d00",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::greenColors', () => {
    setRuntimeColors('greenColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#95de64",
        "extensionButton.prominentForeground": "#135200",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::limeColors', () => {
    setRuntimeColors('limeColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#d3f261",
        "extensionButton.prominentForeground": "#3f6600",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#ff85c0",
        "extensionButton.prominentForeground": "#780650",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#ffc069",
        "extensionButton.prominentForeground": "#873800",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#b37feb",
        "extensionButton.prominentForeground": "#22075e",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::redColors', () => {
    setRuntimeColors('redColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#ff7875",
        "extensionButton.prominentForeground": "#820014",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#ff9c6e",
        "extensionButton.prominentForeground": "#871400",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })

  it('extensionButton::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const extensionButton = ec.extensionButton()

    expect(extensionButton).toMatchInlineSnapshot(`
      {
        "extensionButton.prominentBackground": "#fff566",
        "extensionButton.prominentForeground": "#876800",
        "extensionButton.prominentHoverBackground": "",
      }
    `)
  })
})

describe('extensionBadge', () => {
  it('extensionBadge::length', () => {
    const extensionBadge = ec.extensionBadge()

    expect(Object.keys(extensionBadge)).toHaveLength(2)
  })

  it('extensionBadge::blueColors', () => {
    setRuntimeColors('blueColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::goldColors', () => {
    setRuntimeColors('goldColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::greenColors', () => {
    setRuntimeColors('greenColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::limeColors', () => {
    setRuntimeColors('limeColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::redColors', () => {
    setRuntimeColors('redColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })

  it('extensionBadge::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const extensionBadge = ec.extensionBadge()

    expect(extensionBadge).toMatchInlineSnapshot(`
      {
        "extensionBadge.remoteBackground": "",
        "extensionBadge.remoteForeground": "",
      }
    `)
  })
})

describe('extensionIcon', () => {
  it('extensionIcon::length', () => {
    const extensionIcon = ec.extensionIcon()

    expect(Object.keys(extensionIcon)).toHaveLength(4)
  })

  it('extensionIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::redColors', () => {
    setRuntimeColors('redColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })

  it('extensionIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const extensionIcon = ec.extensionIcon()

    expect(extensionIcon).toMatchInlineSnapshot(`
      {
        "extensionIcon.preReleaseForeground": "",
        "extensionIcon.sponsorForeground": "",
        "extensionIcon.starForeground": "",
        "extensionIcon.verifiedForeground": "",
      }
    `)
  })
})
