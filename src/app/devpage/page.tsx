'use client'
import { useFormik } from 'formik'
import { createOrganization } from 'sponsorbook/clients/sponsorbook'

export type CreateOrganizationFormState = {
    name: string
    user_email: string
}

export default function DevPage() {
    const formik = useFormik<CreateOrganizationFormState>({
        initialValues: {
            name: '',
            user_email: '',
        },
        onSubmit: async () => {
            await createOrganization(formik.values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '400px' }}>
            <h1 className="p-4">This is devs page</h1>
            <div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        name="name"
                        placeholder="name@gmail.com"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    ></input>
                    <label htmlFor="floatingInput">Organization name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        name="user_email"
                        placeholder="name@gmail.com"
                        value={formik.values.user_email}
                        onChange={formik.handleChange}
                    ></input>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <button type="submit" className="btn btn-dark rounded">
                    Add new organization
                </button>
            </div>
        </form>
    )
}
