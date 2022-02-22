import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => {
          return <UserItem key={user.login} user={user} />
        })}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
