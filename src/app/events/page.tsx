import { ProList } from '@ant-design/pro-components'
import { Button, Space, Tag } from 'antd'
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'
import useSessionCookie from 'sponsorbook/utils/useSessionCookie'
import EventsPageComponent from './components/mainComponent'

// export const dynamic = 'force-dynamic'

export default async function AllEventsPage() {
    // const sb = sponsorbook(useSessionCookie())
    // const [eventResponse, subOrganizationResponse] = await Promise.all([
    //     sb.getEvents(),
    //     sb.getSubOrgs(),
    // ])
    // const events = (await eventResponse.json()) as Eventer[]
    // const subOrganizations =
    //     (await subOrganizationResponse.json()) as SubOrganization[]

    return (
        <EventsPageComponent/>
    )
}
