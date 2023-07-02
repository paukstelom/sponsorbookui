import {
    getOneEvent,
    getOneSponsor,
    getTicketsForEvent,
} from 'sponsorbook/clients/sponsorbook'
import { Ticket } from 'sponsorbook/clients/sponsorbook/models'


export default async function SingleSponsorPage({
    params,
}: {
    params: { sponsorId: string }
}) {
    const sponsorData = await getOneSponsor(params.sponsorId)


    const sponsor = await sponsorData.json()


    return (
        <h1>Sponsor infor here</h1>
    )
}
