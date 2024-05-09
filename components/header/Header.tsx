import Link from "next/link";
import ProfileButton from "./ProfileButton";

export default async function Header() {
  return (
    <div className="mx-auto flex max-w-5xl flex-row justify-between py-8">
      <Link href="/" className="text-3xl font-bold">
        loqresume
      </Link>
      <ProfileButton />
    </div>
  );
}
