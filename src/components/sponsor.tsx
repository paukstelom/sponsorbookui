export type Sponsor = {
    id: string
    name: string
    email: string
    phone: string
    rating: string
    category: string
}

export type SponsorCardProps = {
    sponsor: Sponsor
}

export default function SponsorLine({ sponsor }: SponsorCardProps) {
    return (
        <>
            <td className="text-center">{sponsor.name}</td>
            <td className="text-center">{sponsor.category}</td>
            <td className="text-center">
                <span className="badge badge-success rounded-pill d-inline bg-success">
                    Available
                </span>
            </td>
            <td className="text-center">{sponsor.email}</td>
            <td className="text-center">{sponsor.phone}</td>
            <td className="text-center">🔥🔥🔥💩💩</td>
        </>
    )
}
