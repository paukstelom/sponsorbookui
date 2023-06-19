'use client'
import { Button, Form, FormInstance, Input, Modal, Select, Table } from 'antd'
import SponsorLine, { Sponsor } from './sponsor'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import React from 'react'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()

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
        sponsor: sponsor,
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
            <Modal
                width="40%"
                title={selectedSponsor?.name}
                centered={true}
                open={!!selectedSponsor}
                onOk={() => console.log('pizdec')}
                onCancel={() => setSelectedSponsor(undefined)}
                footer={[
                    <Button key="connect">Connect</Button>,
                    <Button key="addContact">Add contact</Button>,
                    <Button key="editDetails">Edit details</Button>,
                    <Button key="delete">Delete</Button>,
                ]}
            >
                <h6>Company number: {selectedSponsor?.companyNumber}</h6>
                <h6>Category: {selectedSponsor?.category}</h6>
                <h6>Website: {selectedSponsor?.website}</h6>
                <h5>Contact details:</h5>
                <h6>Name: {selectedSponsor?.contacts[0].name}</h6>
                <h6>Phone: {selectedSponsor?.contacts[0].phone}</h6>
                <h6>Email: {selectedSponsor?.contacts[0].email}</h6>
                <h5>Other info:</h5>
                <h6>Rating {selectedSponsor?.rating.score}</h6>
                <h6>Desciprtion {selectedSponsor?.description}</h6>
            </Modal>
            <Table
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            setSelectedSponsor(record.sponsor)
                        }, // click row
                        onDoubleClick: (event) => {}, // double click row
                        onContextMenu: (event) => {}, // right button click row
                        onMouseEnter: (event) => {}, // mouse enter row
                        onMouseLeave: (event) => {}, // mouse leave row
                    }
                }}
                onHeaderRow={(columns, index) => {
                    return {
                        onClick: () => {}, // click header row
                    }
                }}
            ></Table>
        </>
    )
}
