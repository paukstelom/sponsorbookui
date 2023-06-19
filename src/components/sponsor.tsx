'use client'
import { Button, Modal } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Contact, Rating } from 'sponsorbook/app/sponsors/new/page'
import { deleteOneSponsor } from 'sponsorbook/clients/sponsorbook'

export type Sponsor = {
    _id: string
    companyNumber: string
    contacts: Contact[]
    website: string
    rating: Rating
    name: string
    category: string
    description: string
}

export type SponsorCardProps = {
    sponsor: Sponsor
}

export default function SponsorLine({ sponsor }: SponsorCardProps) {
    const router = useRouter()

    const onSubmit = async () => {
        await deleteOneSponsor(sponsor._id)

        router.refresh()
    }

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
