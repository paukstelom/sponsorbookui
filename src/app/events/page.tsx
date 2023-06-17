import EventCard, { Eventer } from 'sponsorbook/components/eventCard'

export default async function Events() {
    const data = await fetch('http://127.0.0.1:8000/events', {
        next: { revalidate: 0 },
    })
    const events = (await data.json()) as Eventer[]
    console.log(events)
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
