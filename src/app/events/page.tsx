import { getEvents, getSubOrgs } from 'sponsorbook/clients/sponsorbook'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'
import EventCollection, {
    Eventer,
} from 'sponsorbook/components/eventCollection'

export default async function AllEventsPage() {
    const eventData = await getEvents()
    const subOrganizationData = await getSubOrgs()
    const events = (await eventData.json()) as Eventer[]
    const subOrganizations =
        (await subOrganizationData.json()) as SubOrganization[]

    return (
        <>
            <EventCollection
                events={events}
                subOrganizations={subOrganizations}
            />
        </>
    )
}
