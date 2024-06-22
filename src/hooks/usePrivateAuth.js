import { useSelector } from "react-redux"

export const usePrivateAuth = () => {

    const { accessToken, user } = useSelector(state => state.auth)

    if (accessToken && user) {
        return true
    }
    return false

}






























