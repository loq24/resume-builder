import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function PersonalDetails() {
  return (
    <div className="flex w-full flex-col gap-6 pt-5">
      <h2 className="mb-4 w-full text-lg font-semibold">Personal Details</h2>

      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="job-title">Job Title</Label>
          <Input id="job-title" name="job_title" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" className="py-5" />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="avatar-url">Avatar Url</Label>
          <Input
            id="avatar-url"
            name="avatar_url"
            type="url"
            className="py-5"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" className="py-5" />
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <Label htmlFor="personal-website">Personal Website</Label>
          <Input
            id="personal-website"
            type="url"
            name="personal_website"
            className="py-5"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" className="py-5" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="personal-details">Professional Summary</Label>
        <Textarea
          id="personal-details"
          name="personal_details"
          className="min-h-52"
        />
      </div>
    </div>
  );
}
