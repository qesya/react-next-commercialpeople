import { render, fireEvent } from "@testing-library/react";
import Select from "../../components/Select";

describe("Select component tests", () => {

    test("Select renders without failing", () => {
        const items = [{
            id: "magazine",
            label: "magazine"
        },
        {
            id: "book",
            label: "book"

        }]

        const { getByText } = render(<Select placeholder="Test placeholder" items={items} isOpen="true" />);

        fireEvent(
            getByText('Test placeholder'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        )

        expect(
            getByText("Test placeholder")
        ).toBeInTheDocument();

    })
});