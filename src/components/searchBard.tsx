import Link from 'next/link'

export default function SearchBar() {
    return (
        <>
            <form className="d-flex p-5" role="search">
                <button className="btn btn-dark rounded-4">Search</button>
                <input
                    className="form-control mx-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <Link href="/sponsors/new">
                    <button className="btn btn-dark rounded-4">Create</button>
                </Link>
            </form>
        </>
    )
}
