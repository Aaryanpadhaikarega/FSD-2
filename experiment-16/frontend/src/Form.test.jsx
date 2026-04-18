import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Form from "./Form";

describe("Form Test", () => {
  it("updates input value", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter name");

    fireEvent.change(input, { target: { value: "Aaryan" } });

    expect(screen.getByText("Aaryan")).toBeTruthy();
  });
});