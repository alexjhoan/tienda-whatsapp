import { apiLoginUser } from '@/services/services'
import { ReactNode, createContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { cookiesName } from '../utils/const'

const UserContext = createContext<any>(null)

function UserProvider({ children }: { children: ReactNode }) {
  const [cookiesUser, setCookieUser, removeCookieUser] = useCookies([cookiesName])
  const [user, setUserState] = useState<any>(
    cookiesUser[cookiesName] !== undefined
      ? {
          ...cookiesUser[cookiesName]
        }
      : null
  )

  const setUser = (loginUser: any) => {
    setCookieUser(cookiesName, loginUser, { maxAge: loginUser.exp_token })
    setUserState(loginUser)
  }

  const login = async (data: any) => {
    const loginUser: any = await apiLoginUser(data)
    if (loginUser.status === 200) {
      setUser(loginUser.body)
    }
    return loginUser
  }

  const logout = () => {
    setUserState(null)
    removeCookieUser(cookiesName)
  }

  const globalState = { user, setUser, login, logout }

  return <UserContext.Provider value={globalState}>{children}</UserContext.Provider>
}

export { UserProvider }
export default UserContext
