import Header from "@/components/header/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Header />
      <div className="mx-auto max-w-4xl px-5 py-10">{children}</div>
    </div>
  );
}
