# NB Advocacy Site - Comprehensive Audit Report

## Phase 1: Technology Stack
- **Framework**: Next.js 16.1.6 (App Router) with React 19.2.3
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion v12.36.0
- **Typography**: Google Fonts (Inter, Playfair Display)
- **Folder Structure**: 
  - `/app`: Next.js App Router structure with route-specific pages
  - `/components`: Reusable UI components
  - `/app/layout.tsx`: Root layout with metadata, fonts, and global styles
  - `/app/page.tsx`: Home page with hero section, metrics ticker, investigations feed, stats cards, and pillar sections
  - Route-specific pages under `/app/[route]/page.tsx` for healthcare, housing, economy, oligarchy
  - Components like DataCard, InvestigationsFeed, PageHeader, Timeline, etc. are shared across pages
- **Patterns Found**:
  - Client-side rendering (`"use client"` directive) used on home page for animations
  - Server components for most route pages (no `"use client"`)
  - Metadata export in each page route for SEO
  - Component composition with props drilling (e.g., PageHeader, DataCard reused extensively)
  - Use of Next.js Image component for optimization with remote patterns configured
  - CSS classes heavily utilizing Tailwind utility-first approach
  - Dark mode enforced via `className="dark"` on html element

## Phase 2: Architecture Issues
- **Misplaced Files**:
  - The `components` directory contains many page-specific components that could be co-located with their respective pages (e.g., `CaseStudy`, `QuoteBlock`, `VideoGrid`, `SourceCard` are imported only in specific route pages but live in shared components)
  - `LogoBar` component appears to be only used in oligarchy page but is in shared components
  - `MobileNav` component is imported in layout but not seen in the provided files (referenced but not read) - potential dead code if unused
- **Coupling Issues**:
  - Tight coupling between layout and specific route data: The layout contains hardcoded `navLinks` array that duplicates route information, making it brittle when routes change
  - Color semantics are inconsistent: `color` prop in DataCard uses string literals ('red', 'gold', 'neutral') instead of a centralized theme or constants
  - Content data (like `statsCards`, `recentEvents`, `housingData`, etc.) is defined directly in page components, mixing presentation with content data
  - Reusable components like `DataCard` accept raw string values for color, leading to potential typos and inconsistency
  - The `PageWrapper` component (used in route pages) is not provided in the read files, creating hidden dependency
- **Separation of Concerns Problems**:
  - Home page (`app/page.tsx`) contains large amounts of hardcoded content data (statsCards, recentEvents) mixed with presentation logic
  - Route pages contain both content data (arrays like `housingData`, `housingTimeline`) and JSX markup, violating separation of data and view
  - Styling concerns are mixed with semantic HTML (e.g., using `className` for both layout and visual states like `group-hover`)
  - Metadata is duplicated across pages with similar structure but no centralization
  - The `next.config.ts` sets `output: 'export'` for static export but also includes `images.unoptimized: true` which may conflict with optimization goals

## Phase 3: Code Quality
- **Duplicate Code Found**:
  - Similar card structures appear in multiple places: DataCard is used consistently, but there are custom card-like divs in route pages (e.g., in housing page's quote blocks, economy page's callout boxes) that duplicate styling and structure
  - The `Timeline` component is used in multiple pages with identical usage pattern but different data
  - Header patterns repeat: `PageHeader` is used consistently, but some pages add additional wrapping divs with similar background/padding patterns
  - CTA sections: Multiple pages use `CTASection` component with identical props structure
  - Video embedding: `VideoGrid` and `YouTubeEmbed` used similarly across pages
  - Source listings: `SourceCard` grid appears in multiple sections with same layout
- **Unused Imports/Dead Code**:
  - In `app/layout.tsx`: Import of `MobileNav` from "@/components/MobileNav" - if this component doesn't exist or isn't used, it's dead code
  - In `app/page.tsx`: Unused imports from lucide-react: `Activity, DollarSign, ArrowRight, ShieldAlert, Zap, FileSearch, AlertTriangle, Ban, Home, Calendar` - all are used in the JSX, so actually used
  - In `app/housing/page.tsx`: All lucide imports appear used
  - In `app/economy/page.tsx`: All lucide imports appear used
  - In `app/healthcare/page.tsx`: All lucide imports appear used
  - In `app/oligarchy/page.tsx`: All lucide imports appear used
  - In `components/DataCard.tsx`: No unused imports
  - In `components/InvestigationsFeed.tsx`: All imports used
  - In `components/PageHeader.tsx`: All imports used
  - In `components/Timeline.tsx`: Not provided but assumed used
  - **Potential dead code**: The `noise-overlay` div in layout.tsx is present but no corresponding CSS found in the provided files (globals.css not read) - may be orphaned if CSS missing
  - **Potential unused**: The `metadataBase` in layout.tsx is set but may not be fully utilized if not referenced elsewhere
  - **TypeScript issues**: Several files use `as const` assertions on literal types but may be redundant

