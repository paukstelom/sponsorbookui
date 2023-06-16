import SearchBar from 'sponsorbook/components/searchBard'
import { Sponsor } from 'sponsorbook/components/sponsor'
import SponsorsTable from 'sponsorbook/components/sponsorsTable'

export default async function Sponsors() {
    const data = await fetch('http://127.0.0.1:8000/sponsors', {
        next: { revalidate: 0 },
    })
    const sponsors = (await data.json()) as Sponsor[]

    return (
        <>
            <SearchBar />
            <SponsorsTable sponsors={sponsors} />
        </>
    )
}
