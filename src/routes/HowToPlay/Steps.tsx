import Step from "./Step"

const steps = [
  {
    step: "01",
    title: "Choose a Category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    step: "02",
    title: "Guess Letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    step: "03",
    title: "Win or Lose",
    description: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
]

export default function Steps() {
  return (
    <article className="flex flex-col gap-6 xl:flex-row xl:min-h-[550px] mt-20 md:mt-24 xl:mt-16">
      {steps.map((step) => (
        <Step step={step} key={step.step} />
      ))}
    </article>
  )
}
