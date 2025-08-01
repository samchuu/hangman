import { useParams } from "react-router"
import data from "../../../data.json"
import { useEffect, useState } from "react"
import GameHeader from "./GameHeader/GameHeader"
import GameTargetWord from "./GameTargetWord/GameTargetWord"
import GameAlphabetGrid from "./GameAlphabetGrid/GameAlphabetGrid"
import Modal from "../../components/Modal/Modal"
import Overlay from "../../components/Overlay/Overlay"
import NotFound from "../../components/NotFound/NotFound"
import { slugToCategoryKey } from "../../types/category"
import { useRandomWord } from "../../hooks/useRandomWord"

export default function Game() {
  const { category } = useParams()
  const categoryKey = category && slugToCategoryKey[category]
  if (!categoryKey) return <NotFound />

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([])
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([])
  const [randomWord, setRandomWord] = useRandomWord(categoryKey)
  const [showModal, setShowModal] = useState(false)

  const isWordGuessed = [...new Set(randomWord.replace(/[^a-z]/gi, ""))].every((letter) => correctGuesses.includes(letter))

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    // Cleanup when component unmounts or modal closes
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [showModal])

  useEffect(() => {
    if (!randomWord) return
    if (isWordGuessed || incorrectGuesses.length === 8) {
      setShowModal(true)
    }
  }, [isWordGuessed, incorrectGuesses])

  const handlePlayAgain = () => {
    if (categoryKey) {
      const items = data.categories[categoryKey]
      const newRandomWord = items[Math.floor(Math.random() * items.length)].name.toLowerCase()
      setRandomWord(newRandomWord)
      setGuessedLetters([])
      setCorrectGuesses([])
      setIncorrectGuesses([])
      setShowModal(false)
    }
  }

  return (
    <section className="mx-auto xl:max-w-screen-xl mt-10 md:mt-14 pb-20 relative">
      <GameHeader category={categoryKey} incorrectGuesses={incorrectGuesses} setShowModal={setShowModal} />
      <GameTargetWord randomWord={randomWord} correctGuesses={correctGuesses} />
      <GameAlphabetGrid
        showModal={showModal}
        randomWord={randomWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        setCorrectGuesses={setCorrectGuesses}
        setIncorrectGuesses={setIncorrectGuesses}
      />
      {showModal && (
        <>
          <Overlay setShowModal={setShowModal} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            handlePlayAgain={handlePlayAgain}
            result={isWordGuessed ? "You Win" : incorrectGuesses.length === 8 ? "You Lose" : "Paused"}
          />
        </>
      )}
    </section>
  )
}
