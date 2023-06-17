import SponsorLine, { Sponsor } from './sponsor'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    return (
        <>
            <div
                className="table-responsive mt-4 rounded-4"
                style={{ height: '500px' }}
            >
                <table className="table table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-center" scope="col">
                                Name
                            </th>
                            <th className="text-center" scope="col">
                                Category
                            </th>
                            <th className="text-center" scope="col">
                                Status
                            </th>
                            <th className="text-center" scope="col">
                                Email
                            </th>
                            <th className="text-center" scope="col">
                                Number
                            </th>
                            <th className="text-center" scope="col">
                                Score
                            </th>
                            <th className="text-align-left" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sponsors.map((Sponsor) => (
                            <tr key={Sponsor._id}>
                                <SponsorLine sponsor={Sponsor} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
