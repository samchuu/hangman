import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"
import GameHeader from "./GameHeader"
import { MemoryRouter } from "react-router"

it("renders the correct category name", () => {
  render(
    <MemoryRouter>
      <GameHeader category="Movies" />
    </MemoryRouter>
  )
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Movies")
})
