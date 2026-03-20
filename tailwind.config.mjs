import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          'color-scheme': 'light',
          primary: 'oklch(63% 0.237 25.331)',
          'primary-content': 'oklch(100% 0 0)',
          secondary: 'oklch(71% 0.194 13.428)',
          'secondary-content': 'oklch(97% 0.014 254.604)',
          accent: 'oklch(58% 0.233 277.117)',
          'accent-content': 'oklch(96% 0.018 272.314)',
          neutral: 'oklch(44% 0.017 285.786)',
          'neutral-content': 'oklch(98% 0 0)',
          'base-100': 'oklch(98.7% 0.003 288.900)',
          'base-200': 'oklch(100% 0.001 286.375)',
          'base-300': 'oklch(92% 0.004 286.32)',
          'base-content': 'oklch(21% 0.006 285.885)',
          info: 'oklch(68% 0.169 237.323)',
          'info-content': 'oklch(97% 0.013 236.62)',
          success: 'oklch(72% 0.219 149.579)',
          'success-content': 'oklch(98% 0.018 155.826)',
          warning: 'oklch(79% 0.184 86.047)',
          'warning-content': 'oklch(98% 0.026 102.212)',
          error: 'oklch(57% 0.245 27.325)',
          'error-content': 'oklch(97% 0.014 343.198)',
        },
      },
      {
        dark: {
          'color-scheme': 'dark',
          primary: 'oklch(63% 0.237 25.331)',
          'primary-content': 'oklch(96% 0.018 272.314)',
          secondary: 'oklch(64% 0.246 16.439)',
          'secondary-content': 'oklch(94% 0.028 342.258)',
          accent: 'oklch(65% 0.241 354.308)',
          'accent-content': 'oklch(38% 0.063 188.416)',
          neutral: 'oklch(14% 0.005 285.823)',
          'neutral-content': 'oklch(92% 0.004 286.32)',
          'base-100': 'oklch(24.3% 0.016 252.420)',
          'base-200': 'oklch(0% 0 253.100)',
          'base-300': 'oklch(29% 0.012 254.090)',
          'base-content': 'oklch(97.807% 0.029 256.847)',
          info: 'oklch(74% 0.16 232.661)',
          'info-content': 'oklch(29% 0.066 243.157)',
          success: 'oklch(62% 0.194 149.214)',
          'success-content': 'oklch(37% 0.077 168.94)',
          warning: 'oklch(82% 0.189 84.429)',
          'warning-content': 'oklch(41% 0.112 45.904)',
          error: 'oklch(57% 0.245 27.325)',
          'error-content': 'oklch(27% 0.105 12.094)',
        },
      },
    ],
  },
}

export default config
