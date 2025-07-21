import styles from "./OverlayTitle.module.css"

interface OverlayTitleProps {
  text: string
}

export default function OverlayTitle({ text }: OverlayTitleProps) {
  return (
    <div className={styles.titleWrapper}>
      <p className={styles.shadow} aria-hidden="true">
        {text}
      </p>
      <p className={styles.title}>{text}</p>
    </div>
  )
}
