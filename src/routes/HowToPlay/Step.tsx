import styles from "./HowToPlay.module.css"

interface StepProps {
  step: {
    step: string
    title: string
    description: string
  }
}

export default function Step({ step }: StepProps) {
  return (
    <div key={step.step} className="bg-white rounded-[20px] p-8 md:px-10 flex-1 xl:flex xl:flex-col xl:justify-center">
      <div className={`${styles.stepWrapper} xl:text-center`}>
        <span className={`${styles.a} text-[#2463FF] text-2xl md:text-[88px]`}>{step.step}</span>
        <h3 className={`${styles.b} text-[#261676] uppercase tracking-wider text-2xl md:text-[40px] xl:text-5xl`}>{step.title}</h3>
        <p className={`${styles.c} text-[#887DC0] tracking-wider leading-[1.2] md:text-[20px] md:tracking-[1px] xl:tracking-[1.3px] xl:text-[26px]`}>
          {step.description}
        </p>
      </div>
    </div>
  )
}
