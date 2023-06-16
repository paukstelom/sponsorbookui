'use client'

import { headers } from 'next/dist/client/components/headers'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { json } from 'stream/consumers'
import AddContact from 'sponsorbook/components/addContact'

export type CreateSponsorFormState = {
    email: string
    name: string
    phone: string
    rating: string
    category: string
}

export default function CreateSponsor() {
    const [state, setState] = useState<CreateSponsorFormState>({
        email: '',
        name: '',
        phone: '',
        rating: '1',
        category: '1',
    })

    const router = useRouter()

    const onSubmit = async () => {
        await fetch('http://127.0.0.1:8000/sponsors', {
            method: 'post',
            body: JSON.stringify(state),
            headers: { 'content-type': 'application/json' },
        })
        await router.push('/sponsors')
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
                                value=""
                                onChange=""
                            />
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
                    <h4 className="mb-4">Contacts</h4>
                    <AddContact />
                </div>
                <div className="mt-1">
                    <button
                        type="submit"
                        style={{ width: '10%' }}
                        className="btn btn-dark rounded"
                        onClick=""
                    >
                        Add
                    </button>
                </div>

                <div className="row mt-5">
                    <h4 className="mb-4">Other</h4>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                value=""
                                onChange=""
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
                                value=""
                                onChange=""
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
                                value=""
                                onChange=""
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
