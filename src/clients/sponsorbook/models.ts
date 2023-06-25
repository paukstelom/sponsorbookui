export type SubOrganization = {
    _id: string
    name: string
    description: string
}

export type Ticket = {
    _id: string
    name: string
    status: string
    description: string
    eventId: string
}

export type Eventer = {
    _id: string
    name: string
    
    status: string
    description: string
}

export type Sponsor = {
    _id: string
    name: string
    website: string
    companyNumber: string
    status: string
    contacts: Contact[]
    description: string
    rating: Rating
    categories: string[]
}

export type Rating = {
    info: string
    score: number
}

export type Contact = {
    name: string
    phone: string
    email: string
    info: string
}

export type Category = {
    _id: string
    name: string
    info: string
}
