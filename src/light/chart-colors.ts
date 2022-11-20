import type Charts from 'src/types/Charts'

import colors from '../designs/index.js'

const charts = (): Partial<Charts> => ({
  ['charts.foreground']: colors.redColors400,
  ['charts.lines']: '',
  ['charts.red']: '',
  ['charts.blue']: '',
  ['charts.yellow']: '',
  ['charts.orange']: '',
  ['charts.green']: '',
  ['charts.purple']: ''
})

export default {
  charts
}
