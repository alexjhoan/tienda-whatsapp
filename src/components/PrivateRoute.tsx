import UserContext from '@/context/UserContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const PrivateRoute = ({ children }: any) => {
  const router = useRouter()
  const { user } = useContext(UserContext)
  if (typeof window !== 'undefined' && user === null) {
    router.push('/login')
  }

  return children
}

export default PrivateRoute
