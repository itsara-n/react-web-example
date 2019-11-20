const initialState = {
  loading: false,
  products: [],
  error: null,
  token: null,
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: initialState.error,
        token: initialState.token
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.token,
        error: initialState.error
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        token: initialState.token,
        error: action.error
      }
    case 'LOGIN_CLEAR':
      return {
        ...state,
        loading: initialState.loading,
        token: initialState.token,
        error: action.error
      }

    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        loadin: true,
      }
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.list,
      }

    default:
      return state
  }
}

export default reducers
