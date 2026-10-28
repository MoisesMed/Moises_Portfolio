import { fireEvent, screen } from "@testing-library/react";
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
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(
      screen.getByRole("link", { name: "LinkedIn" })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/moises-medeiros/");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/MoisesMed"
    );
    expect(
      screen.getByRole("button", { name: "Switch to light mode" })
    ).toHaveTextContent("Light mode");
  });

  it("calls the theme handler when the mode button is clicked", () => {
    const handleChangeTheme = jest.fn();
    renderWithProviders(
      <NavBar isDarkTheme handleChangeTheme={handleChangeTheme} />
    );

    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));

    expect(handleChangeTheme).toHaveBeenCalledTimes(1);
  });

  it("closes the mobile menu when clicking outside the navbar", () => {
    const { container } = renderWithProviders(
      <NavBar isDarkTheme handleChangeTheme={() => {}} />
    );

    const menuButton = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Open navigation menu"]'
    );
    if (!menuButton) {
      throw new Error("Navigation menu button was not rendered.");
    }

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.pointerDown(document.body);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("does not close the menu when clicking inside the navbar", () => {
    const { container } = renderWithProviders(
      <NavBar isDarkTheme handleChangeTheme={() => {}} />
    );

    const menuButton = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Open navigation menu"]'
    );
    if (!menuButton) {
      throw new Error("Navigation menu button was not rendered.");
    }
    fireEvent.click(menuButton);

    fireEvent.pointerDown(
      screen.getByRole("button", { name: "Switch to light mode" })
    );

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });
});
