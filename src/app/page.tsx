import Link from "next/link";

export default function Home() {
  return (
    <main className="container ">
      <h1>Home Page</h1>
      <p className="flex justify-start align-center space-x-2">
        <Link className="bg-indigo-500 py-1 px-2" href="/users">
          Users
        </Link>
        <Link className="bg-purple-500 py-1 px-2" href="/parcs">
          Parcs
        </Link>
        <Link className="bg-cyan-500 py-1 px-2" href="/bookings">
          Bookings
        </Link>
      </p>
    </main>
  );
}
