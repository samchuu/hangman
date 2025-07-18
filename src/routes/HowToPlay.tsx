import { Link } from "react-router"
import back from "../../src/assets/images/icon-back.svg"

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

export default function HowToPlay() {
  return (
    <section className="mx-auto max-w-[680px] xl:max-w-[1212px]">
      <header className="flex justify-between items-center mb-20 sm:justify-start sm:gap-28">
        <Link to="/" className="cursor-pointer flex justify-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)] w-[40px] h-[40px]">
          <img src={back} alt="back" width={17} height={17} />
        </Link>
        <h1 className="text-5xl text-[#67B6FF]">How to play</h1>
      </header>
      <article className="flex flex-col gap-6 xl:flex-row xl:min-h-[550px]">
        {steps.map((step) => (
          <div key={step.step} className="bg-white rounded-[20px] p-8 md:px-10 flex-1 xl:flex xl:flex-col xl:justify-center">
            <div className="step-wrapper xl:text-center">
              <span className="a text-[#2463FF] text-2xl md:text-[88px]">{step.step}</span>
              <h3 className="b text-[#261676] uppercase text-2xl md:text-[40px]">{step.title}</h3>
              <p className="c text-[#887DC0] md:text-[20px]">{step.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
