import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe('should change color', () => {
    it('button color to flow', () => {
        //render
        render(<App/>);

        //find button element
        const buttonElement = screen.getByRole("button", {name: /blue/i});

        // check inicial color
        expect(buttonElement).toHaveClass("red");

        // click the button
        fireEvent.click(buttonElement);

        // check the text red
        expect(buttonElement).toHaveTextContent(/red/i);
        
        // check the button color to blue
        expect(buttonElement).toHaveClass("blue");
    });
});