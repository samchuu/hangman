import { render, screen } from "@testing-library/react"
import { expect, it, vi } from "vitest"
import GameHeader from "./GameHeader"
import { MemoryRouter } from "react-router"

it("renders the correct category name", () => {
  const setShowModal = vi.fn()

  render(
    <MemoryRouter>
      <GameHeader category="Movies" incorrectGuesses={[]} setShowModal={setShowModal} />
    </MemoryRouter>
  )
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Movies")
})
