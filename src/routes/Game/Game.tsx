import { useParams } from "react-router"
import data from "../../../data.json"
import { useEffect, useState } from "react"

import GameHeader from "./GameHeader"
import GameTargetWord from "./GameTargetWord"
import GameAlphabetGrid from "./GameAlphabetGrid"

type CategoryKey = "Movies" | "TV Shows" | "Countries" | "Capital Cities" | "Animals" | "Sports"

export const slugToCategoryKey: Record<string, CategoryKey> = {
  "tv-shows": "TV Shows",
  "capital-cities": "Capital Cities",
  movies: "Movies",
  animals: "Animals",
  countries: "Countries",
  sports: "Sports",
}

export default function Game() {
  const { category } = useParams()
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
  const [_incorrectGuesses, setIncorrectGuesses] = useState<string[]>([])
  const [randomWord, setRandomWord] = useState<string>("")

  const categoryKey = category && slugToCategoryKey[category]

  useEffect(() => {
    if (categoryKey) {
      const items = data.categories[categoryKey]
      const newRandomWord = items[Math.floor(Math.random() * items.length)].name.toLowerCase()
      setRandomWord(newRandomWord)
    }
  }, [categoryKey])

  if (!categoryKey) {
    return (
      <section className="flex flex-col gap-4 items-center justify-center min-h-dvh text-white text-center mx-auto max-w-screen-md">
        <h1 className="text-2xl xl:text-4xl font-bold">Oops!</h1>
        <p>Invalid or missing category. Please choose a valid category from the homepage.</p>
        <a href="/" className="underline text-xl">
          Back to home
        </a>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-screen-md xl:max-w-screen-xl mt-10 md:mt-14 pb-40">
      <GameHeader category={categoryKey} />
      <GameTargetWord randomWord={randomWord} correctGuesses={correctGuesses} />
      <GameAlphabetGrid
        randomWord={randomWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        setCorrectGuesses={setCorrectGuesses}
        setIncorrectGuesses={setIncorrectGuesses}
      />
    </section>
  )
}
