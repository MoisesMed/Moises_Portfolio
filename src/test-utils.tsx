import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

const theme = {
  backgroundColor: "#1d1d1d",
  backgroundSecondaryColor: "#2a2a2a",
  titleColor: "#e5e5e5",
  labelColor: "rgb(207, 207, 207)",
  strongColor: "rgb(97, 218, 251)",
};

interface RenderWithProvidersOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}

const renderWithProviders = (
  ui: ReactElement,
  { route = "/about", ...options }: RenderWithProvidersOptions = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </ThemeProvider>,
    options
  );

export { renderWithProviders, theme };