## Phase 4: UI/UX Issues
- **Layout Problems**:
  - The home page hero section uses `min-h-[90vh]` which may cause issues on very small screens where content could be cut off
  - Fixed height images in housing page (`h-48 md:h-80`) may cause inconsistent aspect ratios and layout shift
  - The marquee ticker in home page uses `whitespace-nowrap` and `animate-marquee` (animation not defined in provided CSS) - may cause accessibility issues with moving text
  - Some sections use fixed padding values (`py-24`, `py-32`) that may not scale well across different screen sizes
  - The `prose` prose-invert classes are used for content sections but may not provide optimal line lengths for readability on large screens
  - In oligarchy page, the absolute positioned ship icon (`absolute top-0 right-0 p-4 opacity-5`) may overflow or cause layout issues on smaller screens
- **Accessibility Gaps**:
  - Missing `lang` attribute on html element? Actually present: `<html lang="en" className="dark">` - good
  - Skip link present: `<a href="#main-content" className="sr-only focus:not-sr-only ...">` - good
  - Some icons used as decorative elements lack `aria-hidden="true"` (e.g., in PageHeader, LogoBar, various lucide icons in buttons)
  - Color contrast: Crisis red text on black background may not meet WCAG AA/AAA ratios (needs verification)
  - Some interactive elements lack visible focus indicators (e.g., links in investigations feed rely only on group-hover:text-crisis-red)
  - Missing form labels and input elements not present in these pages, but if forms exist elsewhere, they may be missing
  - The `select` and `radio` components from lucide are used but may not have proper accessibility attributes
  - No visible skip to content link in some pages (only in layout)
  - Animated marquee may cause issues for users with vestibular disorders
  - Some text uses `text-[10px]` which may be too small for readability
  - Missing `alt` text on some images? Actually, most images have alt text provided (checked in home page hero image, housing hero image, etc.)
  - The `Image` component in next.js is used with `fill` property but may not have proper lazy loading by default
- **Responsive Issues**:
  - The home page hero section uses `text-6xl md:text-8xl lg:text-[10rem]` which may be excessively large on large screens
  - Grid layouts use fixed column counts (`md:grid-cols-2 lg:grid-cols-4`) that may not adapt well to very large or very small screens
  - Some sections use `max-w-5xl` or `max-w-6xl` which may leave excessive margins on large screens
  - The navbar becomes hidden on md and shows MobileNav, but MobileNav component not reviewed - may have issues
  - The investigations feed uses `grid gap-12` which may cause excessive spacing on large screens
  - Timeline component usage not reviewed but may have responsiveness issues

## Phase 5: Performance
- **Image Optimization Issues**:
  - Next.js Image component is used correctly with `fill` and `sizes="100vw"` in hero image
  - However, `next.config.ts` has `images: { unoptimized: true, remotePatterns: [...] }` which disables Next.js image optimization entirely - major performance issue
  - Remote patterns are limited to only two domains (static.cdnlogo.com, seeklogo.com) but many images are served from unsplash.com and other domains not listed - will cause build errors or fallback to unoptimized
  - Many `<img>` tags are used directly (not Next.js Image) in route pages (e.g., housing page hero image, economy page hero image, etc.) - missing optimization opportunities
  - No lazy loading explicitly set on images (though Next.js Image does lazy loading by default when not using `fill`? Actually, the hero image uses `fill` which disables lazy loading)
- **Re-render Problems**:
  - Home page uses `"use client"` and framer motion animations which may cause re-renders on route changes if not properly memoized
  - The `staggerContainer` and `fadeIn` variants are defined as constants but used correctly with motion components
  - No obvious misuse of useState or useEffect in the provided files (but not all files were read)
  - The `InvestigationsFeed` component maps over a static array - no performance issues there
  - The marquee ticker uses CSS animation which is performant
  - Some components may benefit from `React.memo` (e.g., DataCard, PageHeader) but not implemented
- **Missing Lazy Loading**:
  - As noted, Next.js Image optimization is disabled via `unoptimized: true`
  - Direct `<img>` tags have no loading attribute
  - No use of `loading="lazy"` on direct images
  - Background images (like the noise overlay) if present may not be optimized
- **Other Performance Issues**:
  - Large amounts of static data in page components (like statsCards, recentEvents) increase JavaScript bundle size
  - Multiple font loads: Inter and Playfair Display from Google Fonts - may cause FOUT/FOIT
  - No visible code splitting or dynamic imports for heavy components
  - The `noise-overlay` div if it's a large image or pattern could impact performance

