export type CategoryKey = "Movies" | "TV Shows" | "Countries" | "Capital Cities" | "Animals" | "Sports"

export const slugToCategoryKey: Record<string, CategoryKey> = {
  "tv-shows": "TV Shows",
  "capital-cities": "Capital Cities",
  movies: "Movies",
  animals: "Animals",
  countries: "Countries",
  sports: "Sports",
}
