import { render } from "@testing-library/react";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import FilterTab from "../../components/FilterTab";
import { Provider } from "react-redux"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store;

describe("FilterTab tests", () => {
  beforeEach(() => {
    store = mockStore({
      app: {
        authors: [{

          firstname: "test",
          lastname: "foobar",
          email: "test"
        }],
      }
    });

  });

  test("Filter renders properly", () => {

    const { getByText } = render(
      <Provider store={store}>
        <FilterTab />
      </Provider>
    );

    expect(getByText('Filter by authors...')).toBeInTheDocument()

  });
});