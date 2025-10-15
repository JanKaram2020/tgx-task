import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants as orgBadgeVariants } from "./badge";
import React from "react";
import { cn } from "~/lib/utils";

const badgeVariants = (...params: Parameters<typeof orgBadgeVariants>) => {
  const classNames = orgBadgeVariants(...params);
  return cn(classNames);
};

const Variants = ["default", "secondary", "destructive", "outline"] as const;

describe("Badge Component", () => {
  it("renders with default variant", () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("data-slot", "badge");
  });

  Variants.forEach((variant) => {
    it(`renders with ${variant} variant and applies the classes`, () => {
      const { container } = render(
        <Badge variant={variant}>Default Badge</Badge>,
      );
      const badge = container.querySelector("[data-slot='badge']")!;
      const badgeClasses = Array.from(badge.classList);
      const expectedClasses = badgeVariants({ variant });

      expectedClasses.split(" ").forEach((cls) => {
        expect(badgeClasses.includes(cls)).toBe(true);
      });
    });
  });

  it("merges custom className correctly", () => {
    const { container } = render(
      <Badge className="custom-class">Custom Badge</Badge>,
    );
    const badge = container.querySelector("[data-slot='badge']")!;
    expect(badge.classList.contains("custom-class")).toBe(true);
  });

  it("renders as a child element when asChild is true", () => {
    const { container } = render(
      <Badge asChild>
        <a href="/public">Link Badge</a>
      </Badge>,
    );
    const anchor = container.querySelector("a")!;
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("data-slot", "badge");
    expect(anchor.textContent).toBe("Link Badge");
  });

  it("renders as span by default", () => {
    const { container } = render(<Badge>Span Badge</Badge>);
    const span = container.querySelector("span")!;
    expect(span).toBeInTheDocument();
    expect(span).toHaveAttribute("data-slot", "badge");
  });

  it("passes through additional props", () => {
    render(
      <Badge data-testid="test-badge" id="badge-1">
        Test Badge
      </Badge>,
    );
    const badge = screen.getByTestId("test-badge");
    expect(badge).toHaveAttribute("id", "badge-1");
  });
});
