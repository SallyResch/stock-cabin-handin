import { render, screen } from '@testing-library/react';
import StockList from '@/components/StockList';
import { products } from '@/data/products';

describe("StockList renders all that is needed", () => {
    test("Renders StockCard for every product in the list", () => {
        render(<StockList products={products} />);
        const productCards = screen.getAllByTestId("product-container");
        //console.log(products.length)
        expect(productCards).toHaveLength(products.length);
    })
    test("renders a increment button for every stockCard", () => {
        render(<StockList products={products} />)
        const incrementButtons = screen.getAllByTestId("increment-button")
        //console.log(products.length)
        expect(incrementButtons).toHaveLength(products.length)
    })
    test("renders a decrement button for every stockCard", () => {
        render(<StockList products={products} />)
        const decrementButtons = screen.getAllByTestId("decrement-button")
        //console.log(products.length)
        expect(decrementButtons).toHaveLength(products.length)
    })
})