import Link from "next/link";

export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1>Meal Details {params.mealSlug}</h1>
      <ul>
        <li><Link href="/">Home</Link> </li>
        <li><Link href="/meals">Meals</Link></li>
        <li><Link href="/share">Share</Link></li>
      </ul>
    </main>
  );
}