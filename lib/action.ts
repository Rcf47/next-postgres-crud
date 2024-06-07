"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

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
    await prisma.employee.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create new employee" };
  }
  revalidatePath("/employee");
  redirect("/employee");
};

export const getEmployeeList = async (query: string) => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createAt: true,
      },
      orderBy: {
        createAt: "desc",
      },
    });
    return employees;
  } catch (error) {
    throw new Error(`Failed to get employee list: ${error}`);
  }
};

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });
    return employee;
  } catch (error) {
    throw new Error(`Failed to get employee by id: ${error}`);
  }
};
