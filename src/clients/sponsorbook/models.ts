export type SubOrganization = {
    _id: string
    name: string
    description: string
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
    status: string
    description: string
}

export type Rating = {
    info: string
    score: string
}

export type Contact = {
    name: string
    phone: string
    email: string
    info: string
}
