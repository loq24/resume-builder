"use client";

import { DocumentIcon } from "@heroicons/react/24/outline";
import { createResume } from "@/lib/actions";
import SubmitButton from "../SubmitButton";

export default async function NoResumeFound() {
  return (
    <div className="flex w-auto flex-col items-center gap-2 pt-10">
      <DocumentIcon className="w-20" />
      <p className="text-sm font-semibold">No resume found</p>
      <form action={createResume}>
        <SubmitButton>
          <span className="mr-3 text-lg">+</span> Compose
        </SubmitButton>
      </form>
    </div>
  );
}
