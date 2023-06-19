import LoginForm from 'sponsorbook/components/loginForm'

export type LoginFormState = {
    email: string
    password: string
}

export default async function LoginPage() {
    return (
        <>
            <LoginForm />
        </>
    )
}
