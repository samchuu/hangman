import { useEffect } from "react"

interface GameAlphabetGridProps {
  randomWord: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  setCorrectGuesses: React.Dispatch<React.SetStateAction<string[]>>
  setIncorrectGuesses: React.Dispatch<React.SetStateAction<string[]>>
}

export default function GameAlphabetGrid({ randomWord, guessedLetters, setGuessedLetters, setCorrectGuesses, setIncorrectGuesses }: GameAlphabetGridProps) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === " ") e.preventDefault()
      if (alphabets.includes(key)) handleGuess(key)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [guessedLetters, randomWord])

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters((prev) => [...prev, letter])

    if (randomWord.includes(letter)) {
      setCorrectGuesses((prev) => [...prev, letter])
    } else {
      setIncorrectGuesses((prev) => [...prev, letter])
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedText = e.currentTarget.textContent?.toLowerCase()
    if (clickedText) {
      handleGuess(clickedText)
    }
  }

  return (
    <div className="grid grid-cols-9 gap-x-2.5 gap-y-6 md:gap-x-3.5 xl:gap-x-6 mt-16 lg:mt-32">
      {alphabets.map((alphabet) => {
        const isCorrect = randomWord.includes(alphabet) && guessedLetters.includes(alphabet)
        const isIncorrect = !randomWord.includes(alphabet) && guessedLetters.includes(alphabet)
        return (
          <button
            key={alphabet}
            onClick={handleClick}
            disabled={guessedLetters.includes(alphabet)}
            className={`w-full px-2.5 py-3.5 max-w-28 text-2xl md:text-5xl cursor-pointer
            rounded-lg md:rounded-3xl flex justify-center items-center hover:text-white
            transition-colors duration-200 bg-white text-[#261676] hover:bg-[#2463FF]
            ${(isCorrect || isIncorrect) && "opacity-25 pointer-events-none"}`}
          >
            {alphabet.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
