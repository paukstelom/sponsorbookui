import router from 'next/navigation'
import { Sponsor } from 'sponsorbook/components/sponsor'
import { getOneEvent, getOneSponsor } from 'sponsorbook/clients/sponsorbook'
import { Eventer } from 'sponsorbook/components/eventCard'

export default async function Event({
    params,
}: {
    params: { eventId: string }
}) {
    const data = await getOneEvent(params.eventId)
    const event = (await data.json()) as Eventer

    console.log(event)

    return (
        <>
            <h1>Name: {event.name}</h1>
            <h4>Status: {event.status}</h4>
            <h4>Desciprtion {event.description}</h4>
        </>
    )
}
