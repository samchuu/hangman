import { Link } from "react-router"

interface NavigationButtonProps {
  icon: string
  altText: string
}
export default function NavigationButton({ icon, altText }: NavigationButtonProps) {
  return (
    <Link
      to="/"
      className="cursor-pointer flex justify-center items-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)] w-[40px] h-[40px] md:w-[64px] md:h-[64px] xl:w-[94px] xl:h-[94px]"
      style={{ boxShadow: "inset 0 -6px 0 7px rgb(157, 45, 245, 0.25)" }}
    >
      <img src={icon} alt={altText} className="w-[17px] h-[17px] md:w-[28px] md:h-[26px] xl:w-[41px] xl:h-[38px]" />
    </Link>
  )
}
