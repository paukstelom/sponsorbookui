export default function Login() {
    return (
        <>
            <div className="container-fluid" style={{ width: '25rem' }}>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
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
                            for="flexCheckDefault"
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
