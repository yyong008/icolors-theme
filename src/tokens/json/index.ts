import jsonComment from './comment'
import jsonKeyValue from './props'

export default function jsonLanguage() {
  return [...jsonComment, ...jsonKeyValue]
}
