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
export type CreateOrganizationRequest = {
    name: string
    user_email: string
}

export type LoginRequest = {
    email: string
    password: string
}

export type CreateCategoryRequest = {
    name: string
    info: string
}

export type CreateSubOrganizationRequest = {
    name: string
    description: string
    organization_id: 'organization_id_goes_here'
}

export type CreateEventFormState = {
    name: string
    description: string
    sub_organization_ids: string[]
}
