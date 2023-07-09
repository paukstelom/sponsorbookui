import {
    CreateCategoryRequest,
    CreateContactRequest,
    CreateEventRequest,
    CreateOrganizationRequest,
    CreateSponsorRequest,
    CreateSubOrganizationRequest,
    
} from 'sponsorbook/clients/sponsorbook/creationModels'
import { Contact, Sponsor } from './sponsorbook/models'
import { LoginRequest } from 'sponsorbook/utils/authentication'

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

    // ADD REQUESTS

    addSponsor: async (data: CreateSponsorRequest) =>
        fetch(sponsorbookUrl('/sponsors'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    addContact: async (data: CreateContactRequest, sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}/contacts`), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    addEvent: async (data: CreateEventRequest) =>
        fetch(sponsorbookUrl('/events'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    addOrganization: async (data: CreateOrganizationRequest) =>
        fetch(sponsorbookUrl('/organizations'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    addCategory: async (data: CreateCategoryRequest) =>
        fetch(sponsorbookUrl('/categories'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),
    addSubOrg: async (data: CreateSubOrganizationRequest) =>
        fetch(sponsorbookUrl('/sub_organizations'), {
            method: 'POST',
            body: JSON.stringify(data),
            ...defaultConfig(config),
        }),

    // UPDATE REQUESTS

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

    // GET ALL REQUESTS

    getSubOrgs: async () =>
        fetch(sponsorbookUrl('/sub_organizations'), defaultConfig(config)),

    getSponsors: async () =>
        fetch(sponsorbookUrl('/sponsors'), defaultConfig(config)),

    getEvents: async () =>
        fetch(sponsorbookUrl('/events'), defaultConfig(config)),

    getTickets: async () =>
        fetch(sponsorbookUrl('/tickets'), defaultConfig(config)),

    getCategories: async () =>
        fetch(sponsorbookUrl('/categories'), defaultConfig(config)),

    // GET SPECIFIC REQUESTS

    getContactsForSponsor: async (sponsorId: string) =>
        fetch(
            sponsorbookUrl(`/sponsors/${sponsorId}/contacts`),
            defaultConfig(config)
        ),

    getTicketsForEvent: async (eventId: string) =>
        fetch(
            sponsorbookUrl(`/events/${eventId}/tickets`),
            defaultConfig(config)
        ),

    // GET SINGLE REQUESTS

    getOneSponsor: async (sponsorId: string) =>
        fetch(sponsorbookUrl(`/sponsors/${sponsorId}`), defaultConfig(config)),

    getOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}`), defaultConfig(config)),

    getOneContact: async (contactId: string) =>
        fetch(sponsorbookUrl(`/contacts/${contactId}`), defaultConfig(config)),

    // DELETE REQUESTS

    deleteOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}`), {
            method: 'DELETE',
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

    // OTHER REQUESTS

    closeOneEvent: async (eventId: string) =>
        fetch(sponsorbookUrl(`/events/${eventId}/close`), {
            method: 'POST',
            ...defaultConfig(config),
        }),
})

export default sponsorbook
