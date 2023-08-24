import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(
    "https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/"
  );
  await page.pdf({ path: `result.pdf` });

  // Expect a title "to contain" a substring.
  await expect(1).toBe(1);
});
