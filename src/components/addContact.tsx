import { useState } from 'react'
import { Contact } from 'sponsorbook/app/sponsors/new/page'

export default function AddContact({
    setContact,
    contact,
}: {
    setContact: (x: Contact) => void
    contact: Contact
}) {
    return (
        <>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value={contact.name}
                        onChange={(e) =>
                            setContact({ ...contact, name: e.target.value })
                        }
                    />
                    <label htmlFor="floatingInput">Contact name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value={contact.email}
                        onChange={(e) =>
                            setContact({ ...contact, email: e.target.value })
                        }
                    />
                    <label htmlFor="floatingInput">Contact email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value={contact.phone}
                        onChange={(e) =>
                            setContact({ ...contact, phone: e.target.value })
                        }
                    />
                    <label htmlFor="floatingInput">Contact number</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <textarea
                        style={{ height: '207px' }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value={contact.details}
                        onChange={(e) =>
                            setContact({ ...contact, details: e.target.value })
                        }
                    />
                    <label htmlFor="floatingInput">Contact details</label>
                </div>
            </div>
        </>
    )
}
