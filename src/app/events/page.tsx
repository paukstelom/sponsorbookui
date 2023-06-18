import EventCard, { Eventer } from 'sponsorbook/components/eventCard'
import { getEvents } from 'sponsorbook/clients/sponsorbook'

export default async function Events() {
    const data = await getEvents()
    const events = (await data.json()) as Eventer[]

    return (
        <>
            <div className="container-responsive">
                <h1 className="p-4">Ongoing</h1>
                <div className="row row-cols-lg-4 row-cols-md-2 g-5">
                    {events
                        .filter((x) => x.status === 'Ongoing')
                        .map((Eventer) => (
                            <div key={Eventer._id} className="">
                                <EventCard event={Eventer} />
                            </div>
                        ))}
                </div>
                <h1 className="p-4">Closed</h1>
                <div className="row row-cols-lg-4 row-cols-md-2 g-4">
                    {events
                        .filter((x) => x.status === 'Closed')
                        .map((Eventer) => (
                            <div key={Eventer._id} className="">
                                <EventCard event={Eventer} />
                            </div>
                        ))}
                </div>
                <h4>This line removes scrollbar</h4>
            </div>
        </>
    )
}
