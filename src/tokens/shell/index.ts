import variable from './variable'
import comment from './comment'
import string from './string'
import modifier from './modifier'
import punctuation from './punctuation'
import operator from './operator'
import escape from './escape'
import builtin from './builtin'

export default function shell() {
  return [
    ...variable,
    ...comment,
    ...string,
    ...modifier,
    ...punctuation,
    ...operator,
    ...escape,
    ...builtin
  ]
}
