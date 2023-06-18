import SearchBar from 'sponsorbook/components/searchBard'
import { Sponsor } from 'sponsorbook/components/sponsor'
import SponsorsTable from 'sponsorbook/components/sponsorsTable'
import { getSponsors, getSubOrgs } from 'sponsorbook/clients/sponsorbook'

export default async function Sponsors() {
    const data = await getSponsors()
    const sponsors = (await data.json()) as Sponsor[]

    return (
        <>
            <SearchBar />
            <SponsorsTable sponsors={sponsors} />
        </>
    )
}
