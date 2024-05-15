"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "./ui/button";
import { updateResumeAction } from "@/lib/actions";
import { useFormState } from "react-dom";

type ResumeFormProps = {
  id: string;
};

const initialState = { message: "", code: 0 };

export default function ResumeForm({ id }: ResumeFormProps) {
  const updateResumeActionWithId = updateResumeAction.bind(null, id);

  const [state, dispatch] = useFormState(
    updateResumeActionWithId,
    initialState,
  );

  return (
    <div className="flex w-full flex-col gap-3">
      <form action={dispatch}>
        <Tabs defaultValue="personal-details" className="w-full">
          <div className="flex flex-row justify-between">
            <TabsList>
              <TabsTrigger value="personal-details">
                Personal Details
              </TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="work-history">Work History</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <div className="">
              <Button>
                <BriefcaseIcon className="mr-2 w-5" /> Save
              </Button>
            </div>
          </div>
          <TabsContent value="personal-details">
            <PersonalDetails />
          </TabsContent>
          <TabsContent value="skills">Skills.</TabsContent>
          <TabsContent value="work-history">Work History</TabsContent>
          <TabsContent value="projects">Projects</TabsContent>
          <TabsContent value="education">Education</TabsContent>
        </Tabs>
      </form>
    </div>
  );
}
