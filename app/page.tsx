import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Link href="/employee" className="btn btn-primary">
        Employee page
      </Link>
    </main>
  );
}
