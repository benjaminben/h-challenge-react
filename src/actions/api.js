const baseUrl = process.env.NODE_ENV === 'production' ?
  'https://benjaminben.github.io/h-challenge-react' :
  'http://localhost:3000'

const api = (uri, options) => {
  const args = {}
  if (options) {
    args.method = options.method || 'GET'
    args.body = options.body
    args.headers = options.headers
  }

  return fetch(`${baseUrl}${uri}`, args)
}

export default api
export {
  baseUrl
}
