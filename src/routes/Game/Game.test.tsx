import { render, screen } from "@testing-library/react"
import { expect, it, vi } from "vitest"
import Game from "./Game"
import { MemoryRouter } from "react-router"

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router")
  return {
    ...actual,
    useParams: () => ({ category: "invalid-category" }),
  }
})
it("renders fallback UI for invalid category", () => {
  render(
    <MemoryRouter>
      <Game />
    </MemoryRouter>
  )

  expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument()
  expect(screen.getByText(/Sorry, the page you're looking for doesn't exist./i)).toBeInTheDocument()
  expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/")
})
