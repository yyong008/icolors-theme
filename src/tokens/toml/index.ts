import tomlComment from './comment'
import string from './string'
import prop from './prop'

export default function tomlLanguage() {
  return [...tomlComment, ...string, ...prop]
}
