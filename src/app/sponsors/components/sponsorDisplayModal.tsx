'use client'
import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export type SponsorModelProps = {
    sponsor: Sponsor | undefined
    onCancel: () => void
}

export default function SponsorsDisplayModal({
    sponsor,
    onCancel,
}: SponsorModelProps) {
    const { confirm } = Modal
    const [editMode, setEditMode] = useState(false)

    const [form] = Form.useForm()

    const exitModal = () => {
        onCancel()
        setEditMode(false)
    }

    const showDeleteConfirm = () => {
        confirm({
            title: `Warning!`,
            icon: <ExclamationCircleFilled />,
            content: `Are you sure delete ${sponsor?.name}?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                sponsorbook().deleteOneSponsor(sponsor!._id)
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            },
        })
    }

    const saveDetails = async (values: any) => {
        setEditMode(false)
        console.log(values)
        const data = {
            _id: sponsor?._id,
            companyNumber: values.companyNumber,
            name: values.companyName,
            website: values.website,
            status: values.status,
            categories: values.categories,
            contacts: [
                {
                    name: values.contactName,
                    phone: values.phone,
                    email: values.email,
                    info: 'DETAILS EDITING NOT IMPLEMENTED',
                },
            ],
            description: values.description,
            rating: {
                info: 'RATING INFO NOT IMPLEMENTED',
                score: 2.5,
            },
        } as Sponsor
        await sponsorbook().updateSponsor(data)
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
                onCancel={exitModal}
                footer={[
                    <Button key="connect">Connect</Button>,
                    <Button key="addContact">Add contact</Button>,
                    editMode ? (
                        <Button onClick={() => form.submit()} key="saveDetails">
                            Save
                        </Button>
                    ) : (
                        <Button
                            key="editDetails"
                            onClick={() => setEditMode(true)}
                        >
                            Edit Details
                        </Button>
                    ),
                    <Button
                        key="deleteSponsor"
                        onClick={showDeleteConfirm}
                        type="dashed"
                    >
                        Delete
                    </Button>,
                ]}
            >
                <Form labelCol={{ span: 6 }} form={form} onFinish={saveDetails}>
                    <h1>Main info:</h1>
                    <Form.Item
                        label="Company Name"
                        name="companyName"
                        initialValue={sponsor?.name}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.name}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Company Number"
                        name="companyNumber"
                        initialValue={sponsor?.companyNumber}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.companyNumber}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="category"
                        initialValue={sponsor?.categories}
                    >
                        <Select
                            style={{ fontSize: '30px' }}
                            value={sponsor?.categories}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Website"
                        name="website"
                        initialValue={sponsor?.website}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.website}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <h1>Primary contact:</h1>
                    <Form.Item
                        label="Name"
                        name="contactName"
                        initialValue={sponsor?.contacts[0].name}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].name}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        initialValue={sponsor?.contacts[0].phone}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].phone}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        initialValue={sponsor?.contacts[0].email}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.contacts[0].email}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                    <h1>Other info:</h1>
                    <Form.Item
                        label="Description"
                        name="description"
                        initialValue={sponsor?.description}
                    >
                        <Input
                            style={{ fontSize: '30px' }}
                            value={sponsor?.description}
                            bordered={false}
                            disabled={!editMode}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
