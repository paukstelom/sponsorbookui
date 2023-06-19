'use client'
import { Button, Drawer, Modal, Table, Tag } from 'antd'
import { useState } from 'react'
import React from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'
import { stat } from 'fs'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsTable({ sponsors }: SponsorTableProps) {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()

    const { confirm } = Modal
    const columns = [
        { title: 'Company name', dataIndex: 'companyName', key: 'companyName' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color: string = ''
                if (status === 'Available') {
                    color = 'green'
                } else if (status === 'Waiting') {
                    color = 'yellow'
                } else if (status === 'Not available') {
                    color = 'volcano'
                }
                return (
                    <Tag color={color} key={status}>
                        {status}
                    </Tag>
                )
            },
        },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Number', dataIndex: 'number', key: 'number' },
        { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    ]

    const dataSource = sponsors.map((sponsor) => ({
        sponsor: sponsor,
        companyName: sponsor.name,
        category: sponsor.category,
        status: sponsor.status,
        email: sponsor.contacts[0].email,
        number: sponsor.contacts[0].phone,
        rating: sponsor.rating.score,
    }))

    const showDeleteConfirm = () => {
        confirm({
            title: `Warning!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure delete ${selectedSponsor?.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteOneSponsor(selectedSponsor!._id)
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            },
        })
    }

    return (
        <>
            <Modal
                width="90%"
                title={selectedSponsor?.name}
                centered={true}
                open={!!selectedSponsor}
                onOk={() => console.log('pizdec')}
                onCancel={() => setSelectedSponsor(undefined)}
                footer={[
                    <Button key="connect">Connect</Button>,
                    <Button key="addContact">Add contact</Button>,
                    <Button key="editDetails">Edit details</Button>,
                    <Button
                        key="deleteSponsor"
                        onClick={showDeleteConfirm}
                        type="dashed"
                    >
                        Delete
                    </Button>,
                ]}
            >
                <div style={{ height: '700px' }}>
                    <h1>Company number: {selectedSponsor?.companyNumber}</h1>
                    <h1>Category: {selectedSponsor?.category}</h1>
                    <h1>Website: {selectedSponsor?.website}</h1>
                    <h1>Contact details:</h1>
                    <h1>Name: {selectedSponsor?.contacts[0].name}</h1>
                    <h1>Phone: {selectedSponsor?.contacts[0].phone}</h1>
                    <h1>Email: {selectedSponsor?.contacts[0].email}</h1>
                    <h1>Other info:</h1>
                    <h1>Rating {selectedSponsor?.rating.score}</h1>
                    <h1>Desciprtion {selectedSponsor?.description}</h1>
                </div>
            </Modal>
            <Table
                style={{ height: '400px' }}
                scroll={{ y: 400 }}
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
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
