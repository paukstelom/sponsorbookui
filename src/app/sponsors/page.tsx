import { Sponsor } from 'sponsorbook/components/sponsor'
import SponsorsTable from 'sponsorbook/components/sponsorsTable'
import { getSponsors } from 'sponsorbook/clients/sponsorbook'

import React from 'react'
import AddSponsorModal from 'sponsorbook/components/addSponsorModal'

export default async function AllSponsorsPage() {
    const data = await getSponsors()
    const sponsors = (await data.json()) as Sponsor[]

    return (
        <>
            <div className="site-layout-content">
                <AddSponsorModal />
                <SponsorsTable sponsors={sponsors} />
            </div>
        </>
    )
}
