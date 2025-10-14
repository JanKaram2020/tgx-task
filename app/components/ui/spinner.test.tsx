import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./spinner";

describe("Spinner Component", () => {
  it("renders with Loader2Icon", () => {
    const { container } = render(<Spinner />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("has correct role and aria-label", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  it("applies default animation classes", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector("svg")!;
    expect(spinner.classList.contains("size-4")).toBe(true);
    expect(spinner.classList.contains("animate-spin")).toBe(true);
  });

  it("merges custom className correctly", () => {
    const { container } = render(
      <Spinner className="custom-spinner w-8 h-8" />,
    );
    const spinner = container.querySelector("svg")!;
    expect(spinner.classList.contains("custom-spinner")).toBe(true);
    expect(spinner.classList.contains("w-8")).toBe(true);
    expect(spinner.classList.contains("h-8")).toBe(true);
  });

  it("passes through additional props", () => {
    render(<Spinner data-testid="test-spinner" id="spinner-1" />);
    const spinner = screen.getByTestId("test-spinner");
    expect(spinner).toHaveAttribute("id", "spinner-1");
  });

  it("overrides default size with custom className", () => {
    const { container } = render(<Spinner className="w-12 h-12" />);
    const spinner = container.querySelector("svg")!;
    expect(spinner.classList.contains("w-12")).toBe(true);
    expect(spinner.classList.contains("h-12")).toBe(true);
    expect(spinner.classList.contains("size-4")).toBe(true); // Still has default
  });
});
