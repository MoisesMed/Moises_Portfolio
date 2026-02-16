import { screen } from "@testing-library/react";
import Projects from "../pages/Projects";
import { renderWithProviders } from "../test-utils";

describe("Projects page", () => {
  it("renders the page title and description", () => {
    renderWithProviders(<Projects />);

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(
      screen.getByText("These are the projects I did in my spare time.")
    ).toBeInTheDocument();
  });
});
