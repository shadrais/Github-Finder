import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const resetUsers = () => {
    dispatch({
      type: 'RESET_USERS',
      payload: [],
    })
  }

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const { items } = await response.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUsers = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    dispatch({
      type: 'GET_USER',
      payload: data,
    })
  }
  const getRepos = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        resetUsers,
        getUsers,
        getRepos,
        repos: state.repos,
        user: state.user,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
