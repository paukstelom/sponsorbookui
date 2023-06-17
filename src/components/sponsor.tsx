import Link from 'next/link'
import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'

export type Sponsor = {
    _id: string
    companyNumber: string
    contacts: Contact[]
    website: string
    rating: Rating
    name: string
    category: string
    description: string
}

export type SponsorCardProps = {
    sponsor: Sponsor
}

export default function SponsorLine({ sponsor }: SponsorCardProps) {
    console.log(sponsor)
    return (
        <>
            <td className="text-center">{sponsor.name}</td>
            <td className="text-center">{sponsor.category}</td>
            <td className="text-center">
                <span className="badge badge-success rounded-pill d-inline bg-success">
                    Available
                </span>
            </td>
            <td className="text-center">{sponsor.contacts[0].email}</td>
            <td className="text-center">{sponsor.contacts[0].phone}</td>
            <td className="text-center">🔥🔥🔥💩💩</td>
            <td className="text-align-right">
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    ></button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Connect
                            </a>
                        </li>
                        <li>
                            <Link
                                className="dropdown-item"
                                href={`/sponsors/${sponsor._id}`}
                            >
                                View
                            </Link>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Edit
                            </a>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                type="submit"
                                onClick={}
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </td>
        </>
    )
}
