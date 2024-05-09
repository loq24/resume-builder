"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import type { Resume } from "@prisma/client";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { removeResume } from "@/lib/actions";
import SubmitButton from "../SubmitButton";
dayjs.extend(relativeTime);

export default function Item({ resume }: { resume: Resume }) {
  const [open, setOpen] = useState(false);
  const deleteResumeWithId = removeResume.bind(null, resume.id);

  return (
    <div className="group relative w-full">
      <Link
        href={`/dashboard/resume/${resume.id}`}
        className="relative z-10 w-full"
      >
        <div className="w-full rounded-md border border-black border-opacity-5 px-3 py-5 hover:cursor-pointer hover:bg-slate-50">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{resume.title}</h3>
            <span className="text-sm opacity-30">
              Last update: {dayjs(resume.updatedAt).fromNow()}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute right-3 top-5 z-20 hidden group-hover:block">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <button className="flex flex-row items-center justify-center outline-0">
              <TrashIcon className="w-5" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Do you really want to delete this resume?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                resume from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <form action={deleteResumeWithId}>
                <SubmitButton>Delete</SubmitButton>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
