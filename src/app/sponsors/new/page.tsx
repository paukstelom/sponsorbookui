"use client";

import { headers } from "next/dist/client/components/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { json } from "stream/consumers";

export type CreateSponsorFormState = {
  email: string;
  name: string;
  phone: string;
  rating: string;
  category: string;
};

export default function CreateSponsor() {
  const [state, setState] = useState<CreateSponsorFormState>({
    email: "",
    name: "",
    phone: "",
    rating: "1",
    category: "1",
  });

  const router = useRouter();

  const onSubmit = async () => {
    await fetch("http://127.0.0.1:8000/sponsors", {
      method: "post",
      body: JSON.stringify(state),
      headers: { "content-type": "application/json" },
    });
    await router.push("/sponsors");
  };

  return (
    <>
      <div className="container-responsive">
        <div className="row g-2">
          <h2 className="mb-3 p-5">Add new sponsor</h2>
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="John Doe UAB"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              <label htmlFor="floatingInput">Sponsor name</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="name@gmail.com"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="+37061095822"
                value={state.phone}
                onChange={(e) => setState({ ...state, phone: e.target.value })}
              />
              <label htmlFor="floatingInput">Number</label>
            </div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelectGrid"
                value={state.category}
                onChange={(e) =>
                  setState({ ...state, category: e.target.value })
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
          <div className="col-md">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelectGrid"
                value={state.rating}
                onChange={(e) => setState({ ...state, rating: e.target.value })}
              >
                <option selected value="0">
                  🔥🔥🔥🔥🔥
                </option>
                <option value="1">🔥🔥🔥🔥💩</option>
                <option value="2">🔥🔥🔥💩💩</option>
                <option value="3">🔥🔥💩💩💩</option>
                <option value="4">🔥💩💩💩💩</option>
                <option value="5">☠️☠️☠️☠️☠️</option>
              </select>
              <label htmlFor="floatingSelectGrid">Score</label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark rounded mt-4"
            onClick={onSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
