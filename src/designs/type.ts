import { systemColors, colors } from './systemColor'

export type SystemColorTypes = keyof typeof systemColors
export type LevelColorTypes = keyof typeof colors

export type baseColors =
  | 'blue'
  | 'red'
  | 'volcano'
  | 'geekBlue'
  | 'orange'
  | 'purple'
  | 'gold'
  | 'cyan'
  | 'yellow'
  | 'magenta'
  | 'green'
  | 'lime'

export type weight1000 =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000'

export type weight1200 =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000'
  | '1100'
  | '1200'
