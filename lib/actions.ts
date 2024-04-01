"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { insertResume } from "./data/resume";

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
