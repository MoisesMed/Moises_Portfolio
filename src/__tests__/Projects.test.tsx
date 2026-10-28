import { screen } from "@testing-library/react";
import Projects from "../pages/Projects";
import { renderWithProviders } from "../test-utils";

describe("Projects page", () => {
  it("shows only the two production products and their landing pages", () => {
    renderWithProviders(<Projects />);

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Two products built for real clients and already in production."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "OrdemTec" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "NossoAtendimento" })
    ).toBeInTheDocument();
    expect(screen.getAllByText("In production")).toHaveLength(2);
    expect(
      screen.getAllByRole("link", { name: "Visit product website" })
    ).toHaveLength(2);
    expect(screen.queryByText("Minhas Tarefas")).not.toBeInTheDocument();
  });
});
