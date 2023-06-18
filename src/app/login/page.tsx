'use client'
import { useFormik } from 'formik'
import { createOrganization, login } from 'sponsorbook/clients/sponsorbook'

export type LoginFormState = {
    email: string
    password: string
}

export default function Login() {
    const formik = useFormik<LoginFormState>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async () => {
            console.log(formik.values)
            await login(formik.values)
        },
    })

    return (
        <>
            <div className="container-fluid" style={{ width: '25rem' }}>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            name="email"
                            placeholder="name@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-check text-start my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            id="flexCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-dark w-100 py-2" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </>
    )
}
