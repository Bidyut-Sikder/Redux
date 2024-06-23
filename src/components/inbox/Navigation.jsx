import { Link } from "react-router-dom";
import logoImage from "../../assets/images/lws-logo-dark.svg";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../features/auth/authSlice";

export default function Navigation() {
    const dispatch = useDispatch()


    const logout = () => {
        dispatch(userLogOut())
        localStorage.clear()
    }

    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        <img
                            className="h-10"
                            src={logoImage}
                            alt="Learn with Sumit"
                        />
                    </Link>
                    <ul>
                        <li className="text-white">
                            <button onClick={logout} >Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}