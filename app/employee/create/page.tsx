"use client";

import { useFormState } from "react-dom";

const CreateEmployeePage = () => {
  const [state, formAction] = useFormState();
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Employee</h1>
      <div>
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Full name ..."
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Email ..."
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Phone number ..."
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
