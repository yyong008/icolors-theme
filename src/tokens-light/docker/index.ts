import docker from './docker'
import string from './string'
import comment from './comment'

export default function dockerfile() {
  return [...docker, ...string, ...comment]
}
