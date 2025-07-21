import PageHeader from "../../components/PageHeader/PageHeader"
import Steps from "./Steps"

export default function HowToPlay() {
  return (
    <section className="mx-auto max-w-[680px] xl:max-w-[1212px] mt-10 pb-16 xl:pb-40">
      <PageHeader title="How to Play" />
      <Steps />
    </section>
  )
}
