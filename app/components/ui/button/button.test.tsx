import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, buttonVariants as orgButtonVariants } from "./button";
import React from "react";
import { cn } from "~/lib/utils";

const buttonVariants = (...params: Parameters<typeof orgButtonVariants>) => {
  const classNames = orgButtonVariants(...params);

  return cn(classNames);
};

const LABEL = "Click Me";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button onClick={() => {}}>{LABEL}</Button>);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>{LABEL}</Button>);
    await userEvent.click(screen.getByText(LABEL));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        {LABEL}
      </Button>,
    );
    await userEvent.click(screen.getByText(LABEL));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies the correct variant and size classes", () => {
    const { container } = render(
      <Button variant="destructive" size="lg">
        {LABEL}
      </Button>,
    );
    const button = container.querySelector("button")!;
    const buttonClasses = Array.from(button.classList);
    const expectedClasses = buttonVariants({
      variant: "destructive",
      size: "lg",
    });

    expectedClasses.split(" ").forEach((cls) => {
      expect(buttonClasses.includes(cls)).toBe(true);
    });
  });

  it("merges custom className correctly", () => {
    const { container } = render(
      <Button className="custom-class">{LABEL}</Button>,
    );
    const button = container.querySelector("button")!;
    expect(button.classList.contains("custom-class")).toBe(true);
  });

  it("renders as a child element when asChild is true", () => {
    const { container } = render(
      <Button asChild>
        <a href="/public">{LABEL}</a>
      </Button>,
    );
    const anchor = container.querySelector("a")!;
    expect(anchor.textContent).toBe(LABEL);
  });

  it("applies default variant and size when none provided", () => {
    const { container } = render(<Button>{LABEL}</Button>);
    const button = container.querySelector("button")!;
    const buttonClasses = Array.from(button.classList);
    const expectedClasses = buttonVariants();
    expectedClasses
      .split(" ")
      .forEach((cls) => expect(buttonClasses.includes(cls)).toBe(true));
  });

  it("renders with icon size variants", () => {
    const sizes = ["icon", "icon-sm", "icon-lg"] as const;
    for (const size of sizes) {
      const { container, unmount } = render(
        <Button size={size}>{LABEL}</Button>,
      );
      const button = container.querySelector("button")!;
      const buttonClasses = Array.from(button.classList);
      const expectedClasses = buttonVariants({ size });
      expectedClasses
        .split(" ")
        .forEach((cls) => expect(buttonClasses.includes(cls)).toBe(true));
      unmount();
    }
  });
});
