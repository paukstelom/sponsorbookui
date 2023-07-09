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
    subOrgnaziations: SubOrganization[]
    status: string
    info: string
}

export type Sponsor = {
    _id: string
    name: string
    website: string
    companyNumber: string
    status: string
    description: string
    rating: Rating
    categories: string[]
}

export type Rating = {
    info: string
    score: number
}

export type Contact = {
    _id: string
    sponsorId: string
    name: string
    phone: string
    email: string
    details: string
}

export type Category = {
    _id: string
    name: string
    info: string
}
