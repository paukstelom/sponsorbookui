import sponsorbook from 'sponsorbook/clients/sponsorbook'

import React from 'react'

import { Category } from 'sponsorbook/clients/sponsorbook/models'
import SponsorPageComponent from './components/sponsorPageComponent'
import useSessionCookie from 'sponsorbook/utils/useSessionCookie'

export const dynamic = 'force-dynamic'

export default async function AllSponsorsPage() {
    const sb = sponsorbook(useSessionCookie())

    const categoryData = await sb.getCategories()
    const categories = (await categoryData.json()) as Category[]

    return <SponsorPageComponent categories={categories} />
}
