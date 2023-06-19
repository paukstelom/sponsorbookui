import { getSponsors } from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from 'sponsorbook/components/sponsorsPage/sponsorPageComponent'

export default async function AllSponsorsPage() {
    const data = await getSponsors()
    const sponsors = (await data.json()) as Sponsor[]

    return <SponsorPageComponent sponsors={sponsors} />
}
