import EditForm from "@/components/shared/EditForm/EditForm";

const UpdateEmployeePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(id);
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Employee</h1>
      <EditForm />
    </div>
  );
};

export default UpdateEmployeePage;
