import PageHeader from "../../components/PageHeader/PageHeader"
import data from "../../../data.json"
import { Link } from "react-router"
import slugify from "../../utils/slugify"

export default function Category() {
  const categories = Object.keys(data.categories)

  return (
    <section className="md:mx-auto md:max-w-[680px] xl:max-w-[1212px] mt-10 pb-16 xl:pb-40">
      <PageHeader title="Pick a category" />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 xl:gap-8">
        {categories.map((category) => (
          <Link
            key={category}
            className="flex-1 w-full min-w-[324px] py-6 md:py-16 bg-[#2463FF] rounded-[20px] text-white text-center tracking-wider text-2xl md:text-[40px] xl:text-5xl uppercase cursor-pointer hover:bg-[#5C8AFD] transition-colors"
            style={{ boxShadow: "inset 0 -2px 0 3px rgb(20, 14, 102), inset 0 1px 0 6px rgb(60, 116, 255)" }}
            to={`/game/${slugify(category)}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  )
}
