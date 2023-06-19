import { Eventer } from 'sponsorbook/components/eventCard'
import { getEvents, getSubOrgs } from 'sponsorbook/clients/sponsorbook'
import EventsTable from 'sponsorbook/components/eventsTable'
import { SubOrganization } from 'sponsorbook/clients/sponsorbook/models'

export default async function Events() {
    const data = await getEvents()
    const events = (await data.json()) as Eventer[]

    const dataSubOrgs = await getSubOrgs()
    const subOrgs = (await dataSubOrgs.json()) as SubOrganization[]

    return <EventsTable events={events} subOrganizations={subOrgs} />
}
