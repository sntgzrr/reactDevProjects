// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173'

test('app shows a text', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')

  const textContent = await text.textContent()

  console.log(textContent)
  await expect(textContent?.length).toBeGreaterThan(0)
})
