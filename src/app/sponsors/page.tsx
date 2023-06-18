import SearchBar from 'sponsorbook/components/searchBard'
import { Sponsor } from 'sponsorbook/components/sponsor'
import SponsorsTable from 'sponsorbook/components/sponsorsTable'
import { getSponsors, getSubOrgs } from 'sponsorbook/clients/sponsorbook'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Breadcrumb, Layout, Menu } from 'antd'
import Navbar from 'sponsorbook/components/navbar'

export default async function Sponsors() {
    const data = await getSponsors()
    const sponsors = (await data.json()) as Sponsor[]

    return (
        <>
            <div className="site-layout-content">
                <SponsorsTable sponsors={sponsors} />
            </div>
        </>
    )
}
