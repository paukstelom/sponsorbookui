import { getCategories, getSponsors } from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from './components/sponsorPageComponent'

export const dynamic = 'force-dynamic'

export default async function AllSponsorsPage() {

    const categoryData = await getCategories()
    const categories = (await categoryData.json()) as Category[]

    return <SponsorPageComponent categories={categories} />
}
