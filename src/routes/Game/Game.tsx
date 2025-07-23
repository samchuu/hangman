import { useParams } from "react-router"
import data from "../../../data.json"
import { useEffect, useState } from "react"

import GameHeader from "./GameHeader"
import GameTargetWord from "./GameTargetWord"
import GameAlphabetGrid from "./GameAlphabetGrid"

type CategoryKey = "Movies" | "TV Shows" | "Countries" | "Capital Cities" | "Animals" | "Sports"

const slugToCategoryKey: Record<string, CategoryKey> = {
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

  useEffect(() => {
    if (category && category in slugToCategoryKey) {
      const categoryKey = slugToCategoryKey[category]
      const items = data.categories[categoryKey]
      const newRandomWord = items[Math.floor(Math.random() * items.length)].name.toLowerCase()
      setRandomWord(newRandomWord)
    }
  }, [])

  return (
    <section className="mx-auto max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl mt-10 md:mt-14 pb-40">
      <GameHeader category={category} />
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
