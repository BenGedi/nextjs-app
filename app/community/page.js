import Link from "next/link";

export default function CommunityPage() {
  return (
    <main>
      <h1>Community</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/meals/share">Share</Link></li>
      </ul>
    </main>
  );
}