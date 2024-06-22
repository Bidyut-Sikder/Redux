import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/images/lws-logo-light.svg";
import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../features/auth/authApi";
import Error from "../components/ui/Error";

export default function Register() {
    // const [login, { isError, data, isLoading, error }] = useLoginMutation()
    const [register, { isError, data, isLoading, error }] = useRegisterMutation()
    const [err, serErr] = useState(false)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false
    })



    const onChangeHandler = (key, value) => {
        setForm({
            ...form,
            [key]: value
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.password === form.confirmPassword) {
            serErr(false)

            register({
                name: form.name,
                email: form.email,
                password: form.password,

            })
            // login({
            //     email: form.email,
            //     password: form.password,
            // })


        } else {
            serErr('Passwords do not match.')
        }
    }

    useEffect(() => {
        if (data?.accessToken && data?.user) {
            navigate('/inbox')
        }
    }, [data])


    return (

        <div className="grid place-items-center h-screen bg-[#F9FAFB">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <Link to="/">
                            <img
                                className="mx-auto h-12 w-auto"
                                src={logoImage}
                                alt="Learn with sumit"
                            />
                        </Link>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6"  >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    value={form.name}
                                    onChange={(e) => onChangeHandler('name', e.target.value)}

                                    id="name"
                                    name="Name"
                                    type="Name"
                                    autoComplete="Name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    value={form.email}
                                    onChange={(e) => onChangeHandler('email', e.target.value)}

                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={form.password}
                                    onChange={(e) => onChangeHandler('password', e.target.value)}

                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="sr-only"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    value={form.confirmPassword}
                                    onChange={(e) => onChangeHandler('confirmPassword', e.target.value)}

                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    autoComplete="current-confirmPassword"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="confirmPassword"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    required
                                    value={form.checked}
                                    onChange={(e) => onChangeHandler('checked', !form.checked)}

                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="accept-terms"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Agreed with the terms and condition
                                </label>
                            </div>
                        </div>

                        <div>
                            <button disabled={isLoading}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                                Sign up
                            </button>
                        </div>
                        {(error || err) && <Error message={err ? err : error.data} />}
                    </form>
                </div>
            </div>
        </div>

    );
}
