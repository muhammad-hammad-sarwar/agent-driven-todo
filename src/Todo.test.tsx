import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { Todo } from "./Todo";

describe("Todo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the todo component", () => {
    render(<Todo />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a todo...")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("adds a todo when clicking Add button", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.click(button);

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("adds a todo when pressing Enter key", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");

    fireEvent.change(input, { target: { value: "Walk the dog" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("does not add empty todo", () => {
    render(<Todo />);
    const button = screen.getByText("Add");

    fireEvent.click(button);

    expect(screen.queryByText("Buy groceries")).not.toBeInTheDocument();
  });

  it("does not add whitespace-only todo", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);

    expect(screen.queryByText("   ")).not.toBeInTheDocument();
  });

  it("does not add todo with only newlines", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "\n\t" } });
    fireEvent.click(button);

    expect(screen.queryByText("\n\t")).not.toBeInTheDocument();
  });

  it("allows multiple todos to be added", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "First todo" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Second todo" } });
    fireEvent.click(button);

    expect(screen.getByText("First todo")).toBeInTheDocument();
    expect(screen.getByText("Second todo")).toBeInTheDocument();
  });

  it("marks a todo as completed when checkbox is checked", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    const todoText = screen.getByText("Buy groceries");
    expect(todoText).toHaveStyle({ textDecoration: "none" });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(todoText).toHaveStyle({ textDecoration: "line-through" });
  });

  it("toggles a completed todo back to incomplete", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Walk the dog" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    const todoText = screen.getByText("Walk the dog");

    // Complete the todo
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(todoText).toHaveStyle({ textDecoration: "line-through" });

    // Mark as incomplete
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(todoText).toHaveStyle({ textDecoration: "none" });
  });

  it("independently toggles completion state for multiple todos", () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText("Enter a todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "First task" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Second task" } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(2);

    // Toggle only the first todo
    fireEvent.click(checkboxes[0]);

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();

    expect(screen.getByText("First task")).toHaveStyle({ textDecoration: "line-through" });
    expect(screen.getByText("Second task")).toHaveStyle({ textDecoration: "none" });
  });
});