import type {
  SystemColorTypes,
  LevelColorTypes,
  weight1000,
  baseColors
} from './type'

import { colors, colorReverseMap } from './systemColor'

const runtimeColor: {
  color: SystemColorTypes
} = {
  color: 'cyanColors'
}

export const setRuntimeColors = (color: SystemColorTypes) => {
  runtimeColor.color = color
  return runtimeColor.color
}

export const getRuntimeColors = (): SystemColorTypes => {
  return runtimeColor.color
}

export const mapColors = (color: LevelColorTypes) => {
  return colors[color]
}

export const mapColorsReverse = (rColor: LevelColorTypes) => {
  const [currentColors, weight] = rColor.split('Colors') as [
    baseColors,
    weight1000
  ]
  const color =
    `${colorReverseMap[currentColors]}Colors${weight}` as LevelColorTypes
  return colors[color]
}

export const mapColorsWithRuntimeWeight = (weight: weight1000) => {
  return `${mapColors(`${getRuntimeColors()}${weight}`)}`
}

export const mapColorsReverseWithRuntimeWeight = (weight: weight1000) => {
  return `${mapColorsReverse(`${getRuntimeColors()}${weight}`)}`
}

export const mapColorsWithRuntimeWeightFn = (weight: weight1000) => {
  return () => `${mapColors(`${getRuntimeColors()}${weight}`)}`
}

export const mapColorsReverseWithRuntimeWeightFn = (weight: weight1000) => {
  return () => `${mapColorsReverse(`${getRuntimeColors()}${weight}`)}`
}

// alpha
export const mapColorsWithRuntimeWeightAplha = (
  weight: weight1000,
  alpha: string
) => {
  return `${mapColors(`${getRuntimeColors()}${weight}`)}${alpha}`
}

export const mapColorsReverseWithRuntimeWeightAlpha = (
  weight: weight1000,
  alpha: string
) => {
  return `${mapColorsReverse(`${getRuntimeColors()}${weight}`)}${alpha}`
}

export const mapColorsWithRuntimeWeightFnAlpha = (
  weight: weight1000,
  alpha: string
) => {
  return () => `${mapColors(`${getRuntimeColors()}${weight}`)}${alpha}`
}

export const mapColorsReverseWithRuntimeWeightFnAlpha = (
  weight: weight1000,
  alpha: string
) => {
  return () => `${mapColorsReverse(`${getRuntimeColors()}${weight}`)}${alpha}`
}

export default colors