## Phase 6: Broken Code
- **Import Errors/Missing Dependencies**:
  - Based on the provided files, all imports appear to resolve correctly (assuming the referenced files exist)
  - However, `MobileNav` is imported in layout but the file was not provided in the required list - may be missing
  - `PageWrapper`, `BackLink`, `CTASection`, `CaseStudy`, `QuoteBlock`, `VideoGrid`, `SourceCard`, `YouTubeEmbed`, `LogoBar` are used in route pages but not provided in required list - may be missing or assumed to exist
  - `Timeline` component is used but not provided in required list
  - The `globals.css` is imported in layout but not provided - may be missing Tailwind setup
  - The `next.config.ts` references remote patterns for images but many images in the code come from unsplash.com which is not listed - will cause Next.js build errors when optimizing images (though currently unoptimized)
  - The `animate-marquee` class is used in the ticker but no corresponding CSS animation is visible in provided files - may be missing
- **Incomplete Implementations**:
  - The `metadataBase` in layout is set to `new URL("https://reformnb.ca")` but may not be used correctly if the app is deployed elsewhere
  - The `openGraph` and `twitter` metadata are set but may be incomplete (missing images, etc.)
  - The `viewport` export is present but may not be sufficient for all devices
  - The `navLinks` in layout includes routes like `/infrastructure`, `/environment`, `/corruption`, `/intimidation`, `/take-action` but corresponding page files were not provided in required list - may be missing implementations
  - The `LogoBar` component in oligarchy page appears to be intended to show logos but implementation not reviewed
  - The `VideoGrid` and `YouTubeEmbed` components are used but not reviewed - may have missing implementations
  - The `SourceCard` component is used with various types (organization, pdf, report, article) but implementation not reviewed
  - The `CaseStudy` component is used with `type` prop but implementation not reviewed
  - The `QuoteBlock` component is used with `color` prop but implementation not reviewed
  - The `CTASection` component is used but implementation not reviewed
  - The `BackLink` component is used but implementation not reviewed

## Phase 7: Recommendations (Prioritized)
### CRITICAL (Must Fix Immediately)
1. **Enable Image Optimization**: 
   - Remove `output: 'export'` from next.config.ts if server-side rendering is needed, OR keep export but properly configure images
   - Set `images.unoptimized: false` and add all required domains to `remotePatterns` (unsplash.com, etc.)
   - Convert direct `<img>` tags to Next.js Image component where appropriate
   - File: `/home/nosyt/nb-advocacy-v3/next.config.ts`
   
2. **Fix Missing Dependencies**:
   - Verify existence of all imported components: MobileNav, PageWrapper, BackLink, CTASection, CaseStudy, QuoteBlock, VideoGrid, SourceCard, LogoBar, Timeline
   - Create missing components or remove unused imports
   - Ensure globals.css contains proper Tailwind base styles

3. **Accessibility Fixes**:
   - Add `aria-hidden="true"` to decorative icons
   - Ensure sufficient color contrast for crisis red text on black background
   - Add visible focus indicators to interactive elements
   - Consider reducing or removing animated marquee for accessibility

### HIGH (Should Fix Soon)
1. **Optimize Performance**:
   - Enable proper Next.js image optimization (addressed in critical)
   - Implement React.memo for reusable components (DataCard, PageHeader, etc.)
   - Consider code splitting for route pages with dynamic imports
   - Optimize Google Fonts loading (use `display: swap` subset)

2. **Improve Architecture**:
   - Move page-specific components from shared `/components` to colocate with routes (e.g., move CaseStudy, QuoteBlock to healthcare folder)
   - Extract hardcoded navLinks from layout to a central config file
   - Centralize color semantics (create constants or use Tailwind config colors)
   - Separate data from view: move content arrays (statsCards, recentEvents, etc.) to separate data files or CMS

3. **Fix UI/UX Issues**:
   - Replace fixed heights with responsive aspect ratio techniques
   - Ensure marquee animation respects prefers-reduced-media
   - Improve spacing and max-width values for better large screen experience
   - Add skip links to individual long sections if needed

### MEDIUM (Nice to Have)
1. **Code Quality Improvements**:
   - Remove duplicate code patterns (create more specific reusable components)
   - Audit and remove any truly unused imports (like MobileNav if not used)
   - Consider using TypeScript enums or union types for DataCard color prop instead of string literals
   - Add JSDoc comments to reusable components

2. **Enhance Metadata**:
   - Add dynamic image generation for open graph images
   - Implement structured data (JSON-LD) for better SEO
   - Add canonical URLs where needed

### OPTIONAL (Long-term)
1. **Advanced Features**:
   - Implement dark/light mode toggle (currently forced dark)
   - Add client-side search functionality for investigations
   - Implement service worker for offline capabilities
   - Add progress metrics or analytics tracking
   - Consider migrating to MDX for content-heavy pages

**Note**: This audit is based on the provided files only. A complete audit would require reviewing all files in the project.