import styleSelector from './classId'
import styleProps from './props'
import styleValues from './value'
import stylePunctuation from './punctuation'
import styleOperator from './operator'
import styleComment from './comment'
import styleAtRule from './at-rule'
import styleVendor from './vendor'
import styleString from './string'
import styleVariable from './variable'
import styleSource from './source'

export default function styleLanguage() {
  return [
    ...styleSelector,
    ...styleProps,
    ...styleValues,
    ...stylePunctuation,
    ...styleOperator,
    ...styleComment,
    ...styleAtRule,
    ...styleVendor,
    ...styleString,
    ...styleVariable,
    ...styleSource
  ]
}
