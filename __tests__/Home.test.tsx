import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "@/app/page"
import { products } from "@/data/products"

describe("Integration tests for locationslist and product filtering", () => {
    test("Shows products corresponding to the default state (All products (No location choosen = (location === null)))", () => {
        render(<Home />)
        products.forEach((product) => {
            expect(screen.getByText(product.name)).toBeInTheDocument();
        })
    })

    test("Filters product when user clicks on a specific location (e.g. Bathroom)", async () => {
        const mockUser = userEvent.setup();
        render(<Home />)

        const locationButton = screen.getByRole("button", { name: /bathroom/i });
        await mockUser.click(locationButton);
        expect(screen.getByText("Toilett paper")).toBeInTheDocument();
    })

    test("Hides products that do not belong to the selected location", async () => {
        const mockUser = userEvent.setup();
        render(<Home />)

        const locationButton = screen.getByRole("button", { name: /bathroom/i });
        await mockUser.click(locationButton);

        expect(screen.getByText("Toilett paper")).toBeInTheDocument();
        expect(screen.queryByText("Coffee beans")).not.toBeInTheDocument();
        expect(screen.queryByText("Fireplace matches")).not.toBeInTheDocument();
    })

    test("Shows all products again when user clicks on 'All'-button", async () => {
        const mockUser = userEvent.setup();
        render(<Home />)

        //User clicks bathroom button to filter
        const locationButton = screen.getByRole("button", { name: /bathroom/i });
        await mockUser.click(locationButton);
        expect(screen.queryByText(/Coffee beans/i)).not.toBeInTheDocument();

        //User clicks All to remove filter
        const allButton = screen.getByRole("button", { name: /all/i });
        await mockUser.click(allButton);
        expect(screen.queryByText(/Coffee beans/i)).toBeInTheDocument();
    })
})

describe("User can update Stock Quantity", () => {
    test("User can increase amount of product", async () => {
        const mockUser = userEvent.setup()
        render(<Home />);

        const targetProduct = products[0];
        const incrementButton = screen.getByLabelText(
            `increase ${targetProduct.name}`);
        const productCard = incrementButton.closest(
            "[data-testid='product-container']") as HTMLElement;

        const quantityElement = within(productCard).getByTestId("quantity")
        const initialQuantity = Number(quantityElement.textContent);
        await mockUser.click(incrementButton);

        expect(quantityElement).toHaveTextContent((initialQuantity + targetProduct.adjustBy).toString());
    })

    test("User can decrease amount of product", async () => {
        const mockUser = userEvent.setup()
        render(<Home />);

        const targetProduct = products[0];
        const initialQuantity = targetProduct.quantity;

        const expectedQuantity = initialQuantity - targetProduct.adjustBy;

        const decrementButton = screen.getByLabelText(`decrease ${targetProduct.name}`);
        await mockUser.click(decrementButton);

        const productCard = decrementButton.closest("[data-testid='product-container']") as HTMLElement;
        const quantityElement = within(productCard).getByTestId("quantity")
        expect(quantityElement).toHaveTextContent(expectedQuantity.toString());
    })
    test("User can change product status from 'In stock' to 'Low Stock'", async () => {
        const mockUser = userEvent.setup();
        render(<Home />)
        const targetProduct = products[0];
        const decrementButton = screen.getByLabelText(`decrease ${targetProduct.name}`);
        const stockCard = decrementButton.closest("[data-testid='product-container']") as HTMLElement;

        expect(within(stockCard).getByText(/in stock/i)).toBeInTheDocument();
        await mockUser.click(decrementButton);
        expect(within(stockCard).getByText(/low stock/i)).toBeInTheDocument();
        expect(within(stockCard).queryByText(/in stock/i)).not.toBeInTheDocument();
    })
    test("User can change product status from 'Low stock' to 'Out of stock'", async () => {
        const mockUser = userEvent.setup();
        render(<Home />)
        const targetProduct = products[1];
        const decrementButton = screen.getByLabelText(`decrease ${targetProduct.name}`);
        const stockCard = decrementButton.closest("[data-testid='product-container']") as HTMLElement;

        expect(within(stockCard).getByText(/low stock/i)).toBeInTheDocument();
        await mockUser.click(decrementButton);
        expect(within(stockCard).getByText(/out of stock/i)).toBeInTheDocument();
        expect(within(stockCard).queryByText(/low stock/i)).not.toBeInTheDocument();
    })
})
