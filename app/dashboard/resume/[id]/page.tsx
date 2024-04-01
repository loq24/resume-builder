import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  //   if (!invoice) {
  //     notFound();
  //   }

  return <div>Page {id}</div>;
}
