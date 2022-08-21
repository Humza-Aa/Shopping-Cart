import React from "react";
import "@testing-library/jest-dom";
import HomePage from "../HomePage";
import renderer from 'react-test-renderer'
import userEvent from "@testing-library/user-event";
import { render, cleanup, screen} from "@testing-library/react";

describe("Testing Item Display Div", () => {
    let itemNames = [];
    beforeEach(() => {
        itemNames = [{
            name: "Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone",
            imgSrc: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
            price: 430,
            key: 2,
            quantity: 0,
        }];
    });

    afterEach(cleanup);

    it('renders correctly', () => {
        const tree = renderer
          .create(<HomePage itemNames={itemNames}></HomePage>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it("Image correctly loaded", () => {
        const {getByTestId} = render(<HomePage itemNames={itemNames}></HomePage>)
        const imageSrc = getByTestId('itemImage').getAttribute('src')
        expect(imageSrc).toEqual('https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg');
    });
    it("Name correctly loaded", () => {
        const {getByTestId} = render(<HomePage itemNames={itemNames}></HomePage>)
        const itemName = getByTestId('itemName');
        expect(itemName).toHaveTextContent('Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone')
    });
})

describe("Test Shopping Cart Quantity", () => {
    let itemNames = [];
    beforeEach(() => {
        itemNames = [{
            name: "Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone",
            imgSrc: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
            price: 430,
            key: 2,
            quantity: 0,
        }];
    });
    it("Increasing Quantity", () => {
        const shoppingCartLenght = jest.fn();
        render(<HomePage itemNames={itemNames} addItem={shoppingCartLenght}></HomePage>)
        const button = screen.getByTestId('button');
        userEvent.dblClick(button);
        userEvent.dblClick(button);
        expect(shoppingCartLenght).toHaveBeenCalledTimes(4)
    });
});
