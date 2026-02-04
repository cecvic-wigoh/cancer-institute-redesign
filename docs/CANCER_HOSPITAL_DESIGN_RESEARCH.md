# Cancer Hospital Website Design Research

## Executive Summary

This document analyzes design patterns from the world's leading cancer hospitals to inform the Cancer Institute (WIA) website redesign. Research focused on MD Anderson Cancer Center, Memorial Sloan Kettering Cancer Center, Mayo Clinic Cancer Center, Dana-Farber Cancer Institute, and the National Cancer Institute.

---

## Top Cancer Hospital Website Analysis

### 1. MD Anderson Cancer Center (mdanderson.org)

**Ranking**: #1 U.S. News & World Report for 36 consecutive years

**Key Design Patterns:**
- Fixed top navigation bar with utility links (MyChart, appointment requests)
- Hero section with prominent CTAs and credibility markers
- Multi-level dropdown navigation with 7 primary categories
- Separate faculty directory for doctor profiles

**Color Palette:**
- Primary Red: `#d82c27` (CTAs, accent buttons)
- Dark Navy: `#3361ad` (secondary CTAs, links)
- Black: `#000` (text, navigation)
- Light Gray: `#f2f2f2` (backgrounds)

**Typography:**
- Clean sans-serif fonts (Univers family)
- Condensed bold for navigation
- Serif accents for decorative headers

**Navigation Structure:**
- Desktop: Horizontal dropdown with smooth hover states
- Mobile: Slide-out drawer (375px width) with animated transitions
- Breakpoint: 992px

---

### 2. Memorial Sloan Kettering Cancer Center (mskcc.org)

**Key Design Patterns:**
- Hero-driven design with patient care imagery
- Modular card-based content organization
- Phone number prominently displayed (646-926-0945)
- "Let's get started" quick access section

**Color Palette:**
- Clean whites and grays
- Dark navy accents
- Consistent blue links

**Navigation:**
- Mega-menu system with hierarchical organization
- Descriptive text under each menu item
- Disease-specific filtering for doctor search

**Patient-First Features:**
- Multi-language support (Spanish, Russian, Arabic, 9+ languages)
- Telemedicine availability emphasized
- Location-based navigation
- Dual contact approach (phone + web forms)

---

### 3. Mayo Clinic Cancer Center (mayoclinic.org)

**Key Design Patterns:**
- Semantic breadcrumb navigation with schema.org markup
- Dual-mode system (light/dark themes)
- Sophisticated search with autocomplete

**Color Palette:**
- Light mode: White `#ffffff` with navy `#0057b8`
- Dark mode: Dark `#080808` with light text
- Signal colors: Error `#e4002b`, Success `#008746`

**Typography System:**
- Display fonts for emphasis
- Sans-serif for body content
- Responsive sizing (12px to 76px)
- Font weights: 300 (light), 400 (regular), 700 (bold)

**Responsive Breakpoints:**
- 22.4em, 37.5em, 56.56em, 90em
- 8px base spacing system (0.5x to 64x multipliers)

---

### 4. Dana-Farber Cancer Institute (dana-farber.org)

**Key Design Patterns:**
- Hero-first design with prominent CTA
- Mega-menus organized by audience (Patients, Physicians, Researchers)
- Six quick-action tiles for key patient needs
- Card-based content layouts

**Color Palette:**
- Dana-Farber Blue: `rgb(0, 98, 155)`
- Orange accent: `rgb(255, 163, 0)` (hover states)
- Neutral grays: `rgb(77, 77, 79)` (body text)

**Quick-Action Cards:**
1. Find a Doctor
2. Appointments
3. Clinical Trials
4. Locations
5. Patient Portals
6. Care Resources

**Image Standards:**
- Featured images: 600x368px
- Headlines truncated at ~100 characters

---

### 5. National Cancer Institute (cancer.gov)

**Key Design Patterns:**
- Bifurcated audience approach (Patients vs Researchers)
- Sticky header with search prioritization
- Multiple contact modalities (phone, chat, email)

**Navigation Structure:**
- 5 main categories: About Cancer, Cancer Types, Research, Grants & Training, News & Events
- 1-800-4-CANCER prominently featured

**Accessibility Features:**
- Language toggle (English/Spanish)
- Cancer terminology dictionary
- High-contrast text
- Multiple contact options

---

## Common Design Patterns Across All Sites

### 1. Navigation

| Pattern | Implementation |
|---------|---------------|
| Fixed/Sticky Header | Always visible navigation bar |
| Mega-Menus | Multi-column dropdowns with descriptions |
| Breadcrumbs | Clear location hierarchy |
| Search | Prominent placement with autocomplete |
| Mobile Drawer | Slide-out navigation for mobile |

### 2. Homepage Structure

```
┌─────────────────────────────────────┐
│ Utility Bar (MyChart, Language, Donate) │
├─────────────────────────────────────┤
│ Main Navigation                      │
├─────────────────────────────────────┤
│ Hero Section with Primary CTA       │
├─────────────────────────────────────┤
│ Quick Access Cards (4-6 items)      │
├─────────────────────────────────────┤
│ Featured Content/News               │
├─────────────────────────────────────┤
│ Credibility Markers (Rankings)      │
├─────────────────────────────────────┤
│ Footer with Redundant Navigation    │
└─────────────────────────────────────┘
```

