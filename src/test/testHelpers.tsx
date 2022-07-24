import App from "../App";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store/configureStore";
import { BrowserRouter } from "react-router-dom";

export const renderApp = (customStore = store) => {
  return {
    user: userEvent.setup(),
    ...render(
      <BrowserRouter>
        <Provider store={customStore}>
          <App />
        </Provider>
      </BrowserRouter>
    ),
  };
};
