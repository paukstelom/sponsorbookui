import router from 'next/navigation'
import { Sponsor } from 'sponsorbook/components/sponsor'

export default async function Sponsor({
    params,
}: {
    params: { sponsorId: string }
}) {
    const data = await fetch(
        `http://127.0.0.1:8000/sponsor/${params.sponsorId}`,
        {
            next: { revalidate: 0 },
        }
    )
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
