import { render, screen, within } from "@testing-library/react";
import Sidebar from "@/components/Sidebar";
import { locations } from "@/data/locations";

describe("Testing components rendered in Sidebar", () => {
    test("The LocationList is rendered in Sidebar", () => {
        render(<Sidebar selectedLocationId={null} onSelectLocation={function (id: number | null): void {
            throw new Error("Function not implemented.");
        }} products={[]} />)
        const list = screen.getByTestId("location-list");
        expect(list).toBeInTheDocument()
    })
    test("All cabin location list names are rendered in Sidebar and is equal length to the datafile.", () => {
        render(<Sidebar selectedLocationId={null} onSelectLocation={function (id: number | null): void {
            throw new Error("Function not implemented.");
        }} products={[]} />)
        const list = screen.getByTestId("location-list");
        const locationNames = within(list).getAllByTestId("location-name")
        expect(locationNames.length).toEqual(7)
    })
    test("The correct location names are rendered in Sidebar", () => {
        render(<Sidebar selectedLocationId={null} onSelectLocation={function (id: number | null): void {
            throw new Error("Function not implemented.");
        }} products={[]} />)
        const list = screen.getByTestId("location-list");
        const locationNames = within(list).getAllByTestId("location-name")
        locationNames.forEach((item, index) => {
            expect(item).toHaveTextContent(locations[index].name)
        })
    })
})