import { Link } from "react-router"
import OverlayTitle from "../OverlayTitle/OverlayTitle"

interface ModalProps {
  showModal: boolean
  result: "You Win" | "You Lose" | "Paused"
  handlePlayAgain: () => void
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ showModal, setShowModal, result, handlePlayAgain }: ModalProps) {
  const handleAction = () => {
    if (result === "Paused") {
      setShowModal(false)
    } else {
      handlePlayAgain()
    }
  }
  return (
    <div className="mx-6">
      <div
        className="bg-[linear-gradient(180deg,_#344ABA_0%,_#001479_100%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[327px] md:max-w-[592px] min-h-[445px] rounded-[48px] z-30"
        style={{ boxShadow: "inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff" }}
      >
        <div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <OverlayTitle text={result} showModal={showModal} />
          </div>

          <div className="flex flex-col gap-8 items-center justify-center max-w-[275px] mx-auto mt-24">
            <button
              onClick={handleAction}
              className="bg-[#2463FF] px-16 py-3 max-h-16  flex items-center justify-center rounded-[20px] text-white text-center tracking-wider text-2xl md:text-3xl uppercase cursor-pointer hover:bg-[#5C8AFD] transition-colors"
              style={{ boxShadow: "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(60, 116, 255)" }}
            >
              {result === "Paused" ? "Continue" : "Play again"}
            </button>
            <Link
              to="/category"
              className="bg-[#2463FF] px-16 py-3 max-h-16 flex items-center justify-center rounded-[20px] text-white text-center tracking-wider text-2xl md:text-3xl uppercase cursor-pointer hover:bg-[#5C8AFD] transition-colors"
              style={{ boxShadow: "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(60, 116, 255)" }}
            >
              New Category
            </Link>
            <Link
              to="/"
              className="bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)] relative px-16 py-3 max-h-16 flex items-center justify-center rounded-[20px] text-white text-center tracking-wider text-2xl md:text-3xl uppercase cursor-pointer transition-colors"
              style={{ boxShadow: "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(198, 66, 252)" }}
            >
              Quit Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
