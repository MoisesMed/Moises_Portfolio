import { screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { renderWithProviders } from "../test-utils";

describe("NavBar", () => {
  it("renders main navigation links", () => {
    renderWithProviders(
      <NavBar isDarkTheme handleChangeTheme={() => {}} />
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
