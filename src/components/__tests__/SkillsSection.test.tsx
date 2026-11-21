import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillsSection } from "../SkillsSection";

describe("SkillsSection", () => {
  it("renders Persian headings and accessible progressbars", () => {
    render(<SkillsSection locale="fa" />);

    expect(screen.getByRole("heading", { name: "مهارت‌های فنی" })).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Django")).toBeInTheDocument();

    const reactBar = screen.getByRole("progressbar", { name: "React" });
    expect(reactBar).toHaveAttribute("aria-valuenow", "100");
  });

  it("renders English headings when locale is en", () => {
    render(<SkillsSection locale="en" />);
    expect(screen.getByRole("heading", { name: "Technical Skills" })).toBeInTheDocument();
  });
});