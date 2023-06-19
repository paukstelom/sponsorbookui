import { Sponsor } from 'sponsorbook/components/sponsor'
import SponsorsTable from 'sponsorbook/components/sponsorsTable'
import { getSponsors, getSubOrgs } from 'sponsorbook/clients/sponsorbook'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import {
    Breadcrumb,
    Button,
    Form,
    FormInstance,
    Input,
    Layout,
    Menu,
    Modal,
    Select,
} from 'antd'
import Navbar from 'sponsorbook/components/navbar'
import { useState } from 'react'
import React from 'react'
import AddSponsorModal from 'sponsorbook/components/addSponsorModal'

export default async function Sponsors() {
    const data = await getSponsors()
    const sponsors = (await data.json()) as Sponsor[]

    return (
        <>
            <div className="site-layout-content">
                <AddSponsorModal />
                <SponsorsTable sponsors={sponsors} />
            </div>
        </>
    )
}
