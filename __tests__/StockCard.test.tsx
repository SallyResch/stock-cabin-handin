import { render, screen } from "@testing-library/react"
import StockCard from "@/components/StockCard"
import userEvent from "@testing-library/user-event"
import { ProductType } from "@/types/productType"
import { UNITS } from "@/data/units"
import { CookingPotIcon } from "lucide-react"

const baseProduct: ProductType = {
    id: crypto.randomUUID(),
    name: "Strawberry jam",
    location: { id: 52, name: "Kitchen", icon: CookingPotIcon },
    quantity: 12,
    unit: UNITS[0],
    adjustBy: 1,
    threshold: 1,
    note: "Homemade",
}

describe("Handle inventory balance - view & units", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test("Renders the quantity integer correctly", () => {
        render(<StockCard product={baseProduct} />)
        expect(screen.getByText("12")).toBeInTheDocument();
    })

    test("Renders the unit correctly", () => {
        const productWithRolls = { ...baseProduct, unit: UNITS[3] };
        render(<StockCard product={productWithRolls} />)
        expect(screen.getByText("pkg")).toBeInTheDocument();
    })

    test("Renders quantity and unit together in the stock display container", () => {
        render(<StockCard product={baseProduct} />)
        const stockDisplay = screen.getByTestId("stock-display");
        expect(stockDisplay).toHaveTextContent("12kg")
    })

    test("Renders decimal quantities correctly (e.g. 1.5kg)", () => {
        const decimalProduct: ProductType = {
            ...baseProduct, quantity: 1.5, unit: "kg"
        }

        render(<StockCard product={decimalProduct} />);
        const stockDisplayDecimal = screen.getByTestId("stock-display");
        expect(stockDisplayDecimal).toHaveTextContent("1.5kg");
    });
    test("Renders a 'low stock' badge to the user when quantity is at or below threshold", () => {
        const lowProduct: ProductType = { ...baseProduct, quantity: 2, threshold: 4 }
        render(<StockCard product={lowProduct} />)
        expect(screen.getByTestId("status-badge")).toBeInTheDocument();
        expect(screen.getByText(/low stock/i)).toBeInTheDocument();
        expect(screen.queryByText(/out of stock/i)).not.toBeInTheDocument();
    })
    test("Renders a 'Out of stock' badge to the user when quantity is 0", () => {
        const outOfStockProduct = { ...baseProduct, quantity: 0 }
        render(<StockCard product={outOfStockProduct} />)
        expect(screen.getByTestId("status-badge")).toBeInTheDocument();
        expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
        expect(screen.queryByText(/low stock/i)).not.toBeInTheDocument();
    })
    test("Renders a 'In stock' badge to the user when quantity is above threshold", () => {
        render(<StockCard product={baseProduct} />)
        expect(screen.getByTestId("status-badge")).toBeInTheDocument();
        expect(screen.getByText(/in stock/i)).toBeInTheDocument();
        expect(screen.queryByText(/low stock/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/out of stock/i)).not.toBeInTheDocument();
    })
});

describe("Handle inventory - updating stock", () => {
    test("Calls onUpdateQuantity with increased value when user clicks increment button", async () => {
        const mockUser = userEvent.setup();
        const handleUpdateQuantity = jest.fn()

        render(<StockCard product={baseProduct} onUpdateQuantity={handleUpdateQuantity} />);

        const incrementButton = screen.getByTestId("increment-button");
        await mockUser.click(incrementButton);

        expect(handleUpdateQuantity).toHaveBeenCalledTimes(1);
        expect(handleUpdateQuantity).toHaveBeenCalledWith(baseProduct.id, 13);
    })

    test("Calls onUpdateQuantity with decreased value when user clicks decrement button", async () => {
        const mockUser = userEvent.setup();
        const handleUpdateQuantity = jest.fn()

        render(<StockCard product={baseProduct} onUpdateQuantity={handleUpdateQuantity} />);

        const decrementButton = screen.getByTestId("decrement-button");
        await mockUser.click(decrementButton);

        expect(handleUpdateQuantity).toHaveBeenCalledTimes(1);
        expect(handleUpdateQuantity).toHaveBeenCalledWith(baseProduct.id, 11);
    })

})