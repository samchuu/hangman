interface GameAlphabetGridProps {
  randomWord: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  setCorrectGuesses: React.Dispatch<React.SetStateAction<string[]>>
  setIncorrectGuesses: React.Dispatch<React.SetStateAction<string[]>>
}

export default function GameAlphabetGrid({ randomWord, guessedLetters, setGuessedLetters, setCorrectGuesses, setIncorrectGuesses }: GameAlphabetGridProps) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const clickedText = e.currentTarget.textContent?.toLowerCase()
    if (!clickedText || guessedLetters.includes(clickedText)) return

    setGuessedLetters((prev) => [...prev, clickedText])

    if (randomWord.includes(clickedText)) {
      setCorrectGuesses((prev) => [...prev, clickedText])
    } else {
      setIncorrectGuesses((prev) => [...prev, clickedText])
    }
  }
  return (
    <div className="grid grid-cols-9 gap-x-2.5 gap-y-6 md:gap-x-3.5 xl:gap-x-6 mt-16 lg:mt-32">
      {alphabets.map((alphabet) => (
        <p
          key={alphabet}
          onClick={handleClick}
          className="text-[#261676] cursor-pointer bg-white w-full px-2.5 py-3.5 max-w-28 text-2xl md:text-5xl xl:text-5xl rounded-lg md:rounded-3xl flex justify-center items-center"
        >
          {alphabet.toUpperCase()}
        </p>
      ))}
    </div>
  )
}
