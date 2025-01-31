import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  // delay for 2 seconds to simulate a slow network
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
