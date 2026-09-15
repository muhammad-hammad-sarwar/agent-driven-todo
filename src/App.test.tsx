import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the todo component", () => {
    render(<App />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a todo...")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});