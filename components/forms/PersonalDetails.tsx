import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PersonalDetails() {
  return (
    <div className="flex w-full flex-col gap-6 pt-5">
      <h2 className="mb-4 w-full text-lg font-semibold">Personal Details</h2>

      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="job-title">Job Title</Label>
          <Input id="job-title" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" className="py-5" />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="avatar-url">Avatar Url</Label>
          <Input id="avatar-url" className="py-5" />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" className="py-5" />
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <Label htmlFor="personal-website">Personal Website</Label>
        <Input id="personal-website" className="py-5" />
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <Label htmlFor="personal-website">Professional Summary</Label>
        <Input id="personal-website" className="py-5" />
      </div>
    </div>
  );
}
