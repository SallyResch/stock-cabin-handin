import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("The header is rendered for the user", () => {
    test("A header is shown for the user", () => {
        render(<Header />)
        const headerText = screen.getByRole("heading", { level: 1 })
        expect(headerText).toBeInTheDocument();
    })
    test("A logo is shown for the user", () => {
        render(<Header />)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument();
    })
    test("A subheader is shown for the user", () => {
        render(<Header />)
        const subHeader = screen.getByRole("heading", { level: 2 })
        expect(subHeader).toBeInTheDocument();
    })
    test("Renders the correct text in header", () => {
        render(<Header />)
        const headingText = screen.getByText(/Summer cabin/i)
        const subHeadingText = screen.getByText(/Shared inventory - for easy planning/i)
        expect(headingText).toBeInTheDocument();
        expect(subHeadingText).toBeInTheDocument();
    })
})