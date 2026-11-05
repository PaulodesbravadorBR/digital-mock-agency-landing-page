# Mock Agency — Corporate Website

A conceptual corporate website developed to demonstrate an approach that brings together **e-commerce management, digital strategy, SEO, content, visual identity, and front-end development**.

The goal was not simply to create an attractive layout. The project considers how design, messaging, information architecture, search visibility, user experience, and conversion can work together to support a business's digital presence.

## Project Overview

Mock Agency is a conceptual digital agency website with original visual direction and English-language content. It presents three main service areas:

- **Brand Identity:** brand development, visual identity, logo, color palette, and consistency across digital channels.
- **Web Design & Development:** responsive websites, user experience, performance, and SEO best practices.
- **Paid Traffic & Digital Marketing:** digital campaigns, lead generation, email marketing, analytics, and optimization.

The website also explains the agency's working approach through four stages: strategy, creative execution, measurable results, and long-term partnership.

## Project Goals

- Build a professional digital presence for a digital agency.
- Organize services and value propositions into a clear content hierarchy.
- Develop service descriptions around relevant topics and search terms.
- Apply on-page SEO fundamentals, including page title, meta description, heading structure, and descriptive content.
- Create a responsive experience for desktop and mobile devices.
- Use interactions and animations to support the experience without making the content dependent on visual effects.
- Make it easy for visitors to get in touch through calls to action and a floating contact widget.

## Content Strategy and On-Page SEO

The content was planned around a simple principle: a corporate website should clearly communicate what a business does, who it serves, and the value it provides.

For that reason, the copy is more than a visual element. It introduces the services, explains their benefits, and uses relevant terminology to make the agency's offering clear to both visitors and search engines.

Topics and keywords addressed in the website include:

- Digital marketing agency
- Brand identity
- Web design and development
- Responsive websites
- SEO best practices
- Paid traffic
- Google Ads
- Meta Ads
- Email campaigns
- Lead generation
- Analytics and optimization
- Digital strategy

The HTML also includes on-page SEO elements such as `title`, `meta description`, `meta keywords`, and a heading hierarchy. The page title, meta description, and visible content help describe the page to users and search engines. The `meta keywords` tag is included in the code for demonstration purposes, but it is not, by itself, a Google ranking factor.

## Visual Identity and Custom Assets

The project uses a dedicated color palette:

| Color | Hex code | Use |
|---|---|---|
| Deep purple | `#180f4a` | Brand identity, headings, and navigation |
| Pink | `#ff2978` | Highlights, buttons, and interactive details |
| White | `#ffffff` | Background and visual spacing |

The logo and imagery were created specifically for this project, rather than relying entirely on generic, off-the-shelf visuals.

Icons, the favicon, and image assets are referenced as local files in the `Assets` directory. Keeping these resources within the project and serving them from the same hosting provider reduces reliance on third-party asset URLs and helps avoid broken images or icons if an external service becomes unavailable. The website's fonts are currently imported from Google Fonts.

## Layout, User Experience, and Interactions

Flexbox is used to organize page components and adapt the layout to different screen sizes. CSS Grid is also used where a structured column layout is more appropriate.

Key implementation features include:

- Main navigation with a responsive hamburger menu.
- Hero section combining headline, supporting copy, call to action, and image.
- Service cards with alternative content on hover.
- Vertical timeline presenting the agency's working process.
- Scroll reveal animations triggered as the visitor moves down the page.
- Staggered transitions that reveal timeline content in sequence.
- A visual progress line within the timeline.
- Floating contact widget with contact options.
- Responsive adjustments for tablets and mobile devices.
- Support for the system-level reduced-motion preference through `prefers-reduced-motion`.

Animations are intended to guide attention and give the page a natural rhythm. The content remains structured in HTML, and motion effects account for users who prefer reduced animation.

## Technologies

- HTML5
- CSS3
- Flexbox
- CSS Grid
- JavaScript (vanilla, no frameworks)
- Intersection Observer API
- Google Fonts
- SVG icons

## Project Structure

```text
├── index.html     # Page structure and content
├── style.css      # Layout, visual identity, animations, and responsiveness
├── script.js      # Hamburger menu, contact widget, and scroll animations
└── Assets/        # Favicon, hero image, and SVG icons
```

> **Note:** Navigation and contact links use `#` as placeholders on purpose, since this is a single-page conceptual project.

## How to Run

No build step or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` in a browser, or use the Live Server extension in Visual Studio Code.

## An E-commerce Management Perspective

My background in e-commerce management shapes the way I approach digital projects. A website should not be evaluated by its layout alone. Information architecture, positioning, content, SEO, user experience, performance, responsiveness, and conversion all need to work together.

This project brings that perspective into the development process—from defining the message and relevant search terms to organizing the visual experience and implementing the front end.

## SEO Beyond a Static Website

On-page SEO and technical optimization are an important foundation, but sustainable search visibility is not achieved through a single static page alone.

A broader SEO strategy also requires ongoing work beyond the website itself: earning relevant, high-quality backlinks, publishing useful content, and building topical authority over time. When appropriate, a content strategy based on search intent and long-tail keywords can help a website reach people looking for specific services or answers.

For a website like this, one valuable next step would be to create a dedicated articles or insights section. Each article could target a relevant search topic, answer a specific user question, and connect naturally to the agency's service pages. This creates more entry points from organic search, attracts qualified visitors, and gives the website opportunities to earn additional organic clicks over time.

In other words, **the website is the foundation; content, authority, and continuous optimization help expand its organic reach.**

## Author

**Paulo Desbravador**

- LinkedIn: https://www.linkedin.com/in/paulotraveler/
- GitHub: https://github.com/PaulodesbravadorBR

---

*Portfolio project / conceptual demonstration.*
