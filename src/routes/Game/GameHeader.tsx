import NavigationButton from "../../components/NavigationButton/NavigationButton"
import menu from "../../assets/images/icon-menu.svg"
import slider from "../../assets/images/staticSlider.svg"
import heart from "../../assets/images/icon-heart.svg"

interface GameHeaderProps {
  category: string | undefined
}

export default function GameHeader({ category }: GameHeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8 xl:gap-14">
          <NavigationButton icon={menu} altText="Open menu" />
          <h1 className="text-white text-4xl md:text-5xl xl:text-[88px] capitalize">{category}</h1>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <img src={slider} alt="slider" />
          <img src={heart} alt="heart" className="w-[26px] h-6" />
        </div>
      </div>
    </header>
  )
}
