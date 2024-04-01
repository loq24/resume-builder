import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import type { Resume } from "@prisma/client";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Item({ resume }: { resume: Resume }) {
  return (
    <Link href={`/dashboard/resume/${resume.id}`} className="w-full">
      <div className="relative w-full rounded-md border border-black border-opacity-5 px-3 py-5 hover:cursor-pointer hover:bg-slate-50">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{resume.title}</h3>
          <span className="text-sm opacity-30">
            Last update: {dayjs(resume.updatedAt).fromNow()}
          </span>
        </div>
        <div className="absolute right-3 top-5">
          <button className="flex flex-row items-center justify-center">
            <EllipsisVerticalIcon className="w-7" />
          </button>
        </div>
      </div>
    </Link>
  );
}
