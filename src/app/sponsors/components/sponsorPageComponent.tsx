import { Category, Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import AddSponsorModal from './sponsorNewModal'
import SponsorsTable from './sponsorsTable'

export type SponsorPageComponentProps = {
    sponsors: Sponsor[]
    categories: Category[]
}

export default function SponsorPageComponent({
    sponsors,
    categories,
}: SponsorPageComponentProps) {
    return (
        <>
            <div className="site-layout-content">
                <AddSponsorModal categories={categories} />
                <SponsorsTable sponsors={sponsors} />
            </div>
        </>
    )
}
