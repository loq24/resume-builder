import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex gap-10 flex-col">
        <h1 className="text-8xl font-bold text-center font-oswald">
          Create your resume for free!
        </h1>
        <Link href="/api/auth/signin">
          <Button className="px-10 py-6 text-2xl">Login</Button>
        </Link>
      </div>
    </main>
  );
}
