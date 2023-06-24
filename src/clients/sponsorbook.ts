import { LoginFormState } from 'sponsorbook/app/login/page'
import {
    CreateCategoryRequest,
    CreateEventFormState,
    CreateOrganizationRequest,
    CreateSponsorRequest,
    CreateSubOrganizationRequest,
} from 'sponsorbook/clients/sponsorbook/creationModels'
import { Sponsor } from './sponsorbook/models'

const sponsorbookUrl = (path: string) => `http://localhost:3000/api${path}`

export const login = (data: LoginFormState) =>
    fetch(sponsorbookUrl('/login'), {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })

export const createSponsor = (data: CreateSponsorRequest) =>
    fetch(sponsorbookUrl('/sponsors'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })

export const updateSponsor = (data: Sponsor) =>
    fetch(sponsorbookUrl(`/sponsors/${data._id}`), {
        method: 'PUT',
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

export const getTickets = () =>
    fetch(sponsorbookUrl('/tickets'), {
        next: { revalidate: 0 },
    })

export const getTicketsForEvent = (eventId: string) =>
    fetch(sponsorbookUrl(`/events/${eventId}/tickets`), {
        next: { revalidate: 0 },
    })


export const getCategories = () =>
    fetch(sponsorbookUrl('/categories'), {
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

export const createOrganization = (data: CreateOrganizationRequest) =>
    fetch(sponsorbookUrl('/organizations'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })


export const createCategory = (data: CreateCategoryRequest) =>
    fetch(sponsorbookUrl('/categories'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
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
    })

export const deleteOneSponsor = (sponsorId: string) =>
    fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), {
        method: 'DELETE',
    })


export const createEvent = (data: CreateEventFormState) =>
    fetch(sponsorbookUrl('/events'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
