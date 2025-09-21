import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
	js.configs.recommended,
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'*.config.js',
			'*.config.mjs',
			'*.config.ts',
			'*.config.cjs',
			'coverage/**',
			'dist/**',
			'build/**',
			'out/**'
		]
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json'
			},
			globals: {
				React: 'readonly' // Для React
			}
		},
		plugins: {
			'@typescript-eslint': ts
		},
		rules: {
			// ваши правила
		}
	},
	{
		files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
		languageOptions: {
			globals: {
				describe: 'readonly',
				it: 'readonly',
				test: 'readonly',
				expect: 'readonly',
				jest: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				beforeAll: 'readonly',
				afterAll: 'readonly'
			}
		},
		rules: {
			'no-undef': 'off' // Отключаем проверку неопределенных переменных для тестов
		}
	},
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		languageOptions: {
			globals: {
				console: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				require: 'readonly',
				module: 'readonly',
				exports: 'readonly'
			}
		},
		rules: {
			'no-undef': 'off' // Отключаем проверку неопределенных переменных для CommonJS
		}
	}
]
