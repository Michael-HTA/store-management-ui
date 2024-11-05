import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className=" text-center bg-emerald-800">
        Dashboard
      </p>
      <Link href="/dashboard">Go To Dashboard</Link>
    </>
  );
}
