import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"
import GameTargetWord from "./GameTargetWord"

it("renders correct number of letter blocks", () => {
  render(<GameTargetWord randomWord="Interstellar" correctGuesses={[]} />)
  const letterBlocks = screen.getAllByTestId("letter-block")
  expect(letterBlocks.length).toBe(12)
})
