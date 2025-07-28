import { render, screen } from "@testing-library/react"
import { expect, it, vi } from "vitest"
import Game from "./Game"

it("renders fallback UI for invalid category", () => {
  vi.mock("react-router", () => ({
    useParams: () => ({ category: "invalid-category" }),
  }))

  render(<Game />)

  expect(screen.getByText("Oops!")).toBeInTheDocument()
  expect(screen.getByText(/Invalid or missing category/i)).toBeInTheDocument()
  expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/")
})
