import { getEvents, getSubOrgs } from 'sponsorbook/clients/sponsorbook'
import {
    Eventer,
    SubOrganization,
} from 'sponsorbook/clients/sponsorbook/models'
import EventsPageComponent from './components/eventsPageComponent'

export default async function AllEventsPage() {
    const eventData = await getEvents()
    const subOrganizationData = await getSubOrgs()
    const events = (await eventData.json()) as Eventer[]
    const subOrganizations =
        (await subOrganizationData.json()) as SubOrganization[]

    return (
        <EventsPageComponent
            events={events}
            subOrganizations={subOrganizations}
        />
    )
}
