import { Link } from "react-router"
import play from "../../assets/images/icon-play.svg"
import logo from "../../assets/images/logo.svg"

export default function MainMenu() {
  return (
    <section className="flex flex-col items-center justify-center min-h-dvh">
      <div
        style={{ background: "linear-gradient(180deg, #344aba, rgba(0, 20, 121, .83))", boxShadow: "inset 0 .6rem 0 .2rem #3c74ff,0 1rem 0 .4rem #140e66" }}
        className="relative w-full flex flex-col justify-center items-center rounded-[48px] min-h-[480px] sm:max-w-[592px] sm:w-full sm:mx-auto"
      >
        <div className="max-w-64 absolute -top-14">
          <img src={logo} alt="logo" />
        </div>
        <Link
          style={{ boxShadow: "inset 0 -15px 0 1px #9D2DF5, 0 4px 0 5px #243041" }}
          className="relative group cursor-pointer mt-16 w-40 h-40 flex justify-center items-center rounded-full bg-[linear-gradient(180deg,_#FE71FE_0%,_#7199FF_100%)]"
          aria-label="Start game"
          to={"/category"}
        >
          <div className="absolute inset-0 rounded-full opacity-0 bg-white group-hover:opacity-20 transition-opacity duration-200 pointer-events-none" />
          <img src={play} alt="play" className="z-10" />
        </Link>
        <Link to="/how-to-play" className="mt-16">
          <button className="cursor-pointer uppercase w-64 h-16 bg-[#2463FF] hover:bg-[#5C8AFD] transition-colors duration-200 text-white text-[32px] rounded-[40px] shadow-[0px_-2px_0px_3px_#3D74FC,_0px_1px_0px_8px_#000] tracking-wider">
            How to play
          </button>
        </Link>
      </div>
    </section>
  )
}
