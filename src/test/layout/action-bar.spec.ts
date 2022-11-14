// import type Toolbar from '../types/Toolbar'

import { setRuntimeColors } from '../../designs/index'
import actionColors from '../../dark/action-colors'

it('action-bar toolbar::blueColors', () => {
  setRuntimeColors('blueColors')
  const toobar = actionColors.actionColors()

  expect(Object.keys(toobar)).toHaveLength(3)
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#91d5ff",
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
      "toolbar.activeBackground": "#87e8de",
      "toolbar.hoverBackground": "#006d75",
      "toolbar.hoverOutline": "#006d75",
    }
  `)
})

it('action-bar toolbar::geekBlueColors', () => {
  setRuntimeColors('geekBlueColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#adc6ff",
      "toolbar.hoverBackground": "#10239e",
      "toolbar.hoverOutline": "#10239e",
    }
  `)
})

it('action-bar toolbar::goldColors', () => {
  setRuntimeColors('goldColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#ffe58f",
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
      "toolbar.activeBackground": "#b7eb8f",
      "toolbar.hoverBackground": "#237804",
      "toolbar.hoverOutline": "#237804",
    }
  `)
})

it('action-bar toolbar::limeColors', () => {
  setRuntimeColors('limeColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#eaff8f",
      "toolbar.hoverBackground": "#5b8c00",
      "toolbar.hoverOutline": "#5b8c00",
    }
  `)
})

it('action-bar toolbar::magentaColors', () => {
  setRuntimeColors('magentaColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#ffadd2",
      "toolbar.hoverBackground": "#9e1068",
      "toolbar.hoverOutline": "#9e1068",
    }
  `)
})

it('action-bar toolbar::orangeColors', () => {
  setRuntimeColors('orangeColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#ffd591",
      "toolbar.hoverBackground": "#ad4e00",
      "toolbar.hoverOutline": "#ad4e00",
    }
  `)
})

it('action-bar toolbar::purpleColors', () => {
  setRuntimeColors('purpleColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#d3adf7",
      "toolbar.hoverBackground": "#391085",
      "toolbar.hoverOutline": "#391085",
    }
  `)
})

it('action-bar toolbar::redColors', () => {
  setRuntimeColors('redColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#ffa39e",
      "toolbar.hoverBackground": "#a8071a",
      "toolbar.hoverOutline": "#a8071a",
    }
  `)
})

it('action-bar toolbar::volcanoColors', () => {
  setRuntimeColors('volcanoColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#ffbb96",
      "toolbar.hoverBackground": "#ad2102",
      "toolbar.hoverOutline": "#ad2102",
    }
  `)
})

it('action-bar toolbar::yellowColors', () => {
  setRuntimeColors('yellowColors')
  expect(actionColors.actionColors()).toMatchInlineSnapshot(`
    {
      "toolbar.activeBackground": "#fffb8f",
      "toolbar.hoverBackground": "#ad8b00",
      "toolbar.hoverOutline": "#ad8b00",
    }
  `)
})
