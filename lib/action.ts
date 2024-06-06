"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const EmployeeSchema = z.object({
  name: z.string().min(6, { message: "Name must be at least 6 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" }),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    console.log("success");
  } catch (error) {
    return { message: "Failed to create new employee" };
  }
  revalidatePath("/employee");
  redirect("/employee");
};
