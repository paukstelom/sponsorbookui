import EventCard, { Eventer } from 'sponsorbook/components/eventCard'
import { getEvents } from 'sponsorbook/clients/sponsorbook'

export default async function Events() {
    const data = await getEvents()
    const events = (await data.json()) as Eventer[]
    return (
        <>
            <div className="container-responsive">
                {events.map((Eventer) => (
                    <div key={Eventer._id}>
                        <EventCard event={Eventer} />
                    </div>
                ))}
            </div>
        </>
    )
}
