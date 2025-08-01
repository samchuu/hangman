import styles from "./OverlayTitle.module.css"

interface OverlayTitleProps {
  text: string
  showModal: boolean
}

export default function OverlayTitle({ text, showModal }: OverlayTitleProps) {
  return (
    <div className={styles.titleWrapper}>
      <p className={`${styles.shadow} ${showModal ? "text-8xl md:text-[134px]" : "text-5xl md:text-[104px] "}`} aria-hidden="true">
        {text}
      </p>
      <p className={`${styles.title} ${showModal ? "text-8xl md:text-[134px]" : "text-5xl md:text-[104px] "}`} data-testid="overlay-title">
        {text}
      </p>
    </div>
  )
}
