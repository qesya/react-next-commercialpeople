import { render } from "@testing-library/react";
import Card from "../../../src/components/Card";

describe("Card component tests", () => {

  test("Card renders without failing", () => {
    const data = {
        title: "Test book",
        ISBN: "1234-1234-1234"
    }
    
    const { getByText } = render(<Card data={data}/>);

    expect(
      getByText("Test book")
    ).toBeInTheDocument();

  });
});