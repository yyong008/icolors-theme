// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import actionColors from '../../dark/action-colors'

it('action-bar toolbar::blueColors', () => {
  setRuntimeColors('blueColors')
  const toobar = actionColors.actionColors()

  expect(Object.keys(toobar)).toHaveLength(3)
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#1890ff",
      "toolbar.hoverBackground": "#0050b3",
      "toolbar.hoverOutline": "#0050b3",
    }
  `)
})

it('action-bar toolbar::cyanColors', () => {
  setRuntimeColors('cyanColors')
  const toobar = actionColors.actionColors()

  expect(Object.keys(toobar)).toHaveLength(3)
  expect(toobar).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#13c2c2",
      "toolbar.hoverBackground": "#006d75",
      "toolbar.hoverOutline": "#006d75",
    }
  `)
})

it('action-bar toolbar::geekBlueColors', () => {
  setRuntimeColors('geekBlueColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#2f54eb",
      "toolbar.hoverBackground": "#10239e",
      "toolbar.hoverOutline": "#10239e",
    }
  `)
})

it('action-bar toolbar::goldColors', () => {
  setRuntimeColors('goldColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#faad14",
      "toolbar.hoverBackground": "#ad6800",
      "toolbar.hoverOutline": "#ad6800",
    }
  `)
})

// it('action-bar toolbar::grayColors', () => {
//   setRuntimeColors('grayColors')
//   expect(actionColors.actionColors()).toMatchInlineSnapshot()
// })

it('action-bar toolbar::greenColors', () => {
  setRuntimeColors('greenColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#52c41a",
      "toolbar.hoverBackground": "#237804",
      "toolbar.hoverOutline": "#237804",
    }
  `)
})

it('action-bar toolbar::limeColors', () => {
  setRuntimeColors('limeColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#a0d911",
      "toolbar.hoverBackground": "#5b8c00",
      "toolbar.hoverOutline": "#5b8c00",
    }
  `)
})

it('action-bar toolbar::magentaColors', () => {
  setRuntimeColors('magentaColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#eb2f96",
      "toolbar.hoverBackground": "#9e1068",
      "toolbar.hoverOutline": "#9e1068",
    }
  `)
})

it('action-bar toolbar::orangeColors', () => {
  setRuntimeColors('orangeColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#fa8c16",
      "toolbar.hoverBackground": "#ad4e00",
      "toolbar.hoverOutline": "#ad4e00",
    }
  `)
})

it('action-bar toolbar::purpleColors', () => {
  setRuntimeColors('purpleColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#722ed1",
      "toolbar.hoverBackground": "#391085",
      "toolbar.hoverOutline": "#391085",
    }
  `)
})

it('action-bar toolbar::redColors', () => {
  setRuntimeColors('redColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#f5222d",
      "toolbar.hoverBackground": "#a8071a",
      "toolbar.hoverOutline": "#a8071a",
    }
  `)
})

it('action-bar toolbar::volcanoColors', () => {
  setRuntimeColors('volcanoColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#fa541c",
      "toolbar.hoverBackground": "#ad2102",
      "toolbar.hoverOutline": "#ad2102",
    }
  `)
})

it('action-bar toolbar::yellowColors', () => {
  setRuntimeColors('yellowColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#fadb14",
      "toolbar.hoverBackground": "#ad8b00",
      "toolbar.hoverOutline": "#ad8b00",
    }
  `)
})
