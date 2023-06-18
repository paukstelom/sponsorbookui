'use client'

import { useRouter } from 'next/navigation'
import {
    CreateEventFormState,
    SubOrganization,
} from 'sponsorbook/app/events/new/page'
import { createEvent } from 'sponsorbook/clients/sponsorbook'
import { useFormik } from 'formik'

export default function NewEventComponent({
    subOrganizations,
}: {
    subOrganizations: SubOrganization[]
}) {
    const router = useRouter()

    const formik = useFormik<CreateEventFormState>({
        initialValues: {
            name: '',
            description: '',
            sub_organization_ids: [],
        },
        onSubmit: async () => {
            await createEvent(formik.values)
            router.push('/events')
        },
    })

    const addSubOrg = (id: string) => {
        formik.setValues({
            ...formik.values,
            sub_organization_ids: [...formik.values.sub_organization_ids, id],
        })
    }

    const removeSubOrg = (id: string) => {
        formik.setValues({
            ...formik.values,
            sub_organization_ids: formik.values.sub_organization_ids.filter(
                (x) => x !== id
            ),
        })
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="container-responsive">
                <h2 className="p-5">Create new event</h2>
                <div className="row">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe UAB"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="floatingInput">Event name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                style={{ height: '200px' }}
                                className="form-control"
                                id="description"
                                name={'description'}
                                placeholder="Your description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="floatingInput">Description</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <h4>Faculties: </h4>
                        {subOrganizations.map((subOrganization) => (
                            <div
                                className="form-check"
                                key={subOrganization._id}
                            >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id=""
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            addSubOrg(subOrganization._id)
                                        } else {
                                            removeSubOrg(subOrganization._id)
                                        }
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    {subOrganization.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center mt-3">
                    <button
                        style={{ width: '20%' }}
                        type="submit"
                        className="btn btn-dark rounded"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    )
}
