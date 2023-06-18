import router from 'next/navigation'
import { Sponsor } from 'sponsorbook/components/sponsor'
import { getOneSponsor } from 'sponsorbook/clients/sponsorbook'

export default async function Sponsor({
    params,
}: {
    params: { sponsorId: string }
}) {
    const data = await getOneSponsor(`/sponsor/${params.sponsorId}`)
    const sponsor = (await data.json()) as Sponsor

    return (
        <>
            <h1>Name: {sponsor.name}</h1>
            <h4>Company number: {sponsor.companyNumber}</h4>
            <h4>Category: {sponsor.category}</h4>
            <h4>Website: {sponsor.website}</h4>
            <h2>Contact details</h2>
            <h4>Name: {sponsor.contacts[0].name}</h4>
            <h4>Phone: {sponsor.contacts[0].phone}</h4>
            <h4>Email: {sponsor.contacts[0].email}</h4>
            <h2>Other info</h2>
            <h4>Rating {sponsor.rating.score}</h4>
            <h4>Desciprtion {sponsor.description}</h4>
        </>
    )
}
