import OverlayTitle from "../OverlayTitle/OverlayTitle"
import back from "../../assets/images/icon-back.svg"
import { Link } from "react-router"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex justify-between items-center md:justify-start md:gap-28 xl:gap-72">
      <Link
        to="/"
        className="cursor-pointer flex justify-center items-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)] w-[40px] h-[40px] md:w-[64px] md:h-[64px] xl:w-[94px] xl:h-[94px]"
        style={{ boxShadow: "inset 0 -6px 0 7px rgb(157, 45, 245, 0.25)" }}
      >
        <img src={back} alt="Go back home" className="w-[17px] h-[17px] md:w-[28px] md:h-[26px] xl:w-[41px] xl:h-[38px]" />
      </Link>
      <OverlayTitle text={title} showModal={false} />
    </header>
  )
}
