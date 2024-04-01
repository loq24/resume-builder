import { auth } from "@/auth";
import { fetchResumes } from "@/lib/data/resume";
import { Button } from "../ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NoResumeFound from "./NoResumeFound";
import Item from "./Item";

export default async function Resumes() {
  const session = await auth();

  if (!session?.user?.id) throw Error("Sorry, something went wrong.");

  const resumes = await fetchResumes(session?.user?.id);

  if ((resumes && resumes.length === 0) || !resumes) {
    return <NoResumeFound />;
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-row justify-between">
        <h1 className="flex flex-row items-center gap-3 text-2xl font-semibold">
          Resumes{" "}
          <span className="text-base font-normal opacity-65">(1/3)</span>
        </h1>
        <Button>
          <span className="mr-3 text-lg">+</span> Add New
        </Button>
      </div>
      <div className="h-px w-full bg-black bg-opacity-15"></div>

      <div className="grid grid-cols-3 gap-5">
        {resumes &&
          resumes.map((resume) => {
            return <Item resume={resume} key={resume.id} />;
          })}
      </div>
    </div>
  );
}
