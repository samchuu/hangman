import { Link } from "react-router"
import play from "../../assets/images/icon-play.svg"
import logo from "../../assets/images/logo.svg"

export default function MainMenu() {
  return (
    <section>
      <div
        style={{ background: "linear-gradient(180deg, #344aba, rgba(0, 20, 121, .83))", boxShadow: "inset 0 .6rem 0 .2rem #3c74ff,0 1rem 0 .4rem #140e66" }}
        className="flex flex-col justify-center items-center rounded-[48px] min-h-[480px] sm:max-w-[592px] sm:w-full sm:mx-auto"
      >
        <div className="max-w-64 mt-[-120px]">
          <img src={logo} alt="logo" />
        </div>
        <Link
          style={{ boxShadow: "inset 0 -1.5rem 0 .6rem #9d2df5, 0 .4rem 0 .6rem #243041" }}
          className="cursor-pointer mt-16 w-40 h-40 flex justify-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)]"
          to={"/category"}
        >
          <img src={play} alt="play" />
        </Link>
        <Link to="/how-to-play">
          <button className="mt-16 cursor-pointer uppercase w-64 h-16 bg-[#2463FF] text-white text-[32px] rounded-[40px] shadow-[0px_-2px_0px_3px_#3D74FC,_0px_1px_0px_8px_#000] tracking-wider">
            How to play
          </button>
        </Link>
      </div>
    </section>
  )
}
