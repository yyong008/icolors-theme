import yamlTag from './tag'
import yamlComment from './comment'

export default function yamlLanuage() {
  return [...yamlTag, ...yamlComment]
}
