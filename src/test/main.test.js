jest.mock("next/router")

import { render, screen } from "@testing-library/react";
import App from "../../pages/index";
import SearchPage from "../../pages/search"
import { useRouter } from 'next/router'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider, useDispatch, useSelector } from "react-redux"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


let store;

describe("Main App tests", () => {
  beforeEach(() => {
    store = mockStore({
      app: {
        list: []
      }
    });
  })


  test("Main App renders without failing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);

    expect(
      screen.getByRole("heading", { name: "Library App" })
    ).toBeInTheDocument();

  });

  test("Search page renders without failing", () => {

    useRouter.mockReturnValue(
      {
        query: {
          isbn: "test"
        }
      }
    )

    render(<Provider store={store}>
      <SearchPage />
    </Provider>);
    expect(
      screen.getByRole("heading", { name: "Search by ISBN" })
    ).toBeInTheDocument();
  });
});