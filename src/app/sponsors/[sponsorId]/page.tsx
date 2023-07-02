import sponsorbook from 'sponsorbook/clients/sponsorbook'

export default async function SingleSponsorPage({
    params,
}: {
    params: { sponsorId: string }
}) {
    const sponsorData = await sponsorbook().getOneSponsor(params.sponsorId)

    const sponsor = await sponsorData.json()

    return <h1>Sponsor infor here</h1>
}
