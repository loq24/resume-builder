"use client";

import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-3" disabled={pending}>
      {pending ? "Loading..." : <>{children}</>}
    </Button>
  );
}
