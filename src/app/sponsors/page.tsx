import { getCategories, getSponsors } from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from 'sponsorbook/components/sponsorsPage/sponsorPageComponent'

export default async function AllSponsorsPage() {
    const sponsorData = await getSponsors()
    const sponsors = (await sponsorData.json()) as Sponsor[]

    // const categoryData = await getCategories()
    // const categories = (await categoryData.json()) as Category[]

    const categories = [
        { name: 'food', info: 'put in tyour ' },
        { name: 'toys', info: 'put in tyour' },
        { name: 'bublegum', info: 'put in tyour a' },
        { name: 'guns', info: 'put in tyour ' },
        { name: 'items', info: 'put in tyour ' },
    ] as Category[]

    return <SponsorPageComponent sponsors={sponsors} categories={categories} />
}
