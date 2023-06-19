'use client'
import { useFormik } from 'formik'
import { createOrganization } from 'sponsorbook/clients/sponsorbook'
import AddOrganizationForm from 'sponsorbook/components/addOrganizationForm'

export type CreateOrganizationFormState = {
    name: string
    user_email: string
}

export default function DevPage() {
    return (
        <>
            <AddOrganizationForm />
        </>
    )
}
