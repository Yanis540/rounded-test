import AuthenticatedDashboardLayout from "@/Layout/AuthenticatedDashboardLayout";
import Image from "next/image";

export default function Home() {
  return (
  <AuthenticatedDashboardLayout>
    <main className="flex flex-1  flex-col items-center  bg-background">
      <h1 className="text-4xl text-primary ">Welcome To Rounded</h1>
    </main>
  </AuthenticatedDashboardLayout>
  );
}
