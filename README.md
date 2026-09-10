# North Star Bakery — Client Website

A four-page marketing and pre-order website built for a local bakery client as part of a client-website design project (Touchstone 5).

**Live site:** https://njanwari39.github.io/design-project/

## Pages

- **Home** (`index.html`) — hero intro, specialties grid, and a "Save as Favorite" preference tracker
- **Menu** (`menu.html`) — daily menu items
- **About** (`about.html`) — the bakery's story
- **Pre-Order** (`contact.html`) — pre-order form with client-side validation, plus a welcome audio message

Every page shares the same header / nav / footer shell, with the current page highlighted in the nav bar.

## Features

- **Responsive design** — a single CSS media query (`min-width: 768px`) switches the product-card grid from a stacked single column on mobile to a side-by-side row on larger screens
- **Interactive favorite tracker** — clicking "Save as Favorite" on any product card saves that item to `localStorage` and immediately updates a status banner; the saved preference persists across visits
- **Form validation** — the Pre-Order form validates a required name and a properly formatted email address before submitting, with inline error messages
- **Accessibility** — descriptive `alt` text on all images, `label`/`fieldset`/`legend` associations on form fields, and a high-contrast warm color palette

## Design System

| | |
|---|---|
| Colors | Cream `#FFF8F0` background, brown `#6B3E26` header/nav, peach `#D88C5A` accents, charcoal `#2F2A26` text |
| Headings | Poppins |
| Body text | Open Sans |

## Tech Stack

Plain HTML5, CSS3 (custom properties, flexbox, media queries), and vanilla JavaScript — no frameworks or build step.

## Project Presentation

See `Touchstone5_NorthStarBakery.pptx` for the project walkthrough (goals, design system, interactive feature, accessibility, and reflection).
