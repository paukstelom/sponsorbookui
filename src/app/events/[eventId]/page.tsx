import { getOneEvent } from 'sponsorbook/clients/sponsorbook'

export default async function SingleEventPage({
    params,
}: {
    params: { eventId: string }
}) {
    const data = await getOneEvent(params.eventId)

    return <>hello</>
}
