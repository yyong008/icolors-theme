import { setRuntimeColors } from '../../designs/index'
import nc from '../../dark/notification-colors'

describe('notificationCenter', () => {
  it('notificationCenter::length', () => {
    const notificationCenter = nc.notificationCenter()

    expect(Object.keys(notificationCenter)).toHaveLength(1)
  })

  it('notificationCenter::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::redColors', () => {
    setRuntimeColors('redColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })

  it('notificationCenter::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationCenter = nc.notificationCenter()

    expect(notificationCenter).toMatchInlineSnapshot(`
      {
        "notificationCenter.border": "",
      }
    `)
  })
})

describe('notificationCenterHeader', () => {
  it('notificationCenterHeader::length', () => {
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(Object.keys(notificationCenterHeader)).toHaveLength(2)
  })

  it('notificationCenterHeader::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::redColors', () => {
    setRuntimeColors('redColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })

  it('notificationCenterHeader::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationCenterHeader = nc.notificationCenterHeader()

    expect(notificationCenterHeader).toMatchInlineSnapshot(`
      {
        "notificationCenterHeader.background": "",
        "notificationCenterHeader.foreground": "",
      }
    `)
  })
})

describe('notifications', () => {
  it('notifications::length', () => {
    const notifications = nc.notifications()

    expect(Object.keys(notifications)).toHaveLength(3)
  })

  it('notifications::blueColors', () => {
    setRuntimeColors('blueColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#e6f7ff",
      }
    `)
  })

  it('notifications::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#e6fffb",
      }
    `)
  })

  it('notifications::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#f0f5ff",
      }
    `)
  })

  it('notifications::goldColors', () => {
    setRuntimeColors('goldColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fffbe6",
      }
    `)
  })

  it('notifications::greenColors', () => {
    setRuntimeColors('greenColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#f6ffed",
      }
    `)
  })

  it('notifications::limeColors', () => {
    setRuntimeColors('limeColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fcffe6",
      }
    `)
  })

  it('notifications::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fff0f6",
      }
    `)
  })

  it('notifications::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fff7e6",
      }
    `)
  })

  it('notifications::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#f9f0ff",
      }
    `)
  })

  it('notifications::redColors', () => {
    setRuntimeColors('redColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fff1f0",
      }
    `)
  })

  it('notifications::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#fff2e8",
      }
    `)
  })

  it('notifications::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notifications = nc.notifications()

    expect(notifications).toMatchInlineSnapshot(`
      {
        "notifications.background": "#262626",
        "notifications.border": "",
        "notifications.foreground": "#feffe6",
      }
    `)
  })
})

describe('notificationToast', () => {
  it('notificationToast::length', () => {
    const notificationToast = nc.notificationToast()

    expect(Object.keys(notificationToast)).toHaveLength(1)
  })

  it('notificationToast::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::redColors', () => {
    setRuntimeColors('redColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })

  it('notificationToast::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationToast = nc.notificationToast()

    expect(notificationToast).toMatchInlineSnapshot(`
      {
        "notificationToast.border": "",
      }
    `)
  })
})

describe('notificationLink', () => {
  it('notificationLink::length', () => {
    const notificationLink = nc.notificationLink()

    expect(Object.keys(notificationLink)).toHaveLength(1)
  })

  it('notificationLink::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::redColors', () => {
    setRuntimeColors('redColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })

  it('notificationLink::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationLink = nc.notificationLink()

    expect(notificationLink).toMatchInlineSnapshot(`
      {
        "notificationLink.foreground": "",
      }
    `)
  })
})

describe('notificationsErrorIcon', () => {
  it('notificationsErrorIcon::length', () => {
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(Object.keys(notificationsErrorIcon)).toHaveLength(1)
  })

  it('notificationsErrorIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })

  it('notificationsErrorIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationsErrorIcon = nc.notificationsErrorIcon()

    expect(notificationsErrorIcon).toMatchInlineSnapshot(`
      {
        "notificationsErrorIcon.foreground": "",
      }
    `)
  })
})

describe('notificationsWarningIcon', () => {
  it('notificationsWarningIcon::length', () => {
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(Object.keys(notificationsWarningIcon)).toHaveLength(1)
  })

  it('notificationsWarningIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })

  it('notificationsWarningIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationsWarningIcon = nc.notificationsWarningIcon()

    expect(notificationsWarningIcon).toMatchInlineSnapshot(`
      {
        "notificationsWarningIcon.foreground": "",
      }
    `)
  })
})

describe('notificationsInfoIcon', () => {
  it('notificationsInfoIcon::length', () => {
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(Object.keys(notificationsInfoIcon)).toHaveLength(1)
  })

  it('notificationsInfoIcon::blueColors', () => {
    setRuntimeColors('blueColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::cyanColors', () => {
    setRuntimeColors('cyanColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::geekBlueColors', () => {
    setRuntimeColors('geekBlueColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::goldColors', () => {
    setRuntimeColors('goldColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::greenColors', () => {
    setRuntimeColors('greenColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::limeColors', () => {
    setRuntimeColors('limeColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::magentaColors', () => {
    setRuntimeColors('magentaColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::orangeColors', () => {
    setRuntimeColors('orangeColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::purpleColors', () => {
    setRuntimeColors('purpleColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::redColors', () => {
    setRuntimeColors('redColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::volcanoColors', () => {
    setRuntimeColors('volcanoColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })

  it('notificationsInfoIcon::yellowColors', () => {
    setRuntimeColors('yellowColors')
    const notificationsInfoIcon = nc.notificationsInfoIcon()

    expect(notificationsInfoIcon).toMatchInlineSnapshot(`
      {
        "notificationsInfoIcon.foreground": "",
      }
    `)
  })
})
