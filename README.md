# Cancer Institute (WIA) Website Redesign

Design mockups for the Cancer Institute (WIA), Adyar website redesign project. This Next.js application showcases multiple design variations for stakeholder review and selection.

## Design Variations

The project includes four distinct design approaches:

- **Variation A: Minimal & Clean** - Whitespace-focused design emphasizing clarity and ease of navigation
- **Variation B: Editorial & Content-Rich** - Magazine-style layout with rich content presentation
- **Variation C: Modern Medical** - Contemporary healthcare aesthetic with professional feel
- **Variation D: Bold & Dynamic** - Vibrant, engaging design with strong visual impact

Each variation includes mockups for:
- Home page
- Department page (Medical Oncology example)
- Doctor Profile page
- Research page

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the mockup navigation hub.

## Project Structure

```
src/
├── app/
│   ├── variation-a/        # Minimal & Clean design
│   │   ├── home/
│   │   ├── department/
│   │   ├── doctor/
│   │   └── research/
│   ├── variation-b/        # Editorial & Content-Rich
│   ├── variation-c/        # Modern Medical
│   └── variation-d/        # Bold & Dynamic
├── components/
│   ├── MockupNav.tsx       # Shared navigation for switching between variations
│   └── variation-a/        # Variation A specific components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       └── Card.tsx
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#134795` | Headers, primary actions |
| Secondary Teal | `#23cdc0` | Accents, highlights |
| Accent Mint | `#ebf9f9` | Backgrounds, cards |

## Tech Stack

- **Framework:** Next.js 16.1.6
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** PT Sans Narrow

## License

Private - Cancer Institute (WIA), Adyar
