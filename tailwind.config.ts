import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { orbis: { gold: '#CDAA5A', deep: '#050505' } } } }, plugins: [] }
export default config
