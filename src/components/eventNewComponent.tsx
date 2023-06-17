'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
    CreateEventFormState,
    SubOrganization,
} from 'sponsorbook/app/events/new/page'
import { createEvent } from 'sponsorbook/clients/sponsorbook'

export default function NewEventComponent({
    subOrganizations,
}: {
    subOrganizations: SubOrganization[]
}) {
    const [state, setState] = useState<CreateEventFormState>({
        name: '',
        description: '',
        sub_organization_ids: [],
    })

    const router = useRouter()

    const onSubmit = async () => {
        await createEvent(state)
        router.push('/events')
    }

    const addSubOrg = (id: string) => {
        setState({
            ...state,
            sub_organization_ids: [...state.sub_organization_ids, id],
        })
    }

    const removeSubOrg = (id: string) => {
        setState({
            ...state,
            sub_organization_ids: state.sub_organization_ids.filter(
                (x) => x !== id
            ),
        })
    }

    return (
        <>
            <div className="container-responsive">
                <h2 className="p-5">Create new event</h2>
                <div className="row">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="John Doe UAB"
                                value={state.name}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="floatingInput">Event name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                style={{ height: '200px' }}
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@gmail.com"
                                value={state.description}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        description: e.target.value,
                                    })
                                }
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
                        onClick={onSubmit}
                    >
                        Create
                    </button>
                </div>
            </div>
        </>
    )
}
