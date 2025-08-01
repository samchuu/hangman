import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Modal from "./Modal"
import { MemoryRouter } from "react-router"
import userEvent from "@testing-library/user-event"

const mockHandlePlayAgain = vi.fn()
const mockSetShowModal = vi.fn()

describe("Modal component", () => {
  it("Modal renders with the correct OverlayTitle when user wins the game", () => {
    render(
      <MemoryRouter>
        <Modal showModal={true} setShowModal={mockSetShowModal} result={"You Win"} handlePlayAgain={mockHandlePlayAgain} />
      </MemoryRouter>
    )

    const overlayTitle = screen.getByTestId("overlay-title")
    expect(overlayTitle).toBeInTheDocument()
    expect(overlayTitle).toHaveTextContent(/you win/i)
  })
  it('calls handlePlayAgain when result is "You Win" and button is clicked', async () => {
    render(
      <MemoryRouter>
        <Modal showModal={true} setShowModal={mockSetShowModal} result="You Win" handlePlayAgain={mockHandlePlayAgain} />
      </MemoryRouter>
    )

    const button = screen.getByRole("button", { name: /play again/i })
    await userEvent.click(button)
    expect(mockHandlePlayAgain).toHaveBeenCalled()
  })

  it('calls setShowModal(false) when result is "Paused" and button is clicked', async () => {
    render(
      <MemoryRouter>
        <Modal showModal={true} setShowModal={mockSetShowModal} result="Paused" handlePlayAgain={mockHandlePlayAgain} />
      </MemoryRouter>
    )

    const button = screen.getByRole("button", { name: /continue/i })
    await userEvent.click(button)
    expect(mockSetShowModal).toHaveBeenCalledWith(false)
  })
})
