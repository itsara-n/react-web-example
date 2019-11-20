
/**
 * Action for login admin
 * 
 * @param {string} username 
 * @param {string} password 
 */
export const adminLogin = (username = '', password = '') => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' })
  const data = JSON.stringify({
    username,
    password
  })
  const res = await postLoginAPI(data)
  const error = res.error ? res.error : ''
  const token = res.token ? res.token : ''
  if (token !== '') {
    dispatch({
      type: 'LOGIN_SUCCESS',
      token
    })
  } else {
    dispatch({
      type: 'LOGIN_FAILURE',
      error
    })
  }
}
/**
 * Call API login
 * @param {json} body 
 */
const postLoginAPI = (body) => {
  return fetch('https://cors-anywhere.herokuapp.com/' + 'https://nodejs-api-example.herokuapp.com/login', {
    credentials: 'same-origin',
    method: 'POST',
    body,
    headers: new Headers({ 'Content-Type': 'application/json' })
  }).then(response => {
    return response.text().then((data) => {
      if (data === 'Wrong username and password') {
        return { error: data }
      }
      return { token: data }
    })
  })
}
/**
 * Action for admin logout
 */
export const adminLogout = () => (dispatch) => {
  dispatch({ type: 'LOGIN_CLEAR' })
}


/**
 * Action for get all products list
 */
export const getProductsList = () => async (dispatch, getState) => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' })
  const data = await getProductsAPI()
  dispatch({
    type: 'GET_PRODUCTS_SUCCESS',
    list: data
  })
}
/**
 * Call API get products list
 */
const getProductsAPI = () => {
  return fetch('https://cors-anywhere.herokuapp.com/' + 'https://nodejs-api-example.herokuapp.com/products', {
    credentials: 'same-origin',
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
  }).then(response => {
    return response.json().then(data => data)
  })
}