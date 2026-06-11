# Changelog & Deployment Record

All changes made to the Naples Pest Experts codebase are tracked below.

## [1.2.0] - 2026-06-11
### Added
- **"Why DIY Pest Control Fails in Naples Florida" Blog Post**: Created a comprehensive guide explaining why consumer products break down in Southwest Florida's humid climate.
  - File: `/src/pages/PostDIYPestControlFails.tsx`
  - Target URL: `/blog/why-diy-pest-control-fails-in-naples-florida-and-what-to-do-instead`
- **"Bed Bugs in Naples Hotels and Vacation Rentals" Blog Post**: Added safety transit and check-in inspection instructions for travelers and hosts.
  - File: `/src/pages/PostBedBugsHotels.tsx`
  - Target URL: `/blog/bed-bugs-in-naples-hotels-and-vacation-rentals-protect-yourself`
- **"Golden Gate Estates Pest Control" Blog Post**: Wrote an acreage-specific pest mitigation and barrier strategy article.
  - File: `/src/pages/PostGoldenGateEstates.tsx`
  - Target URL: `/blog/golden-gate-estates-pest-control-dealing-with-rural-florida-pests`
- **"How Naples New Construction Homes Can Prevent Termites" Blog Post**: Added pre-construction protective layer, baiting, and structural warranty guide.
  - File: `/src/pages/PostNewConstructionTermites.tsx`
  - Target URL: `/blog/how-naples-new-construction-homes-can-prevent-termites-from-day-one`

### Configured
- Registered all 4 new blog pages dynamic routes inside `src/App.tsx`.
- Updated index and grid previews within the blog selection directories of `src/pages/Blog.tsx` and `src/pages/Home.tsx`.
- Configured individual responsive SEO metadata titles and descriptions.
- Added premium `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` to `metadata.json` for compilation standards.
