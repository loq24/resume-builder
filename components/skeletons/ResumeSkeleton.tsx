import { Skeleton } from "../ui/skeleton";

export default function ResumeSkeleton() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-row justify-between">
        <Skeleton className="h-[36px]  w-1/3 rounded-md" />
        <Skeleton className="h-[36px]  w-1/3 rounded-md" />
      </div>
      <div className="h-px w-full bg-black bg-opacity-15"></div>
      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
        <Skeleton className="relative h-[96px] w-full rounded-md" />
      </div>
    </div>
  );
}
