import AddOrganizationForm from './addOrganizationForm'
import AddSponsorCategoryForm from './addSponsorCategoryForm'
import AddSubOrganizationFrom from './addSubOrganizationForm'

export default function DevPageComponent() {
    return (
        <div style={{ width: '600px' }}>
            <AddOrganizationForm />
            <AddSponsorCategoryForm />
            <AddSubOrganizationFrom />
        </div>
    )
}
