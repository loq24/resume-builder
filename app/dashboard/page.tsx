import Resumes from "@/components/resumes/Resumes";
import ResumeSkeleton from "@/components/skeletons/ResumeSkeleton";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <Suspense fallback={<ResumeSkeleton />}>
      <Resumes />
    </Suspense>
  );
}
