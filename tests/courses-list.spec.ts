import { test } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('/')
	await page.getByText('Our better coursesНазвание ОписаниеДобавить').click()
	await page.getByRole('textbox', { name: 'Название' }).click()
	await page.getByRole('textbox', { name: 'Название' }).click()
	await page.getByRole('textbox', { name: 'Название' }).fill('beer')
	await page.getByRole('textbox', { name: 'Описание' }).click()
	await page.getByRole('textbox', { name: 'Описание' }).fill('beer')
	await page.getByRole('button', { name: 'Добавить' }).click()
	await page.getByRole('button', { name: 'Удалить' }).click()
})
