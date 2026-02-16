import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import ScrollToTop from "../components/ScrollToTop";

describe("ScrollToTop", () => {
  it("scrolls to top on route change", () => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    const history = createMemoryHistory({ initialEntries: ["/about"] });

    render(
      <HistoryRouter history={history}>
        <ScrollToTop />
      </HistoryRouter>
    );

    expect(scrollToMock).toHaveBeenCalledTimes(1);

    act(() => {
      history.push("/contact");
    });

    expect(scrollToMock).toHaveBeenCalledTimes(2);
  });
});
