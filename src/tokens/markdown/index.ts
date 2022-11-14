import heading from './heading'
import comment from './comment'
import order from './order'
import bold from './bold'
import link from './link'
import punctuation from './punctuation'
import yaml from './yaml.js'

export default function markdownLanguage() {
  return [
    ...heading,
    ...comment,
    ...order,
    ...bold,
    ...link,
    ...punctuation,
    ...yaml
  ]
}
