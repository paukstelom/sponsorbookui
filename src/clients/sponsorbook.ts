import {
    CreateCategoryRequest,
    CreateEventFormState,
    CreateOrganizationRequest,
    CreateSponsorRequest,
    LoginRequest,
    CreateSubOrganizationRequest,
} from 'sponsorbook/clients/sponsorbook/creationModels'
import { Sponsor } from './sponsorbook/models'

const sponsorbookUrl = (path: string) => `http://localhost:3000/api${path}`

const defaultConfig = {
    cache: 'no-store' as 'no-store',
    headers: { 'Content-Type': 'application/json' },
}

export const login = (data: LoginRequest) =>
    fetch(sponsorbookUrl('/login'), {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        ...defaultConfig,
    })

export const createSponsor = (data: CreateSponsorRequest) =>
    fetch(sponsorbookUrl('/sponsors'), {
        method: 'POST',
        body: JSON.stringify(data),
        ...defaultConfig,
    })

export const updateSponsor = (data: Sponsor) =>
    fetch(sponsorbookUrl(`/sponsors/${data._id}`), {
        method: 'PUT',
        body: JSON.stringify(data),
        ...defaultConfig,
    })

export const getSubOrgs = () =>
    fetch(sponsorbookUrl('/sub_organizations'), defaultConfig)

export const getSponsors = () =>
    fetch(sponsorbookUrl('/sponsors'), defaultConfig)

export const getEvents = () => fetch(sponsorbookUrl('/events'), defaultConfig)
export const getTickets = () => fetch(sponsorbookUrl('/tickets'), defaultConfig)

export const getTicketsForEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}/tickets`), defaultConfig)

export const getCategories = () =>
    fetch(sponsorbookUrl('/categories'), defaultConfig)

export const getOneSponsor = (sponsorId: string) =>
    fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), defaultConfig)

export const getOneEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}`), defaultConfig)

export const deleteOneEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}`), {
        method: 'DELETE',
    })

export const createOrganization = (data: CreateOrganizationRequest) =>
    fetch(sponsorbookUrl('/organizations'), {
        method: 'POST',
        body: JSON.stringify(data),
        ...defaultConfig,
    })


export const createCategory = (data: CreateCategoryRequest) =>
    fetch(sponsorbookUrl('/categories'), {
        method: 'POST',
        body: JSON.stringify(data),
        ...defaultConfig,
    })


export const createSubOrganization = (data: CreateSubOrganizationRequest) =>
    fetch(sponsorbookUrl('/sub_organizations'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })


export const closeOneEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}/close`), {
        method: 'POST',
        ...defaultConfig,
    })

export const deleteOneSponsor = (sponsorId: string) =>
    fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), {
        method: 'DELETE',
        ...defaultConfig,
    })

export const createEvent = (data: CreateEventFormState) =>
    fetch(sponsorbookUrl('/events'), {
        method: 'POST',
        body: JSON.stringify(data),
        ...defaultConfig,
    })
