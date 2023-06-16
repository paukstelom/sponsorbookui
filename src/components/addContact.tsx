export default function AddContact() {
    return (
        <>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value=""
                        onChange=""
                    />
                    <label htmlFor="floatingInput">Primary contact name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value=""
                        onChange=""
                    />
                    <label htmlFor="floatingInput">Primary contact email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value=""
                        onChange=""
                    />
                    <label htmlFor="floatingInput">
                        Primary contact number
                    </label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <textarea
                        style={{ height: '207px' }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@gmail.com"
                        value=""
                        onChange=""
                    />
                    <label htmlFor="floatingInput">
                        Primary contact details
                    </label>
                </div>
            </div>
        </>
    )
}
