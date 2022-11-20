import type ProgressBar from 'src/types/ProgressBar'

const progressBar = (): Partial<ProgressBar> => ({
  ['progressBar.background']: '#75715E'
})

export default { progressBar }
