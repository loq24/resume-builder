import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import SignOut from "../auth-buttons";

export default async function ProfileButton() {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-10 w-10 flex-row items-center justify-center rounded-full bg-slate-200 text-lg text-black text-opacity-40 hover:cursor-pointer">
          {session?.user?.name?.charAt(0).toUpperCase()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
