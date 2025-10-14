import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";

describe("Card Components", () => {
  describe("Card", () => {
    it("renders with children", () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>,
      );
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<Card>Test Card</Card>);
      const card = container.querySelector("[data-slot='card']")!;
      expect(card).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <Card className="custom-class">Test Card</Card>,
      );
      const card = container.querySelector("[data-slot='card']")!;
      expect(card.classList.contains("custom-class")).toBe(true);
    });

    it("passes through additional props", () => {
      render(
        <Card data-testid="test-card" id="card-1">
          Test Card
        </Card>,
      );
      const card = screen.getByTestId("test-card");
      expect(card).toHaveAttribute("id", "card-1");
    });
  });

  describe("CardHeader", () => {
    it("renders with children", () => {
      render(
        <CardHeader>
          <div>Header content</div>
        </CardHeader>,
      );
      expect(screen.getByText("Header content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<CardHeader>Test Header</CardHeader>);
      const header = container.querySelector("[data-slot='card-header']")!;
      expect(header).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardHeader className="custom-header">Test Header</CardHeader>,
      );
      const header = container.querySelector("[data-slot='card-header']")!;
      expect(header.classList.contains("custom-header")).toBe(true);
    });
  });

  describe("CardTitle", () => {
    it("renders with children", () => {
      render(
        <CardTitle>
          <div>Title content</div>
        </CardTitle>,
      );
      expect(screen.getByText("Title content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<CardTitle>Test Title</CardTitle>);
      const title = container.querySelector("[data-slot='card-title']")!;
      expect(title).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardTitle className="custom-title">Test Title</CardTitle>,
      );
      const title = container.querySelector("[data-slot='card-title']")!;
      expect(title.classList.contains("custom-title")).toBe(true);
    });
  });

  describe("CardDescription", () => {
    it("renders with children", () => {
      render(
        <CardDescription>
          <div>Description content</div>
        </CardDescription>,
      );
      expect(screen.getByText("Description content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(
        <CardDescription>Test Description</CardDescription>,
      );
      const description = container.querySelector(
        "[data-slot='card-description']",
      )!;
      expect(description).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardDescription className="custom-description">
          Test Description
        </CardDescription>,
      );
      const description = container.querySelector(
        "[data-slot='card-description']",
      )!;
      expect(description.classList.contains("custom-description")).toBe(true);
    });
  });

  describe("CardContent", () => {
    it("renders with children", () => {
      render(
        <CardContent>
          <div>Content</div>
        </CardContent>,
      );
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<CardContent>Test Content</CardContent>);
      const content = container.querySelector("[data-slot='card-content']")!;
      expect(content).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardContent className="custom-content">Test Content</CardContent>,
      );
      const content = container.querySelector("[data-slot='card-content']")!;
      expect(content.classList.contains("custom-content")).toBe(true);
    });
  });

  describe("CardFooter", () => {
    it("renders with children", () => {
      render(
        <CardFooter>
          <div>Footer content</div>
        </CardFooter>,
      );
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<CardFooter>Test Footer</CardFooter>);
      const footer = container.querySelector("[data-slot='card-footer']")!;
      expect(footer).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardFooter className="custom-footer">Test Footer</CardFooter>,
      );
      const footer = container.querySelector("[data-slot='card-footer']")!;
      expect(footer.classList.contains("custom-footer")).toBe(true);
    });
  });

  describe("CardAction", () => {
    it("renders with children", () => {
      render(
        <CardAction>
          <div>Action content</div>
        </CardAction>,
      );
      expect(screen.getByText("Action content")).toBeInTheDocument();
    });

    it("has correct data-slot attribute", () => {
      const { container } = render(<CardAction>Test Action</CardAction>);
      const action = container.querySelector("[data-slot='card-action']")!;
      expect(action).toBeInTheDocument();
    });

    it("merges custom className correctly", () => {
      const { container } = render(
        <CardAction className="custom-action">Test Action</CardAction>,
      );
      const action = container.querySelector("[data-slot='card-action']")!;
      expect(action.classList.contains("custom-action")).toBe(true);
    });
  });

  describe("Complete Card Structure", () => {
    it("renders all card components together", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test Description</CardDescription>
            <CardAction>Test Action</CardAction>
          </CardHeader>
          <CardContent>Test Content</CardContent>
          <CardFooter>Test Footer</CardFooter>
        </Card>,
      );

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
      expect(screen.getByText("Test Action")).toBeInTheDocument();
      expect(screen.getByText("Test Content")).toBeInTheDocument();
      expect(screen.getByText("Test Footer")).toBeInTheDocument();
    });
  });
});
