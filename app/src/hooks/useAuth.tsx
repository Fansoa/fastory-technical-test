import useSpyingSystemStore from "../stores/stores"
import { login, logout} from "../services/api"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    const navigate = useNavigate()
    const { reset } = useSpyingSystemStore(state => state)
    
    const signIn = async ({ username, password }) => {
        const response = await login({ username, password })
        
        if (response.ok) {
            navigate('/')
        }

        return response
    }

    const signOut = () => {
        logout()
        reset()
        navigate('/login')
    }



    return { signIn, signOut }
}

export default useAuth
