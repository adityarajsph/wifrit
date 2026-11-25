# Codex UI Change Rules

> **Primary rule:** Follow the user's instructions and the supplied
> screenshots. Do not make changes outside the approved scope. When
> anything is unclear, stop and ask before editing.

## 1. Approval is required before every change

-   Before editing any file, inspect the relevant project structure and
    existing implementation.
-   Explain briefly what you plan to change, which files may be
    affected, and what will remain untouched.
-   **Ask for explicit approval before making changes every time**, even
    if the requested change appears small.
-   Do not treat an earlier approval as permission for future, unrelated
    changes.
-   If the request or screenshot leaves an important design or behavior
    detail unclear, ask one focused question instead of guessing.
-   Do not start implementation until the user approves the proposed
    scope.
-   After approval, stay strictly within that scope. If additional work
    becomes necessary, stop and ask again.

## 2. Screenshot-first UI implementation

-   Treat the user's supplied screenshot(s) as the primary visual
    reference.
-   Reproduce the reference as closely as the existing technology and
    project structure reasonably allow:
    -   layout, spacing, alignment, sizing and proportions;
    -   typography, font weights, line heights and text hierarchy;
    -   colors, backgrounds, borders, radii and shadows;
    -   icons, imagery, buttons, cards, navigation and other visible
        details;
    -   hover, focus, active, expanded and other visible interaction
        states when specified.
-   Do not replace the reference with a generic template or your own
    unrelated design idea.
-   Do not add unnecessary 3D effects, animations, gradients, glass
    effects or decorative elements unless the screenshot or user
    explicitly requests them.
-   If multiple screenshots are supplied, identify which page, viewport
    or state each represents. Preserve consistency between them.
-   If an exact asset, icon or font is unavailable, use the closest
    suitable existing project asset and mention the substitution.
-   Do not invent content to fill visual space.

## 3. Existing data must come from `data.ts`

-   Before changing UI, locate and inspect the existing `data.ts` file
    (including its actual path and exports).
-   Use the existing data from `data.ts` for content displayed in the
    UI, such as headings, descriptions, labels, navigation items, cards,
    statistics, testimonials and repeated lists, wherever those values
    are already represented there.
-   Do not hardcode a second copy of existing content inside components.
-   Do not change, remove, rename or restructure existing data or
    exports just to make the UI implementation easier.
-   Do not invent replacement data or silently alter the meaning of
    existing content.
-   If `data.ts` does not exist, or required content is missing from it,
    ask the user before creating the file, moving data, or introducing a
    new data source.
-   Keep data separate from presentation. Components should consume the
    existing data rather than become a new source of truth.
-   Preserve TypeScript types and existing data contracts.

## 4. Preserve SEO and existing page meaning

UI changes must not negatively affect SEO, accessibility or existing
page semantics.

-   Preserve existing page titles, meta descriptions, canonical URLs,
    robots directives, Open Graph and Twitter metadata, JSON-LD/schema
    markup, sitemap behavior and other SEO configuration.
-   Preserve URL paths, route names, redirects, internal links and
    server-rendering behavior unless the user explicitly approves a
    change.
-   Preserve meaningful semantic HTML: one clear primary `h1` per page
    where appropriate, correctly nested headings, landmarks, lists and
    descriptive links.
-   Do not replace meaningful text with images or icons.
-   Give informative images appropriate `alt` text; use empty alt text
    for purely decorative images.
-   Preserve crawlable text and links. Do not hide important content
    from search engines or users to achieve a visual effect.
-   Avoid unnecessary client-side rendering changes, layout shifts and
    heavy assets.
-   Do not remove existing structured data or metadata while editing
    components.
-   If a requested visual change appears to require an SEO-impacting
    change, explain the risk and ask before proceeding.

## 5. Responsive design is mandatory

Every changed page or component must work across common screen sizes:

-   Small mobile: approximately 320--375 px
-   Standard mobile: approximately 390--430 px
-   Tablet: approximately 768--1024 px
-   Laptop: approximately 1280--1440 px
-   Large desktop: 1600 px and wider

Requirements:

-   No horizontal overflow, clipped content, overlapping sections or
    off-screen controls.
-   No text collisions, broken navigation, distorted images or
    unexpectedly stretched components.
-   Use suitable responsive layouts, spacing, typography and
    breakpoints.
-   Stack, wrap, resize or reposition elements appropriately on smaller
    screens.
-   Keep buttons, links, menus and form controls usable on touch
    devices.
-   Respect safe areas where relevant.
-   Do not optimize only for the screenshot's desktop dimensions;
    preserve the reference's visual intent at other widths.
-   Do not introduce fixed widths or heights that break smaller screens.
    Use them only when justified by the design.

## 6. Visual quality and design consistency

The finished UI should look polished, intentional and production-ready.

-   Follow the project's existing design system, theme tokens, CSS
    variables and component conventions.
-   Keep colors, typography, spacing, radii, borders, shadows and icon
    styles consistent across the page.
-   Check text/background contrast in every supported theme.
-   Ensure icons have consistent size, stroke weight, alignment and
    visual style.
