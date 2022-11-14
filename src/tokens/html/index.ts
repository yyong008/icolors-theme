import htmlTag from './tag'
import htmlComment from './comment'
import htmlAttr from './attr'

export default function htmlLanguage() {
  return [...htmlTag, ...htmlComment, ...htmlAttr]
}
