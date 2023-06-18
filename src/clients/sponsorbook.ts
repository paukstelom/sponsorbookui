import { CreateOrganizationFormState } from 'sponsorbook/app/devpage/page'
import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'

const sponsorbookUrl = (path: string) => `http://127.0.0.1:8000${path}`

export type CreateSponsorRequest = {
    companyNumber: string
    contacts: Contact[]
    website: string
    rating: Rating
    name: string
    category: string
    description: string
}
export const createSponsor = (data: CreateSponsorRequest) =>
    fetch(sponsorbookUrl('/sponsors'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })

export const getSubOrgs = () =>
    fetch(sponsorbookUrl('/sub_organizations'), {
        next: { revalidate: 0 },
    })

export const getSponsors = () =>
    fetch(sponsorbookUrl('/sponsors'), {
        next: { revalidate: 0 },
    })

export const getEvents = () =>
    fetch(sponsorbookUrl('/events'), {
        next: { revalidate: 0 },
    })

export const getOneSponsor = (sponsorId: string) =>
    fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), {
        next: { revalidate: 0 },
    })

export const getOneEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}`), {
        next: { revalidate: 0 },
    })    

export const deleteOneEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}`), {
        method: 'DELETE',
    })

export const createOrganization = (data: CreateOrganizationFormState) =>
    fetch(sponsorbookUrl('/organizations'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })


export const closeOneEvent = (eventId: string) =>
fetch(sponsorbookUrl(`/events/${eventId}/close`), {
        method: 'POST'
})

export const deleteOneSponsor = (sponsorId: string) =>
    fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), {
        method: 'DELETE',
    })

export type CreateEventFormState = {
    name: string
    description: string
    sub_organization_ids: string[]
}

export const createEvent = (data: CreateEventFormState) =>
    fetch(sponsorbookUrl('/events'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