-   Use the project's existing icon library and components where
    possible. Do not mix random icon sets.
-   Align text and icons correctly; avoid emoji as substitutes for
    interface icons unless requested.
-   Maintain clear hierarchy and readable line lengths.
-   Prevent layout shifts, accidental element overlap, inconsistent card
    heights and uneven spacing.
-   Check light and dark themes if the project supports them. Do not
    break or silently remove either theme.
-   Use existing shared components instead of creating visually
    inconsistent duplicates.
-   Avoid excessive animation. Respect `prefers-reduced-motion` and keep
    motion smooth and purposeful.
-   Do not change the overall site theme, brand identity or unrelated
    sections unless the user explicitly asks.

## 7. Protect existing functionality and code

-   UI work must not break existing features, state, API calls, forms,
    validation, authentication, routing or business logic.
-   Prefer the smallest safe change that achieves the approved design.
-   Reuse existing components, hooks, utilities, styles and
    dependencies.
-   Do not rewrite files or components unnecessarily.
-   Do not change API contracts, database schemas, environment
    variables, authentication, authorization or backend logic for a
    UI-only request.
-   Do not install, remove or upgrade packages without asking first.
-   Do not delete files, assets, routes, exports, code or data unless
    the user explicitly approves.
-   Do not rename public components, props, exports, CSS classes relied
    on elsewhere or route segments without approval.
-   Do not add placeholder links, fake buttons, fabricated statistics or
    non-working interactions.
-   Keep existing working behavior intact, including keyboard and touch
    interactions.

## 8. Code quality and project conventions

-   Inspect `package.json`, framework configuration and nearby files
    before choosing an implementation.
-   Follow the project's current framework, language, folder structure,
    naming conventions and styling approach.
-   Do not introduce a new UI framework or styling system for a small
    design change.
-   Keep components maintainable and avoid unnecessary duplication.
-   Use existing TypeScript types; avoid `any` unless there is a clear,
    unavoidable reason.
-   Avoid unnecessary dependencies, excessive abstractions and
    speculative refactoring.
-   Do not leave debug logs, temporary code, dead code or test
    placeholders in the final changes.
-   Do not modify unrelated files merely to make formatting or cleanup
    changes.

## 9. Required workflow

Follow these steps for every UI request:

1.  **Inspect:** Read the relevant components, styles, assets,
    `data.ts`, routes and project conventions.
2.  **Compare:** Understand the screenshot and identify the exact
    differences from the current UI.
3.  **Plan:** List the intended visual changes and the files likely to
    be edited.
4.  **Ask:** Present the plan and wait for the user's explicit approval.
5.  **Implement:** Make only the approved changes.
6.  **Verify:** Run the relevant checks and inspect the result at
    mobile, tablet and desktop widths.
7.  **Report:** Summarize what changed, files edited, checks performed
    and any remaining limitations.

If screenshot comparison or browser preview tools are available, use
them to compare the implementation against the reference. Do not claim
that a visual check was completed if it was not.

## 10. Verification checklist

Before reporting completion, check all applicable items:

-   [ ] The result follows the supplied screenshot and approved scope.
-   [ ] Existing UI content is sourced from `data.ts` where applicable.
-   [ ] No unrelated sections or files were changed.
-   [ ] No existing functionality, route or API behavior was broken.
-   [ ] SEO metadata, semantic structure and structured data remain
    intact.
-   [ ] No overlapping elements, clipped text or horizontal overflow.
-   [ ] Mobile, tablet, laptop and desktop layouts are usable.
-   [ ] Theme colors, text contrast, typography and icons are
    consistent.
-   [ ] Buttons, links, menus and forms still work.
-   [ ] No unnecessary packages or dependencies were added.
-   [ ] Relevant lint, type-check and build commands pass, or failures
    are clearly reported.
-   [ ] No temporary debug logs or placeholder content remain.

## 11. Final response format

After implementation, report:

1.  **Completed:** A concise summary of the approved UI changes.
2.  **Files changed:** Exact file paths and a short reason for each.
3.  **Data source:** Confirm how existing `data.ts` content was reused.
4.  **SEO and functionality:** State what was preserved and disclose any
    risk or change.
5.  **Responsive verification:** List the screen sizes or preview
    methods actually checked.
6.  **Checks:** Report lint, type-check and build results accurately.
7.  **Limitations:** Mention anything that could not be verified.

Never say a check passed unless you actually ran it successfully.

------------------------------------------------------------------------

## Non-negotiable rules

1.  Ask before **every** change.
2.  Never edit beyond the approved scope.
3.  Use existing UI content from `data.ts`; do not duplicate or invent
    it.
4.  Match the supplied screenshot as closely as possible.
5.  Do not damage SEO, routes, existing functionality or business logic.
6.  Make every changed UI responsive and prevent overlap at all screen
    sizes.
7.  Keep the complete theme consistent: colors, text, icons, spacing and
    components.
8.  Inspect first, plan second, get approval third, edit only after
    approval.
