'use client'
import { Table } from 'antd'
import SponsorLine, { Sponsor } from './sponsor'
import { ColumnsType } from 'antd/es/table'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    const columns = [
        { title: 'Company name', dataIndex: 'companyName', key: 'companyName' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Number', dataIndex: 'number', key: 'number' },
        { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    ]

    const dataSource = sponsors.map((sponsor) => ({
        key: sponsor._id,
        companyName: sponsor.name,
        category: sponsor.category,
        status: 'Available',
        email: sponsor.contacts[0].email,
        number: sponsor.contacts[0].phone,
        rating: sponsor.rating.score,
    }))

    // const dataSource = [
    //     {
    //         key: '1',
    //         companyName: 'Redbull',
    //         category: 'Drinks',
    //         status: 'Available',
    //         email: 'info@redbull.com',
    //         number: '+370000000',
    //         rating: '5/5',
    //     },
    // ]

    return (
        <>
            <Table dataSource={dataSource} columns={columns}></Table>
        </>
    )
}
