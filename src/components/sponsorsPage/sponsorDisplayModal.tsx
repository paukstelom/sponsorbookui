'use client'
import { Button, Modal, Table } from 'antd'
import { useState } from 'react'
import React from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type SponsorTableProps = {
    sponsors: Sponsor[]
}

export default function SponsorsDisplayModal() {
    const [selectedSponsor, setSelectedSponsor] = useState<Sponsor>()

    const { confirm } = Modal

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
                    <Button
                        key="deleteSponsor"
                        onClick={showDeleteConfirm}
                        type="dashed"
                    >
                        Delete
                    </Button>,
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
        </>
    )
}
