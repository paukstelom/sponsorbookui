import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import AddSponsorModal from './sponsorNewModal'
import SponsorsTable from './sponsorsTable'

export type SponsorPageComponentProps = {
    sponsors: Sponsor[]
}

export default function SponsorPageComponent({
    sponsors,
}: SponsorPageComponentProps) {
    return (
        <>
            <div className="site-layout-content">
                <AddSponsorModal />
                <SponsorsTable sponsors={sponsors} />
            </div>
        </>
    )
}
