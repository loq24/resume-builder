"use client";

import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { Resume } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import SubmitButton from "./SubmitButton";
import { Button } from "./ui/button";
import { updateResumeTitleAction } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
dayjs.extend(relativeTime);

const initialState = { message: "", code: 0 };

export default function ResumeDetails({ resume }: { resume: Resume }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const updateResumeTitleActionWithId = updateResumeTitleAction.bind(
    null,
    resume.id,
  );
  const [state, dispatch] = useFormState(
    updateResumeTitleActionWithId,
    initialState,
  );

  useEffect(() => {
    if (state.code !== 200) return;

    toast({
      description: "Resume title successfully updated ✅",
    });
    setOpen(false);
  }, [state.code]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-1">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <h2 className="group mb-1 flex flex-row items-center gap-1 text-2xl font-bold leading-snug hover:cursor-pointer">
              <span>{resume.title}</span>
              <PencilIcon className="h-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </h2>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="relative">
              <AlertDialogTitle>Update Resume Title</AlertDialogTitle>

              <button
                className="absolute -right-2 -top-4 rounded-md hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-5" />
              </button>
            </AlertDialogHeader>
            <form action={dispatch} className="flex flex-col items-start gap-2">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <div className="flex w-full flex-col gap-1">
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full rounded-md border border-black border-opacity-70 px-3 py-2"
                  defaultValue={resume.title}
                />
                {state.code !== 200 && state.code !== 0 && (
                  <span className="text-xs text-red-600">{state.message}</span>
                )}
              </div>
              <div className="ml-auto mt-3 flex flex-row gap-2">
                <Button
                  type="button"
                  onClick={() => setOpen(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
                <SubmitButton>Update</SubmitButton>
              </div>
            </form>
          </AlertDialogContent>
        </AlertDialog>
        <span className="text-xs opacity-50">
          Created on: {resume.createdAt.toLocaleDateString()}
        </span>
        <span className="text-xs opacity-50">
          Last update: {dayjs(resume.updatedAt).fromNow()}
        </span>
        <span className="text-xs"></span>
      </div>
    </div>
  );
}
