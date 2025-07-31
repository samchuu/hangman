import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import GameAlphabetGrid from "./GameAlphabetGrid"

describe("GameAlphabetGrid", () => {
  it("handles correct guess on click", () => {
    const setGuessedLetters = vi.fn()
    const setCorrectGuesses = vi.fn()
    const setIncorrectGuesses = vi.fn()

    render(
      <GameAlphabetGrid
        showModal={false}
        randomWord="panda"
        guessedLetters={[]}
        setGuessedLetters={setGuessedLetters}
        setCorrectGuesses={setCorrectGuesses}
        setIncorrectGuesses={setIncorrectGuesses}
      />
    )

    const button = screen.getByRole("button", { name: "P" })
    fireEvent.click(button)

    expect(setGuessedLetters).toHaveBeenCalled()
    expect(setCorrectGuesses).toHaveBeenCalled()
    expect(setIncorrectGuesses).not.toHaveBeenCalled()
  })

  it("handles incorrect guess on click", () => {
    const setGuessedLetters = vi.fn()
    const setCorrectGuesses = vi.fn()
    const setIncorrectGuesses = vi.fn()

    render(
      <GameAlphabetGrid
        showModal={false}
        randomWord="panda"
        guessedLetters={[]}
        setGuessedLetters={setGuessedLetters}
        setCorrectGuesses={setCorrectGuesses}
        setIncorrectGuesses={setIncorrectGuesses}
      />
    )

    const button = screen.getByRole("button", { name: "X" })
    fireEvent.click(button)

    expect(setGuessedLetters).toHaveBeenCalled()
    expect(setIncorrectGuesses).toHaveBeenCalled()
    expect(setCorrectGuesses).not.toHaveBeenCalled()
  })
})
