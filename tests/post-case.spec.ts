import { test, expect } from "@playwright/test";

test("Can go to the post detail page", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("link", {
      name: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    })
    .click();

  await expect(page).toHaveURL(/\/posts\/\d+/);
});
