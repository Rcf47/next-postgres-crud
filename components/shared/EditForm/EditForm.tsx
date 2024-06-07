const EditForm = () => {
  return (
    <div>
      <form>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full name
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
            type="text"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Email..."
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
            placeholder="Phone Number..."
          />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditForm;
