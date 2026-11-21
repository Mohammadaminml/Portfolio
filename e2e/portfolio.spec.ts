import { expect, test } from "@playwright/test";

test.describe("Portfolio Core Flows", () => {
  test("redirects root to /fa with RTL direction and SEO metadata", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/fa$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("switches language to English with LTR direction", async ({ page }) => {
    await page.goto("/fa");
    await page.getByRole("link", { name: /EN/i }).click();
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  });

  test("navigates to projects and opens a Case Study detail page", async ({ page }) => {
    await page.goto("/fa/projects");
    await expect(page.locator("h1")).toContainText("مسئله");

    await page.getByRole("link", { name: /مطالعه جزئیات پروژه/i }).first().click();
    await expect(page).toHaveURL(/\/fa\/projects\/.+/);
    await expect(page.getByRole("heading", { name: "چه چیزی باید حل می‌شد؟" })).toBeVisible();
  });

  test("opens the AI Assistant chat dialog", async ({ page }) => {
    await page.goto("/fa");
    await page.getByRole("button", { name: /باز کردن دستیار هوشمند/i }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });
});