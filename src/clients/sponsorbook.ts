import {
    CreateCategoryRequest,
    CreateEventFormState,
    CreateOrganizationRequest,
    CreateSponsorRequest,
    LoginRequest,
    CreateSubOrganizationRequest,
    CreateContactRequest,
} from 'sponsorbook/clients/sponsorbook/creationModels'
import { Contact, Sponsor } from './sponsorbook/models'

const sponsorbookUrl = (path: string) => `http://localhost:3000/api${path}`

const defaultConfig = ({ cookie }: CustomConfig = {}) => ({
    cookie,
    cache: 'no-store' as 'no-store',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include' as 'include',
})

export type CustomConfig = {
    cookie?: string
}

const sponsorbook = (config: CustomConfig = {}) => ({
    login: async (data: LoginRequest) =>
        fetch(sponsorbookUrl('/auth/login'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    createSponsor: async (data: CreateSponsorRequest) =>
        fetch(sponsorbookUrl('/sponsors'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    updateSponsor: async (data: Sponsor) =>
        fetch(sponsorbookUrl(`/sponsors/${data._id}`), {
            method: 'PUT',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    updateContact: async (data: Contact) =>
        fetch(sponsorbookUrl(`/contacts/${data._id}`), {
            method: 'PATCH',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    addContact: async (data: CreateContactRequest, sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}/contacts`), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    getSubOrgs: async () =>
        fetch(sponsorbookUrl('/sub_organizations'), defaultConfig(config)),

    getSponsors: async () =>
        fetch(sponsorbookUrl('/sponsors'), defaultConfig(config)),


    getContacts: async (sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}/contacts`), defaultConfig(config)),

    getEvents: async () =>
        fetch(sponsorbookUrl('/events'), defaultConfig(config)),
    getTickets: async () =>
        fetch(sponsorbookUrl('/tickets'), defaultConfig(config)),
    getTicketsForEvent: async (eventId: string) =>
        fetch(
            sponsorbookUrl(`/events/${eventId}/tickets`),
            defaultConfig(config)
        ),
    getCategories: async () =>
        fetch(sponsorbookUrl('/categories'), defaultConfig(config)),
    getOneSponsor: async (sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), defaultConfig(config)),

    getOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}`), defaultConfig(config)),

    getOneContact: async (contactId: string) =>
        fetch(sponsorbookUrl(`/contacts/${contactId}`), defaultConfig(config)),

    deleteOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}`), {
            method: 'DELETE',
            ...defaultConfig(config),
        }),
    createOrganization: async (data: CreateOrganizationRequest) =>
        fetch(sponsorbookUrl('/organizations'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    createCategory: async (data: CreateCategoryRequest) =>
        fetch(sponsorbookUrl('/categories'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    createSubOrganization: async (data: CreateSubOrganizationRequest) =>
        fetch(sponsorbookUrl('/sub_organizations'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    closeOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}/close`), {
            method: 'POST',
            ...defaultConfig(config),
        }),
    deleteOneSponsor: async (sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), {
            method: 'DELETE',
            ...defaultConfig(config),
        }),
    deleteOneContact: async (contactId: string) =>
        fetch(sponsorbookUrl(`/contacts/${contactId}`), {
            method: 'DELETE',
            ...defaultConfig(config),
        }),

    createEvent: async (data: CreateEventFormState) =>
        fetch(sponsorbookUrl('/events'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
})

export default sponsorbook
