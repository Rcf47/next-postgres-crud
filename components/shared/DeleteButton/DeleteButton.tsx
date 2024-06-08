"use client";

import { deleteEmployee } from "@/lib/action";
import { useFormState } from "react-dom";

const DeleteButton = ({ id }: { id: string }) => {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id);
  const [state, formActions] = useFormState(deleteEmployeeWithId, null);
  return (
    <form action={formActions}>
      <button className="btn btn-error">Delete</button>
    </form>
  );
};

export default DeleteButton;
