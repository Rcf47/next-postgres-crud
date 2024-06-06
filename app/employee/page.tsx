import Link from "next/link";

const Employee = async () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bol">
          Next js 14 CRUD Create Read Update Delete <br />
          Prisma PostgreSQL | Tailwind DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <table className="table table-zebra">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone number</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6">Vadim Cherepanov</td>
              <td className="py-3 px-6">xenos26@gmail.com</td>
              <td className="py-3 px-6">123456</td>
              <td className="py-3 px-6">Date</td>
              <td className="flex justify-center gap-1 py-3">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
