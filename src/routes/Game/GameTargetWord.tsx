interface GameTargetWordProps {
  randomWord: string
  correctGuesses: string[]
}
export default function GameTargetWord({ randomWord, correctGuesses }: GameTargetWordProps) {
  return (
    <div className="mt-20 md:mt-28 xl:mt-20">
      <div className="flex flex-wrap justify-center items-center gap-1.5 gap-y-3">
        {randomWord.split("").map((letter, index) => {
          return letter === " " ? (
            <div key={index} className="w-full"></div>
          ) : (
            <p
              key={index}
              style={{ boxShadow: `${letter !== " " && "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(60, 116, 255)"}` }}
              className={`text-white text-4xl md:text-6xl md:rounded-4xl bg-[#2463FF] uppercase w-10 h-16 md:w-20 md:h-28 xl:w-28 xl:h-32 flex items-center justify-center rounded-xl
                ${correctGuesses.includes(letter) ? "opacity-100" : "opacity-25"}`}
            >
              {correctGuesses.includes(letter) && letter}
            </p>
          )
        })}
      </div>
    </div>
  )
}
