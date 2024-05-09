"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { deleteResume, insertResume, updateResumeTitle } from "./data/resume";
import { revalidatePath } from "next/cache";

export async function createResume() {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      message: "Warning, session error.",
    };
  }

  let resume;
  try {
    resume = await insertResume(session?.user?.id);
  } catch (error) {
    console.log(error);

    return {
      message: "Database Error: Failed to Create Resume.",
    };
  }

  redirect(`/dashboard/resume/${resume.id}`);
}

export async function removeResume(id: string) {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      message: "Warning, session error.",
    };
  }

  try {
    await deleteResume(id);
  } catch (error) {
    console.log(error);

    return {
      message: "Error, deleting resume.",
    };
  }

  revalidatePath("/dashboard");
}

export type State = {
  code: number;
  message: string | null;
};

export async function updateResumeTitleAction(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      code: 403,
      message: "Warning, session error.",
    };
  }

  const title = formData.get("title") as string;

  if (!title) {
    return {
      code: 500,
      message: "Title cannot be empty.",
    };
  }

  try {
    await updateResumeTitle(id, title);
  } catch (error) {
    console.log(error);
    return {
      code: 500,
      message: "Error, updating resume title.",
    };
  }

  revalidatePath(`/dashboard/resume/${id}`);

  return {
    code: 200,
    message: "success",
  };
}
