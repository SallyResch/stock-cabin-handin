import { render, screen, within } from '@testing-library/react'
import LocationList from '@/components/LocationList'
import { locations } from '@/data/locations'

describe("Testing of LocationsList Component", () => {

    const mockProps = {
        selectedLocationId: null,
        onSelectLocation: jest.fn(),
        products: [],
    }

    const renderLocationList = (props = {}) => {
        return render(<LocationList {...mockProps} {...props} />)
    }
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("The location list container is rendered", () => {
        renderLocationList()
        expect(screen.getByTestId("location-list")).toBeInTheDocument()
    })

    test("All cabin location list names are rendered and is equal length to the datafile.", () => {
        renderLocationList()
        const list = screen.getByTestId("location-list");
        const locationNames = within(list).getAllByTestId("location-name")
        expect(locationNames).toHaveLength(locations.length)
    })

    test("The correct location names are rendered", () => {
        render(<LocationList selectedLocationId={null} onSelectLocation={function (id: number | null): void {
            throw new Error('Function not implemented.')
        }} products={[]} />)
        const list = screen.getByTestId("location-list");
        const locationNames = within(list).getAllByTestId("location-name")
        locationNames.forEach((item, index) => {
            expect(item).toHaveTextContent(locations[index].name)
        })
    })
})