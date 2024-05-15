import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchResume } from "@/lib/data/resume";
import { notFound } from "next/navigation";
import ResumeDetails from "@/components/ResumeDetails";
import ResumeForm from "@/components/ResumeForm";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const resume = await fetchResume(id);

  if (!resume) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-row gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Resume</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <ResumeDetails resume={resume} />
      <ResumeForm id={id} />
    </div>
  );
}
