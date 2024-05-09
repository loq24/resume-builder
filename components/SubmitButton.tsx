"use client";

import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending}>
      {pending ? "Loading..." : <>{children}</>}
    </Button>
  );
}
