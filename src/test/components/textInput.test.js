import { render } from "@testing-library/react";
import TextInput from "../../components/TextInput";

describe("TextInput component tests", () => {

    test("TextInput renders without failing", () => {

        const { getByText } = render(<TextInput label="Test label" />);

        expect(
            getByText("Test label")
        ).toBeInTheDocument();

    })
});