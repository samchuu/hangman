import { useEffect, useState } from "react"
import data from "../../data.json"
import type { CategoryKey } from "../types/category"

export function useRandomWord(categoryKey: CategoryKey) {
  const [randomWord, setRandomWord] = useState<string>("")

  useEffect(() => {
    const items = data.categories[categoryKey]
    if (!items || items.length === 0) {
      setRandomWord("")
      return
    }

    const newRandomWord = items[Math.floor(Math.random() * items.length)].name.toLowerCase()
    setRandomWord(newRandomWord)
  }, [categoryKey])

  return [randomWord, setRandomWord] as const
}
