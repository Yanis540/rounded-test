import AuthenticatedLayout from "@/Layout/AuthenticatedLayout";
import Image from "next/image";

export default function Home() {
  return (
  <AuthenticatedLayout>
    <main className="flex flex-1  flex-col items-center  bg-background">
      <h1 className="text-4xl text-primary ">Welcome To Rounded, Appuyez sur le telephone du sidebar</h1>
    </main>
  </AuthenticatedLayout>
  );
}
