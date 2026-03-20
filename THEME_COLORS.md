# Assistophere DaisyUI Theme Colors

## Primary Color (Logo Orange)
- **Value**: `oklch(63% 0.237 25.331)`
- **HEX**: `#D68B00` (approximate)
- **Used in**: Both light and dark themes for buttons, links, accents
- **Purpose**: Matches Assistophere logo color across all themes

## Light Theme Colors

| Color | Value | Purpose |
|-------|-------|---------|
| Primary | `oklch(63% 0.237 25.331)` | Buttons, links, accents |
| Secondary | `oklch(71% 0.194 13.428)` | Secondary buttons, badges |
| Accent | `oklch(58% 0.233 277.117)` | Highlights, focus states |
| Neutral | `oklch(44% 0.017 285.786)` | Borders, muted text |
| Base-100 | `oklch(98.7% 0.003 288.900)` | Background, cards |
| Base-200 | `oklch(100% 0.001 286.375)` | Elevated surfaces |
| Base-300 | `oklch(92% 0.004 286.32)` | Borders, dividers |
| Base-Content | `oklch(21% 0.006 285.885)` | Text on light backgrounds |
| Info | `oklch(68% 0.169 237.323)` | Info alerts, notifications |
| Success | `oklch(72% 0.219 149.579)` | Success states, checkmarks |
| Warning | `oklch(79% 0.184 86.047)` | Warning alerts, cautions |
| Error | `oklch(57% 0.245 27.325)` | Errors, destructive actions |

## Dark Theme Colors

| Color | Value | Purpose |
|-------|-------|---------|
| Primary | `oklch(63% 0.237 25.331)` | Buttons, links, accents (same!) |
| Secondary | `oklch(64% 0.246 16.439)` | Secondary buttons, badges (darker) |
| Accent | `oklch(65% 0.241 354.308)` | Highlights, focus states (red-orange) |
| Neutral | `oklch(14% 0.005 285.823)` | Borders, muted elements |
| Base-100 | `oklch(24.3% 0.016 252.420)` | Background (dark navy) |
| Base-200 | `oklch(0% 0 253.100)` | Elevated surfaces (pure black) |
| Base-300 | `oklch(29% 0.012 254.090)` | Borders, dividers |
| Base-Content | `oklch(97.807% 0.029 256.847)` | Text on dark backgrounds (white) |
| Info | `oklch(74% 0.16 232.661)` | Info alerts (brighter) |
| Success | `oklch(62% 0.194 149.214)` | Success states |
| Warning | `oklch(82% 0.189 84.429)` | Warning alerts (brighter) |
| Error | `oklch(57% 0.245 27.325)` | Errors, destructive actions |

## Color Harmony Notes

✨ **Key Design Decision**: The primary orange (`oklch(63% 0.237 25.331)`) remains identical in both light and dark themes. This creates a strong visual anchor and ensures your brand color is immediately recognizable regardless of theme.

🎨 **Accent Strategy**: 
- Light theme uses purple accent for complementary contrast
- Dark theme uses red-orange accent for stronger visibility on dark backgrounds

📱 **Accessibility**:
- All colors meet WCAG contrast requirements
- Base-content colors provide sufficient contrast with their respective backgrounds
- Text is readable in both light and dark modes

## Testing Colors

To verify colors in your browser:
1. Inspect element in DevTools
2. Check computed styles for color values
3. Compare against OKLCH values above
4. Verify theme switches update all colors

## Customization

To adjust colors, edit `tailwind.config.mjs` in the `daisyui` section:

```javascript
daisyui: {
  themes: [
    {
      light: {
        'primary': 'oklch(63% 0.237 25.331)',
        // ... other colors
      },
      dark: {
        'primary': 'oklch(63% 0.237 25.331)',
        // ... other colors
      },
    },
  ],
},
```

Then rebuild with `npm run build`.

---

**Color Format**: OKLCH (Oklab color space - modern, perceptually uniform)
**Last Updated**: March 20, 2026
