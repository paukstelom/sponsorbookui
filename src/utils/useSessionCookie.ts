import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function useSessionCookie() {
    const cookie = cookies().get('session')

    if (!cookie) {
        redirect('/login')
    }

    const sessionCookie = `session=${cookie.value}`

    return { cookie: sessionCookie }
}
