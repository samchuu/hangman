import menu from "../../../assets/images/icon-menu.svg"
import heart from "../../../assets/images/icon-heart.svg"
import { MAX_INCORRECT_GUESSES } from "../../../constants/constants"

interface GameHeaderProps {
  category: string | undefined
  incorrectGuesses: string[]
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GameHeader({ category, incorrectGuesses, showModal, setShowModal }: GameHeaderProps) {
  const percentage = ((MAX_INCORRECT_GUESSES - incorrectGuesses.length) / MAX_INCORRECT_GUESSES) * 100

  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8 xl:gap-14">
          <button
            aria-label="Open menu"
            disabled={showModal}
            onClick={() => setShowModal(true)}
            className="cursor-pointer flex justify-center items-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)] w-[40px] h-[40px] md:w-[64px] md:h-[64px] xl:w-[94px] xl:h-[94px]"
            style={{ boxShadow: "inset 0 -6px 0 7px rgb(157, 45, 245, 0.25)" }}
          >
            <img src={menu} alt="Open menu" className="w-[17px] h-[17px] md:w-[28px] md:h-[26px] xl:w-[41px] xl:h-[38px]" />
          </button>
          <h1 className="text-white text-4xl md:text-5xl xl:text-[88px] capitalize">{category}</h1>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <div className="bg-white w-[57px] md:w-40 xl:w-60 h-4 md:h-[31px] rounded-full p-1 md:p-2.5">
            <div className={`bg-[#261676] h-2 md:h-[13px] rounded-full`} style={{ width: `${percentage}%` }}></div>
          </div>
          <img src={heart} alt="heart" className="w-[26px] h-6 md:w-[53px] md:h-14" />
        </div>
      </div>
    </header>
  )
}
