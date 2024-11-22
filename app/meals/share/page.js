import Link from "next/link";

export default function SharePage() {
  return (
    <main>
      <h1>Share</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/meals">Meals</Link></li>
      </ul>
    </main>
  );
}