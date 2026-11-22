import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsSection from "../SkillsSection";

describe("SkillsSection", () => {
  it("renders Persian headings and skill badges", () => {
    render(<SkillsSection locale="fa" />);

    expect(
      screen.getByRole("heading", { name: "مهارت‌های فنی" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "مهندسی فرانت‌اند" })
    ).toBeInTheDocument();
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders English headings when locale is en", () => {
    render(<SkillsSection locale="en" />);

    expect(
      screen.getByRole("heading", { name: "Skills & Expertise" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Frontend Engineering" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Backend & Databases" })
    ).toBeInTheDocument();
  });
});