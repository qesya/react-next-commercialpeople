import { render  } from "@testing-library/react";
import DataRow from "../../../src/components/DataRow";

describe("Card component tests", () => {

  test("Card renders without failing", () => {
    const data = {
        title: "Test book",
        isbn: "1234-1234-1234"

    }
    
    const { getByText} = render(<DataRow key="isbn" data={{ key: "isbn", value: "1234-1234-1234" }} />);

    expect(
      getByText("1234-1234-1234")
    ).toBeInTheDocument();

  });
});