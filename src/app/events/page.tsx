import sponsorbook from 'sponsorbook/clients/sponsorbook'
import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'
import EventsPageComponent from './components/eventsPageComponent'
import useSessionCookie from 'sponsorbook/utils/useSessionCookie'

export const dynamic = 'force-dynamic'

export default async function AllEventsPage() {
    const sb = sponsorbook(useSessionCookie())
    const [eventResponse, subOrganizationResponse] = await Promise.all([
        sb.getEvents(),
        sb.getSubOrgs(),
    ])
    const events = (await eventResponse.json()) as Eventer[]
    const subOrganizations =
        (await subOrganizationResponse.json()) as SubOrganization[]

    return (
        <EventsPageComponent
            events={events}
            subOrganizations={subOrganizations}
        />
    )
}
