'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type Sponsor = {
    _id: string
    companyNumber: string
    contacts: Contact[]
    website: string
    rating: Rating
    name: string
    category: string
    description: string
}

export type SponsorCardProps = {
    sponsor: Sponsor
}

export default function SponsorLine({ sponsor }: SponsorCardProps) {
    const router = useRouter()

    const onSubmit = async () => {
        await deleteOneSponsor(sponsor._id)

        router.refresh()
    }

    return <></>
}
