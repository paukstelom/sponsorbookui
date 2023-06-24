import sponsorbook from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Category } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from './components/sponsorPageComponent'
import getCookie from 'sponsorbook/utils/getCookie'

export const dynamic = 'force-dynamic'

export default async function AllSponsorsPage() {
    const sb = sponsorbook(getCookie())

    const categoryData = await sb.getCategories()
    const categories = (await categoryData.json()) as Category[]

    return <SponsorPageComponent categories={categories} />
}