### 3. Color Palettes

All top cancer hospitals use:
- **Primary**: Deep blue or navy (trust, professionalism)
- **Accent**: Teal, orange, or red (CTAs, highlights)
- **Neutral**: White, light gray (backgrounds)
- **Text**: Dark gray or black (readability)
- **Signal**: Red (urgent), Green (success)

### 4. Typography

- **Headlines**: Bold, clean sans-serif
- **Body**: Regular weight, high readability
- **Navigation**: Condensed or uppercase for distinction
- **Line height**: 1.5-1.6 for body text
- **Size range**: 14px-48px for responsive scaling

### 5. Call-to-Action Patterns

| Location | CTA Type |
|----------|----------|
| Header | Appointment, Phone Number |
| Hero | Primary action (appointments/contact) |
| Sidebar | Secondary actions (find doctor, resources) |
| Content | Inline links to related services |
| Footer | Contact information, social media |

### 6. Doctor Profile Pages

Common elements:
- Professional headshot
- Name and title prominently displayed
- Specialty/subspecialty
- Languages spoken
- Education and training
- Board certifications
- Research interests
- Publications
- Patient reviews (some sites)
- Appointment booking CTA

### 7. Department/Service Pages

Structure:
1. Hero with department name and brief description
2. Services offered (card grid)
3. Treatment approaches
4. Team/physicians
5. Patient resources
6. Contact information
7. Related content

---

## Key UX Principles for Cancer Hospital Websites

### 1. Reduce Anxiety Through Design

- Use **calming colors** (blues, teals, soft greens)
- Provide **generous white space**
- Employ **clear, readable typography**
- Avoid overwhelming information density

### 2. Prioritize Patient Actions

- **Appointment booking** within 1-2 clicks
- **Phone numbers** always visible
- **Multiple contact options** (phone, chat, form)
- **Location finder** easily accessible

### 3. Build Trust

- Display **rankings and awards**
- Showcase **physician credentials**
- Include **patient testimonials** (when appropriate)
- Use **real photography** over stock images

### 4. Ensure Accessibility

- **WCAG 2.1 AA compliance** minimum
- **Language options** for diverse populations
- **Screen reader compatibility**
- **Keyboard navigation support**
- **High contrast** text and backgrounds

### 5. Mobile-First Approach

- **Responsive design** for all devices
- **Touch-friendly** targets (44px minimum)
- **Fast loading** times
- **Simplified navigation** on mobile

---

## Recommendations for Cancer Institute (WIA)

### Design Direction

Based on this research, the Cancer Institute (WIA) website should adopt:

1. **Color Palette**
   - Keep existing brand colors (Primary #134795, Secondary #23cdc0)
   - These align well with the calming, trustworthy palettes of top hospitals
   - Accent #ebf9f9 works well for backgrounds

2. **Navigation**
   - Implement sticky header with utility bar
   - Use mega-menus for complex navigation
   - Include prominent search functionality
   - Add breadcrumb navigation on subpages

3. **Homepage**
   - Hero section with clear value proposition
   - Quick access cards (Find Doctor, Appointments, Departments, Research)
   - Featured news/research section
   - Credibility markers and trust signals

4. **Doctor Profiles**
   - Professional photo with consistent styling
   - Clear credential display
   - Tabbed content (About, Experience, Publications, Reviews)
   - Prominent appointment CTA

5. **Department Pages**
   - Service overview with visual hierarchy
   - Team listing with photos
   - Treatment information
   - Patient resources
   - Contact information

6. **Technical Implementation**
   - Mobile-first responsive design
   - WCAG 2.1 AA accessibility
   - Fast page load times (<3 seconds)
   - Semantic HTML structure

---

## Sources

- [Webstacks - Hospital Website Designs 2025](https://www.webstacks.com/blog/hospital-website-designs)
- [Webstacks - Healthcare UX Design 2025](https://www.webstacks.com/blog/healthcare-ux-design)
- [Digital Silk - Healthcare Website Design Examples 2026](https://www.digitalsilk.com/digital-trends/best-healthcare-website-design-examples/)
- [Raddito - Oncology Website Design Services 2025](https://raddito.com/blogs/best-oncology-website-design-services-for-cancer-centers/)
- [Adchitects - Healthcare Web Design Best Practices 2025](https://adchitects.co/blog/web-design-for-healthcare-best-practices-and-guidelines)
- [Kanopi - Hospital Web Design](https://kanopi.com/blog/hospital-web-design/)
- MD Anderson Cancer Center (mdanderson.org)
- Memorial Sloan Kettering Cancer Center (mskcc.org)
- Mayo Clinic Cancer Center (mayoclinic.org)
- Dana-Farber Cancer Institute (dana-farber.org)
- National Cancer Institute (cancer.gov)
