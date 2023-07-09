'use client'
import { PageContainer, ProCard } from '@ant-design/pro-components'
import AddOrganizationForm from './addOrganizationForm'
import AddSponsorCategoryForm from './addSponsorCategoryForm'
import AddSubOrganizationFrom from './addSubOrganizationForm'

export default function DevPageComponent() {
    return (<>
    
            <AddOrganizationForm />
            <AddSponsorCategoryForm />
            <AddSubOrganizationFrom />
            </>
    )
       
}
