"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalDetails from "./forms/PersonalDetails";

export default function ResumeForm() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Tabs defaultValue="personal-details" className="w-full">
        <TabsList>
          <TabsTrigger value="personal-details">Personal Details</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="work-history">Work History</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="personal-details">
          <PersonalDetails />
        </TabsContent>
        <TabsContent value="skills">Skills.</TabsContent>
        <TabsContent value="work-history">Work History</TabsContent>
        <TabsContent value="projects">Projects</TabsContent>
        <TabsContent value="education">Education</TabsContent>
      </Tabs>
    </div>
  );
}
