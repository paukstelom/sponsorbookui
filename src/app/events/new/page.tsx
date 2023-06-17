'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import NewEventComponent from 'sponsorbook/components/eventNewComponent'

export type CreateEventFormState = {
    name: string
    description: string
    sub_organization_ids: string[]
}

export type SubOrganization = {
    _id: string
    name: string
    description: string
}

export default async function NewEvent() {
    const x = await fetch('http://127.0.0.1:8000/sub_organizations/', {
        next: { revalidate: 0 },
    })
    const data = await x.json()
    return <NewEventComponent subOrganizations={data} />
}
