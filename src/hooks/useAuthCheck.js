import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userLogIn } from "../features/auth/authSlice"



export const useAuthCheck = () => {
    const dispatch = useDispatch()
    const [authCheck, setAuthCheck] = useState(false)

    useEffect(() => {
        const authToken = localStorage.getItem('auth')

        if (authToken) {
            const auth = JSON.parse(authToken)

            if (auth?.accessToken && auth?.user) {
                dispatch(userLogIn({
                    accessToken: auth.accessToken,
                    user: auth.user
                }))
            }

        }



        setAuthCheck(true)

    }, [])

    return authCheck
}
























