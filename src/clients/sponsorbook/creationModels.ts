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