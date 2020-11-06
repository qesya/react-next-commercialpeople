import { render, fireEvent} from "@testing-library/react";
import { within } from '@testing-library/dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import AddTab from "../../components/AddTab";
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
    const {getByTestId} = render(
      <Provider store={store}>
        <AddTab />
      </Provider>
    );

    const { getByText } = within(getByTestId('save-button'))
    fireEvent(
        getByText('Save & Export to CSV'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
    expect(getByText('Save & Export to CSV')).toBeInTheDocument()
  });
});