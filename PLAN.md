# Katherine Wong Writing Website — MVP Plan

## Project goal

Build a simple, elegant personal writing website inspired by the clarity of [Angie Sijun Lou's website](https://www.angiesijunlou.com/), while establishing a foundation that can support more visual polish and functionality later.

The MVP will contain:

- A home page
- An About page
- A Writing page
- An external link to Katherine's StoryGraph profile
- A Contact page
- A shared header with a logo or wordmark that links to the home page

Writing will be an organized list of links to work published elsewhere. The website will not host full essays or operate as a blog.

## Proposed architecture

```text
Cloudflare
  ├── Domain registration
  └── Authoritative DNS
          │
          ▼
Vercel
  ├── Production hosting
  ├── HTTPS
  └── Preview deployments
          ▲
          │ Git pushes
GitHub repository
          ▲
          │
Astro static site
  ├── Pages and shared components
  ├── Plain CSS and static assets
  └── Structured publication data
```

### Technology choices

- **Astro:** Generates a fast, mostly static site while allowing reusable layouts and components.
- **Plain CSS:** Keeps the initial implementation lightweight and gives the visual design room to develop without adopting a UI framework.
- **Structured publication data:** Writing entries will be maintained as data and rendered consistently. No Markdown essay collection, database, or CMS is needed for the MVP.
- **Git and GitHub:** Provide version control, a remote source of truth, and the source used by Vercel deployments.
- **Vercel:** Hosts production and preview deployments and provisions HTTPS for the custom domain.
- **Cloudflare Registrar and DNS:** Registers the domain and maintains the authoritative DNS records that point it to Vercel.

This division keeps the website portable: the static Astro output can be moved to another host later without rebuilding the content or design.

## Site structure

```text
/             Home
/about/       Biography and portrait
/writing/     Organized links to external publications
/contact/     Email contact information
```

StoryGraph will be an external navigation link rather than an internal route.

The logo or wordmark in the upper-left corner will link to `/` from every internal page. About and Writing will be normal page links, not interface tabs.

## Writing content model

Each publication entry should be able to contain:

- `title`
- `publication`
- `category`
- `publicationDate` or display date, when useful
- `externalUrl`
- `description`, when useful
- `featured`, if featured work is introduced later

The initial categories and exact ordering will be determined from the writing list Katherine provides. Entries will link directly to their external publication pages. The architecture will not include routes for full essays.

## Implementation plan

### 1. Initialize the project

- Create a minimal Astro project in the current folder.
- Initialize Git immediately and add an appropriate `.gitignore`.
- Confirm the local development server and production build work.
- Install only dependencies required by an agreed feature.

### 2. Establish the shared site structure

- Create a global layout.
- Add the linked logo or name-based wordmark in the upper-left.
- Add navigation links for About, Writing, StoryGraph, and Contact.
- Display the shared header on every internal page.
- Make the header and navigation responsive.
- Decide whether StoryGraph should open in the same tab or a new tab. If it opens a new tab, include the appropriate security attributes and an accessible indication that it is external.

### 3. Build the home page

- Introduce Katherine's name or visual identity.
- Present the four destinations clearly.
- Use temporary content only where final copy or assets have not yet been supplied.

### 4. Build the About page

- Add the supplied biography and portrait.
- Optimize the portrait for the web and provide meaningful alternative text.
- Add contact, social, representation, location, or other details only if desired.

### 5. Build the Writing page

- Add the supplied publication list as structured data.
- Organize entries using the agreed categories and order.
- Render each entry consistently with its title, publication, and any other desired metadata.
- Ensure external links are accessible and clearly interactive.
- Do not add essay pages, blog infrastructure, or a CMS.

### 6. Connect StoryGraph

- Add Katherine's StoryGraph profile URL to the shared navigation and any agreed home-page treatment.
- Confirm the external link works and is presented consistently.

### 7. Add the Contact page

- Display Katherine's writing email address as a direct email link.
- Keep Contact last in the shared navigation and home-page destination list.

### 8. Develop the visual direction

- Discuss and choose typography, colors, spacing, layout, logo treatment, and interaction details.
- Implement responsive designs for mobile and desktop.
- Add animation only where it supports the agreed design.
- Maintain visible keyboard focus states, sufficient contrast, and reduced-motion behavior where relevant.

### 9. Add launch essentials

- Unique page titles and descriptions
- Social-sharing metadata and image
- Favicon and other agreed identity assets
- Canonical URLs once the final domain is known
- Sitemap and `robots.txt`
- Custom 404 page
- Semantic HTML, keyboard navigation, descriptive link text, and accessibility checks

The favicon and social-sharing image are deferred until those identity assets are available. Canonical URLs and the sitemap use the final `katherinevwong.com` domain.

### 10. Verify locally

- Run the production build.
- Check all internal and external links.
- Test common mobile and desktop viewport sizes.
- Test keyboard navigation and focus behavior.
- Check representative browsers.
- Confirm that core navigation and content work without unnecessary client-side JavaScript.

### 11. Create and connect the GitHub repository

- Create the GitHub repository, initially private if desired.
- Authenticate or authorize GitHub access if it is not already configured.
- Connect the local Git repository to the GitHub remote.
- Push the existing commit history.

### 12. Deploy to Vercel

- Import the GitHub repository into Vercel.
- Verify the temporary `vercel.app` deployment.
- Confirm that pushes trigger production deployments and branches or pull requests can generate previews.

### 13. Purchase the domain through Cloudflare Registrar

- Confirm the chosen domain's registration and renewal prices.
- Purchase it when the name is finalized. This may happen earlier if reserving the exact name is time-sensitive.
- Keep Cloudflare as the authoritative DNS provider, as required for domains registered there.

### 14. Connect the custom domain

- Add the apex domain and `www` hostname to the Vercel project.
- Choose one as canonical and redirect the other.
- Read the exact A, CNAME, or verification records provided by Vercel.
- Add those records through the Cloudflare DNS dashboard.
- Keep in mind that this may require copying records manually even if an automated connection option is offered.

### 15. Perform final production verification

- Confirm DNS resolution and HTTPS on the real domain.
- Confirm the canonical-domain redirect.
- Recheck navigation, external links, images, metadata, social previews, accessibility, and mobile presentation.
- Confirm that a new GitHub push successfully updates the production site.

## Deferred until there is a concrete need

- A blog or full-text essay system
- Markdown or MDX content collections for essays
- A database
- A content management system
- Authentication or user accounts
- Server-side rendering
- A JavaScript UI framework such as React
- Newsletter integration
- Analytics
- An extensive animation system

These can be evaluated later without changing the core domain, DNS, repository, or hosting arrangement.

## Inputs still needed

- Final name, logo, or wordmark direction
- Home-page copy, if any
- Biography
- Portrait and preferred alternative-text description
- Writing entries, categories, and desired ordering
- StoryGraph profile URL
- Contact and social links to include, if any
- Visual references and preferences for typography, color, and motion
- Final domain choice
