import Link from "next/link";
import Navigator from "../../components/Navigator";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex-none m-0 p-0">
          <Navigator />
        </div>
        <div className="flex-1 m-0 p-0">
          <div className=" text-center bg-emerald-800">
            Dashboard
          </div>
          <Link href="/dashboard">Go To Dashboard</Link>
        </div>
      </div>
    </>
  );
}
