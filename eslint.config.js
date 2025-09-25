import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
	// Global ignores - these will be ignored everywhere
	{
		ignores: [
			'**/node_modules/**',
			'**/.next/**',
			'**/dist/**',
			'**/build/**',
			'**/out/**',
			'**/coverage/**',
			'**/.git/**',
			'**/.vscode/**',
			'**/.idea/**',
			'**/tmp/**',
			'**/temp/**',
			'**/*.log',
			'**/.env*',
			'**/package-lock.json',
			'**/yarn.lock',
			'**/pnpm-lock.yaml',
			'**/*.config.js',
			'**/*.config.mjs',
			'**/*.config.cjs',
			'**/tailwind.config.js',
			'**/postcss.config.mjs',
			'**/next.config.ts',
			'**/jest.config.ts',
			'**/playwright.config.ts',
			'**/instrumentation*.config.ts',
			'**/prisma/migrations/**',
			'**/public/**'
		]
	},

	// Base JavaScript configuration
	js.configs.recommended,

	// TypeScript and React files configuration
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				React: 'readonly',
				JSX: 'readonly',
				console: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				// Browser APIs
				fetch: 'readonly',
				Request: 'readonly',
				Response: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				// DOM types
				HTMLElement: 'readonly',
				HTMLDivElement: 'readonly',
				HTMLInputElement: 'readonly',
				HTMLTextAreaElement: 'readonly',
				HTMLParagraphElement: 'readonly',
				HTMLSpanElement: 'readonly',
				SVGSVGElement: 'readonly',
				Element: 'readonly',
				Document: 'readonly',
				Window: 'readonly',
				window: 'readonly',
				document: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': ts
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' }
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-unused-vars': 'off',
			'no-undef': 'error'
		}
	},

	// Test files configuration
	{
		files: ['src/**/*.{spec,test}.{ts,tsx}', 'tests/**/*.{spec,test}.{ts,tsx}'],
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
			'no-undef': 'off'
		}
	}
]
