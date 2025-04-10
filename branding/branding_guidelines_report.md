# Branding Guidelines Report - Practical Spiritualism Co.

## Executive Summary

This report outlines the comprehensive branding system for Dawn Elgin's Practical Spiritualism Co. The design system emphasizes modern spirituality, sovereignty, and practical wisdom through a sophisticated and minimalist aesthetic that resonates with individuals seeking spiritual growth without sacrificing practicality. The brand combines earthy neutrals with modern elements to create an elevated and grounding digital experience.

## 1. Color System Analysis

### Primary Color Palette (60%)

- **Stone Gray** (#4A4A4A)
  - Primary brand color representing groundedness and wisdom
  - Used for main navigation, headers, and key UI elements
  - Color scale:
    - 100: #F7F7F7
    - 200: #E5E5E5
    - 300: #D4D4D4
    - 400: #A3A3A3
    - 500: #4A4A4A
    - 600: #3D3D3D
    - 700: #303030
    - 800: #232323
    - 900: #161616

### Secondary Color Palette (30%)

- **Warm Taupe** (#E5E0DB)
  - Supporting color representing comfort and authenticity
  - Used for backgrounds, text, and subtle accents
  - Color scale:
    - 100: #FFFFFF
    - 200: #F7F5F3
    - 300: #EFEAE7
    - 400: #E7E3DF
    - 500: #E5E0DB
    - 600: #D1CCC7
    - 700: #BDB8B3
    - 800: #A9A49F
    - 900: #95908B

### Accent Color Palette (10%)

- **Sage Mist** (#B7C4BC)
  - Used for interactive elements and calls-to-action
  - Creates natural harmony and balance
  - Color scale:
    - 100: #F4F6F5
    - 200: #E8EDEA
    - 300: #DCE3E0
    - 400: #D0D9D5
    - 500: #B7C4BC
    - 600: #9DAA A3
    - 700: #83908A
    - 800: #697671
    - 900: #4F5C58

## 2. Supporting Colors

### System Feedback Colors

- Success: #7B9B8A (Earth Success)

  - Light: #98B5A6
  - Default: #7B9B8A
  - Dark: #5E816E

- Warning: #C4B59F (Warm Stone)

  - Light: #D6CAB8
  - Default: #C4B59F
  - Dark: #B2A086

- Error: #B79F9F (Gentle Earth)

  - Light: #CAB8B8
  - Default: #B79F9F
  - Dark: #A48686

- Info: #9FB7B7 (Misty Gray)
  - Light: #B8CACA
  - Default: #9FB7B7
  - Dark: #86A4A4

## 3. Typography System

### Primary Font Family

- **Font**: "Tenor Sans"
  - **Weights**:
    - Regular (400)
  - **Usage**: Display text, headings, and brand name

### Secondary Font Family

- **Font**: "Karla"
  - **Weights**:
    - Regular (400)
    - Medium (500)
    - Bold (700)
  - **Usage**: Body text, navigation, buttons

### Typography Scale

- Display 1: 4rem (64px)
- Display 2: 3rem (48px)
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.75rem (28px)
- H4: 1.5rem (24px)
- Body Large: 1.25rem (20px)
- Body Base: 1rem (16px)
- Body Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

## 4. Gradient System

### Primary Gradients

```css
/* Hero Section Gradient */
background: linear-gradient(
  180deg,
  rgba(74, 74, 74, 0.05) 0%,
  rgba(229, 224, 219, 0.95) 100%
);

/* Overlay Gradient */
background: linear-gradient(
  180deg,
  rgba(74, 74, 74, 0.1) 0%,
  rgba(229, 224, 219, 0.98) 100%
);
```

### Secondary Gradients

```css
/* Earth Light Gradient */
background: linear-gradient(135deg, #e5e0db 0%, #ffffff 100%);

/* Sage Mist Gradient */
background: linear-gradient(
  180deg,
  rgba(183, 196, 188, 0.1) 0%,
  rgba(229, 224, 219, 0.95) 100%
);
```

## 5. Component Guidelines

### Buttons

- Primary: Stone Gray background with white text
- Secondary: Transparent with gray border
- Text: White or gray for contrast
- Border Radius: 0.25rem (4px)
- Padding: 1rem 2rem (16px 32px)

### Cards

- Background: White or Warm Taupe (#E5E0DB)
- Border: 1px solid rgba(74, 74, 74, 0.1)
- Border Radius: 0.375rem (6px)
- Box Shadow: 0 4px 16px rgba(74, 74, 74, 0.08)
- Padding: 2rem (32px)

### Form Elements

- Input Background: White
- Input Border: 1px solid rgba(74, 74, 74, 0.2)
- Focus Ring: 2px solid #4A4A4A
- Placeholder Text: rgba(74, 74, 74, 0.5)
- Border Radius: 0.25rem (4px)

## 6. Implementation Notes

### React Component Examples

```jsx
// Button Component
<Button
  variant="primary"
  className="bg-primary-500 text-white hover:bg-primary-600 font-medium px-8 py-4 rounded"
>
  Get Started
</Button>

// Card Component
<Card className="bg-secondary-100 border border-primary-100 rounded-md shadow-md p-8">
  {children}
</Card>

// Input Component
<Input
  className="w-full px-4 py-3 border border-primary-200 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
  placeholder="Your Email"
/>
```

### CSS Variables Implementation

```css
:root {
  /* Colors */
  --primary-500: #4a4a4a;
  --secondary-500: #e5e0db;
  --accent-500: #b7c4bc;

  /* Typography */
  --font-primary: "Tenor Sans", sans-serif;
  --font-secondary: "Karla", sans-serif;

  /* Spacing */
  --spacing-base: 1rem;
  --spacing-large: 2rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}
```

## 7. Accessibility Considerations

- All text maintains WCAG 2.1 AA contrast requirements
- Interactive elements have clear focus and hover states
- Form elements include proper labeling and aria attributes
- Images include descriptive alt text
- Navigation is keyboard accessible

## 8. Version Control

- Version: 1.0.0
- Last Updated: March 2024
- Based on: Practical Spiritualism Co. website (dawnelgin.com)
