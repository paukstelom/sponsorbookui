'use client'
import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type SponsorModelProps = {
    sponsor: Sponsor | undefined
    onCancel: () => void
}

export default function SponsorsDisplayModal({
    sponsor,
    onCancel,
}: SponsorModelProps) {
    const { confirm } = Modal

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
                title=""
                centered={true}
                open={!!sponsor}
                onOk={() => console.log('pizdec')}
                onCancel={onCancel}
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
                <Form labelCol={{ span: 6 }}>
                    <h1>Main info:</h1>
                    <Form.Item label="Company Name">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.name}
                            bordered={false}
                        />
                    </Form.Item>
                    <Form.Item label="Company Number">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.companyNumber}
                            bordered={false}
                        />
                    </Form.Item>
                    <Form.Item label="Category">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.category}
                            bordered={false}
                        />
                    </Form.Item>
                    <Form.Item label="Website">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.website}
                            bordered={false}
                        />
                    </Form.Item>
                    <h1>Primary contact:</h1>
                    <Form.Item label="Name">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].name}
                            bordered={false}
                        />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].phone}
                            bordered={false}
                        />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].email}
                            bordered={false}
                        />
                    </Form.Item>
                    <h1>Other info:</h1>
                    <Form.Item label="Description">
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.description}
                            bordered={false}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
