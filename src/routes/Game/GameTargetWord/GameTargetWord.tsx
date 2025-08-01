interface GameTargetWordProps {
  randomWord: string
  correctGuesses: string[]
}

export default function GameTargetWord({ randomWord, correctGuesses }: GameTargetWordProps) {
  const words = randomWord.trim().split(/\s+/)
  // Preprocess words to only keep letters a-z
  const filteredWords = words.map((word) => Array.from(word).filter((letter) => /^[a-z]$/i.test(letter)))

  return (
    <div className="mt-20 md:mt-28 xl:mt-20 mx-auto">
      <div className={`flex flex-wrap justify-center gap-x-4 xl:gap-x-8 gap-y-6 items-center`}>
        {filteredWords.map((letters, wordIndex) => (
          <div key={wordIndex} className="flex flex-wrap">
            {letters.map((letter, letterIndex) => (
              <p
                data-testid="letter-block"
                key={letterIndex}
                className={`flex-1 text-white text-4xl md:text-6xl bg-[#2463FF] uppercase flex items-center justify-center rounded-xl md:rounded-4xl xl:rounded-[40px] w-10 h-16 md:w-20 md:h-28 xl:w-28 xl:h-32 py-2.5 xl:py-3 
                ${correctGuesses.includes(letter.toLowerCase()) ? "opacity-100" : "opacity-25"}`}
                style={{ boxShadow: "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(60, 116, 255)" }}
              >
                {correctGuesses.includes(letter.toLowerCase()) && letter.toUpperCase()}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
