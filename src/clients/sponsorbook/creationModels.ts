import { Contact, Rating } from 'sponsorbook/clients/sponsorbook/models'

export type CreateSponsorRequest = {
    companyNumber: string
    contacts: Contact[]
    website: string
    rating: Rating
    name: string
    category: string
    description: string
}

export type CreateContactRequest = {
    sponsor_id: string
    name: string
    email: string
    phone: string
    details: string
}


export type CreateOrganizationRequest = {
    name: string
    user_email: string
}

export type CreateCategoryRequest = {
    name: string
    info: string
}

export type CreateSubOrganizationRequest = {
    name: string
    description: string
    organization_id: string
}

export type CreateEventRequest = {
    name: string
    description: string
    sub_organization_ids: string[]
}
