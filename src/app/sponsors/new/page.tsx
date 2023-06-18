'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AddContact from 'sponsorbook/components/addContact'
import {
    createSponsor,
    CreateSponsorRequest,
} from 'sponsorbook/clients/sponsorbook'

export type Rating = {
    score: string
    info: string
}

export type Contact = {
    name: string
    email: string
    phone: string
    details: string
}

export default function CreateSponsor() {
    const [state, setState] = useState<CreateSponsorRequest>({
        companyNumber: '123',
        name: '123',
        website: '123.com',
        contacts: [{ email: '123', name: '123', phone: '123', details: '123' }],
        rating: { score: '1', info: '123' },
        category: '1',
        description: '123',
    })

    const router = useRouter()

    const setRating = (newRating: Rating) =>
        setState({ ...state, rating: newRating })

    const onSubmit = async () => {
        await createSponsor(state)
        router.push('/sponsors')
    }

    return (
        <>
            <div className="container-responsive">
                <div className="row">
                    <h2 className="p-5">Add new sponsor</h2>
                    <h4 className="mb-4">Main details</h4>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@gmail.com"
                                value={state.companyNumber}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        companyNumber: e.target.value,
                                    })
                                }
                            ></input>
                            <label htmlFor="floatingInput">Company code</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="John Doe UAB"
                                value={state.name}
                                onChange={(e) =>
                                    setState({ ...state, name: e.target.value })
                                }
                            />
                            <label htmlFor="floatingInput">Sponsor name</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="John Doe UAB"
                                value={state.website}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        website: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="floatingInput">Website</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                value={state.category}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        category: e.target.value,
                                    })
                                }
                            >
                                <option selected>Food</option>
                                <option value="Toys">Toys</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Condoms">Condoms</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Category</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-7">
                    <h4 className="mb-4">Contact details</h4>
                    <AddContact
                        contact={state.contacts[0]}
                        setContact={(contact) =>
                            setState({
                                ...state,
                                contacts: [contact],
                            })
                        }
                    />
                </div>

                <div className="row mt-5">
                    <h4 className="mb-4">Other</h4>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                value={state.rating.score}
                                onChange={(e) =>
                                    setRating({
                                        ...state.rating,
                                        score: e.target.value,
                                    })
                                }
                            >
                                <option selected>Unspecified</option>
                                <option value="5">5/5</option>
                                <option value="4">4/5</option>
                                <option value="3">3/5</option>
                                <option value="2">2/5</option>
                                <option value="1">1/5</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Rating</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                style={{ height: '150px' }}
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@gmail.com"
                                value={state.rating.info}
                                onChange={(e) =>
                                    setRating({
                                        ...state.rating,
                                        info: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="floatingInput">
                                Rating details
                            </label>
                        </div>
                    </div>
                    <div className="col-md">
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
