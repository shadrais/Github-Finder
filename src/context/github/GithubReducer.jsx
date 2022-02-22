const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
      }
    case 'RESET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

export default GithubReducer
