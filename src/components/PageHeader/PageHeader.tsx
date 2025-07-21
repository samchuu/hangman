import NavigationButton from "../NavigationButton/NavigationButton"
import OverlayTitle from "../OverlayTitle/OverlayTitle"
import back from "../../assets/images/icon-back.svg"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center mb-20 md:mb-24 xl:mb-16 md:justify-start md:gap-28 xl:gap-72">
      <NavigationButton icon={back} altText="Go back to previous page" />
      <OverlayTitle text={title} />
    </header>
  )
}
