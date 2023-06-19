import LoginPageComponent from 'sponsorbook/components/loginPage/loginPageComponent'

export type LoginFormState = {
    email: string
    password: string
}

export default async function LoginPage() {
    return <LoginPageComponent />
}
