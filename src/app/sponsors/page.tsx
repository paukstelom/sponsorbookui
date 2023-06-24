import { getCategories, getSponsors } from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from './components/sponsorPageComponent'

export default async function AllSponsorsPage() {
    const sponsorData = await getSponsors()
    const sponsors = (await sponsorData.json()) as Sponsor[]

    const categoryData = await getCategories()
    const categories = (await categoryData.json()) as Category[]

    return <SponsorPageComponent sponsors={sponsors} categories={categories} />
}
