// TODO - this function should return the server-provided error messages
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response)
  }
  return response
}

// // // //

// $POST helper function
export const $POST = function (url, body, token) {
  // Defines requestHeaders object
  let requestHeaders = {
    'Content-Type': 'application/json'
  }

  // Adds `Authorization` header to request
  // if token parameter is defined
  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`
  }

  // token
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: new Headers(requestHeaders)
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $GET Helper function
export const $GET = function (url, options = {}) {
  // Defines requestHeaders object
  let requestHeaders = {
    'Content-Type': 'application/json'
  }

  // Adds `Authorization` header to request
  // if token parameter is defined
  if (options.token) {
    requestHeaders['Authorization'] = `Bearer ${options.token}`
  }

  return fetch(url, {
    headers: new Headers(requestHeaders)
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $PUT helper function
export const $PUT = function (url, opts) {
  // Defines requestHeaders object
  // TODO - abstract into getHeaders() function
  let requestHeaders = {
    'Content-Type': 'application/json'
  }

  // Adds `Authorization` header to request
  // if token parameter is defined
  // TODO - abstract into getHeader() function
  if (opts.token) {
    requestHeaders['Authorization'] = `Bearer ${opts.token}`
  }

  return fetch(url, {
    method: 'put',
    headers: new Headers(requestHeaders)
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $DEL helper function
export const $DEL = function (url, { token }) {
  // Defines requestHeaders object
  // TODO - abstract into getHeaders() function
  let requestHeaders = {
    'Content-Type': 'application/json'
  }

  // Adds `Authorization` header to request
  // if token parameter is defined
  // TODO - abstract into getHeader() function
  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`
  }

  return fetch(url, {
    method: 'delete',
    headers: new Headers(requestHeaders)
  })
  .then(handleErrors)
  .then((response) => { return response.json() })
}
