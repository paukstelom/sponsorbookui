'use client'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type SponsorModelProps = {
    sponsor: Sponsor | undefined
}

export default function SponsorsDisplayModal({ sponsor }: SponsorModelProps) {
    const { confirm } = Modal
    const [selectedSponsor, setSelectedSponsor] = useState(sponsor)

    const showDeleteConfirm = () => {
        confirm({
            title: `Warning!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure delete ${sponsor?.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteOneSponsor(sponsor!._id)
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
                style={{ height: '900px' }}
                width="90%"
                title={sponsor?.name}
                centered={true}
                open={!!selectedSponsor}
                onOk={() => console.log('pizdec')}
                onCancel={() => {
                    setSelectedSponsor(undefined)
                }}
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
                    <h6>Company number: {sponsor?.companyNumber}</h6>
                    <h6>Category: {sponsor?.category}</h6>
                    <h6>Website: {sponsor?.website}</h6>
                    <h5>Contact details:</h5>
                    <h6>Name: {sponsor?.contacts[0].name}</h6>
                    <h6>Phone: {sponsor?.contacts[0].phone}</h6>
                    <h6>Email: {sponsor?.contacts[0].email}</h6>
                    <h5>Other info:</h5>
                    <h6>Rating {sponsor?.rating.score}</h6>
                    <h6>Desciprtion {sponsor?.description}</h6>
                </div>
            </Modal>
        </>
    )
}
