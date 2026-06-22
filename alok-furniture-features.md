# Alok Furniture — Website Feature Plan
> **Tagline:** Furniture That Define Your Space | Since 1995 | Modern · Classy · Durable
>
> **Stack:** Vite + React 19 · Tailwind CSS v4 · GSAP · Framer Motion · React Three Fiber
>
> **Priority Legend:** 🔴 Must Have · 🟡 High Impact · 🟢 Nice to Have

---

## Phase 1 — Foundation & Launch Ready
> **Goal:** Get a fully functional, live website that looks premium, collects leads, and works on all devices.

### 1.1 Brand & Visual Identity Setup
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 1 | Navy + Gold color theme via CSS variables | 🔴 Must Have | Matches brand logo. Entire site visual consistency depends on this. |
| 2 | Custom typography (serif for headings, sans for body) | 🔴 Must Have | Luxury brands use elegant fonts. Cheap fonts = cheap brand perception. |
| 3 | Favicon + meta tags + OG image setup | 🔴 Must Have | OG image shows when someone shares the link on WhatsApp, Facebook. Free marketing. |
| 4 | Fully responsive design (mobile, tablet, desktop) | 🔴 Must Have | 70%+ of Indian users browse on mobile. Non-responsive = invisible. |

---

### 1.2 Hero Section
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 5 | Full-screen hero with brand tagline + CTA buttons | 🔴 Must Have | First thing user sees. Sets the tone. "Explore Collection" + "Book Free Visit" CTAs. |
| 6 | Animated text reveal on hero load (Framer Motion) | 🟡 High Impact | Subtle entrance animation makes the brand feel alive and premium instantly. |
| 7 | Hero background — furniture image with overlay | 🔴 Must Have | High-quality product image in hero beats a blank colored background every time. |
| 8 | Scroll-down indicator / animated arrow | 🟢 Nice to Have | Guides user to scroll. Reduces bounce rate on first visit. |

---

### 1.3 Navigation
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 9 | Sticky navbar with logo + links | 🔴 Must Have | User must always know where they are. Logo visible at all times = brand recall. |
| 10 | Mobile hamburger menu | 🔴 Must Have | Without this, mobile navigation is broken. Non-negotiable. |
| 11 | Smooth scroll to sections (single page or multi-page) | 🟡 High Impact | Better UX than jarring page jumps. Feels polished. |
| 12 | Active link highlight in navbar | 🟢 Nice to Have | User always knows which section they are in. Small detail, big UX win. |

---

### 1.4 Product Catalog / Portfolio
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 13 | Product grid with category cards (Sofa, Bed, Wardrobe, Table, etc.) | 🔴 Must Have | Core reason users visit. Without this the site has no purpose. |
| 14 | Filter by category, material, price range | 🔴 Must Have | Nobody scrolls through 50+ products without filters. Kills UX without it. |
| 15 | Product detail page / modal with full description | 🔴 Must Have | Users want dimensions, material, color options before they enquire. |
| 16 | Product image gallery (multiple photos per product) | 🔴 Must Have | Furniture is visual. One photo is never enough. Users want front, side, back angles. |
| 17 | "Enquire Now" button on every product card | 🔴 Must Have | Direct lead generation trigger on every product. Most important CTA after WhatsApp. |
| 18 | Related / Similar Products section on product page | 🟡 High Impact | Keeps user engaged. Increases pages-per-session. Upsell opportunity. |

---

### 1.5 EMI Calculator — Bajaj Finance
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 19 | Standalone EMI Calculator page/section | 🔴 Must Have | Client specifically requested this. Makes high-ticket furniture feel affordable. |
| 20 | Interactive slider — enter price, select tenure, see monthly EMI | 🔴 Must Have | "₹999/month" is a powerful psychological trigger. Converts hesitant buyers. |
| 21 | Bajaj Finance logo + "Easy EMI Available" badge on product cards | 🔴 Must Have | Trust signal. Users know they can pay later without even clicking. |
| 22 | "Apply for EMI" CTA linking to Bajaj Finance partner page | 🟡 High Impact | Direct action link. Reduces friction for finance-interested buyers. |
| 23 | EMI eligibility info block (min order, 0% interest schemes, etc.) | 🟡 High Impact | Transparency builds trust. Users don't like hidden conditions. |

---

### 1.6 Trust & Social Proof
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 24 | Since 1995 legacy section with animated counters | 🔴 Must Have | 30 years is a massive credibility asset. "5000+ Happy Homes", "30+ Years" counters convert. |
| 25 | Customer testimonials section (text + star rating) | 🔴 Must Have | Social proof. A furniture buyer trusts another buyer over the brand itself. |
| 26 | Bajaj Finance partner badge / brand association logos | 🔴 Must Have | Bajaj Finance is a nationally trusted name. Association = credibility boost. |
| 27 | "Modern · Classy · Durable" values section with icons | 🟡 High Impact | Communicates brand promise visually. Reinforces why Alok Furniture is the right choice. |

---

### 1.7 Contact & Lead Capture
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 28 | Contact page with name, phone, message form | 🔴 Must Have | Primary offline lead capture. Owner needs this to follow up. |
| 29 | WhatsApp floating button (sticky, bottom-right) | 🔴 Must Have | Indian customers prefer WhatsApp. Fastest way to turn a visitor into a conversation. |
| 30 | Google Maps embed with store address | 🔴 Must Have | Physical location = trust. Also boosts local SEO. Customers can get directions directly. |
| 31 | Click-to-call phone number (mobile-friendly) | 🔴 Must Have | One tap call on mobile. Especially important for older customers who don't type well. |
| 32 | Store hours + address in footer | 🔴 Must Have | Basics. Every business website needs this. |

---

### 1.8 Footer
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 33 | Footer with logo, nav links, contact info, social links | 🔴 Must Have | Standard web expectation. Users scroll to footer to find contact and links. |
| 34 | Privacy Policy + Terms page links in footer | 🔴 Must Have | Required for Google AdSense approval and legal compliance. |
| 35 | About Us page | 🔴 Must Have | 1995 brand story. Users want to know who they're buying from. Also needed for AdSense. |

---

### 1.9 Performance & SEO Basics
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 36 | Page title, meta description for all pages | 🔴 Must Have | Without this, Google doesn't know what to rank. Basic SEO hygiene. |
| 37 | Image compression + lazy loading | 🔴 Must Have | Furniture sites are image-heavy. Unoptimized images = 10s load time = user leaves. |
| 38 | Sitemap.xml + robots.txt | 🔴 Must Have | Helps Google crawl and index every page properly. |
| 39 | Google Analytics setup (GA4) | 🔴 Must Have | You need to know who visits, which products they view, where they drop off. |

---

## Phase 2 — Conversion Boosters & Experience Upgrades
> **Goal:** Add features that directly increase lead quality, time-on-site, and brand perception.     

### 2.1 3D & Animation Upgrades
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 40 | 3D animated hero — furniture model with React Three Fiber | 🟡 High Impact | Elevates the brand from "just a website" to "premium experience." Competitors won't have this. |
| 41 | GSAP ScrollTrigger animations on all sections | 🟡 High Impact | Sections animate in as user scrolls. Makes the site feel cinematic and premium. |
| 42 | Framer Motion page transition animations | 🟡 High Impact | Smooth page-to-page navigation. No jarring white flash between routes. |
| 43 | Parallax effect on hero / banner sections | 🟢 Nice to Have | Depth effect on scroll. Adds luxury feel to the overall experience. |

---

### 2.2 Product Experience Upgrades
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 44 | 360° product spin view (drag to rotate) | 🟡 High Impact | Furniture buyers want to see all angles. Removes hesitation. Reduces enquiry friction. |
| 45 | Material / fabric / color picker on product page | 🟡 High Impact | "Will it match my room?" — This answers that. Real-time color switch increases confidence. |
| 46 | Zoom on product images (hover or pinch) | 🟡 High Impact | Users want to inspect fabric texture, stitch quality, finish closely. Essential for premium. |
| 47 | Product comparison (select 2-3 products, compare side by side) | 🟢 Nice to Have | Helps undecided buyers make a choice faster. Reduces "I'll think about it" drop-offs. |
| 48 | "Recently Viewed" products section | 🟢 Nice to Have | Brings users back to items they showed interest in. Small feature, meaningful retention. |

---

### 2.3 Gallery & Portfolio
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 49 | Before / After room transformation gallery | 🟡 High Impact | Shows real impact of Alok Furniture in real homes. Strongest visual trust signal. |
| 50 | Masonry photo gallery of completed interiors | 🟡 High Impact | Portfolio of work. Sells the lifestyle, not just the product. |
| 51 | Video testimonials embed (YouTube/Vimeo) | 🟡 High Impact | Video testimonials convert 3-4x better than text ones. One happy customer video = gold. |
| 52 | Project showcase with category tags (Living Room, Bedroom, Office) | 🟢 Nice to Have | Helps users find relevant examples to their own space type. |

---

### 2.4 Booking & Scheduling
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 53 | "Book a Free Home Visit" form with date picker | 🟡 High Impact | High-ticket furniture clients expect this. In-home consultation = premium service offer. |
| 54 | Auto WhatsApp notification to owner on form submit | 🟡 High Impact | Owner gets an instant WhatsApp when someone books. No leads fall through the cracks. |
| 55 | Confirmation page / email after form submission | 🟢 Nice to Have | Professionalism. User knows their request was received. Reduces anxiety. |

---

### 2.5 SEO Content Layer
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 56 | FAQ section on homepage + individual product pages | 🟡 High Impact | Answers "what material is used?", "do you deliver?" etc. Reduces support calls + Google featured snippets. |
| 57 | Individual product pages with SEO-optimized URLs | 🟡 High Impact | `/sofa/royal-chesterfield-3-seater` ranks on Google. Generic `/product/123` does not. |
| 58 | Schema markup — LocalBusiness + Product + Review | 🟡 High Impact | Rich results on Google (stars, price, availability). Higher CTR from search results. |
| 59 | Blog section setup (empty shell, ready for content) | 🟢 Nice to Have | Infrastructure for Phase 3. "Best sofas for small living rooms" type posts = long-term traffic. |

---

## Phase 3 — Advanced Features & Scale
> **Goal:** Add premium differentiators that make Alok Furniture stand out from every competitor.

### 3.1 AR & 3D Visualization
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 60 | AR Room Visualizer — place furniture in your room via phone camera | 🟢 Nice to Have | Highest-converting feature in furniture e-commerce globally. Reduces purchase hesitation by ~40%. |
| 61 | 3D room planner — drag and drop furniture into a floor plan | 🟢 Nice to Have | Users plan entire room setups. Longer session time. Higher basket size (buy multiple pieces). |
| 62 | Spline-based 3D product showcase on product pages | 🟢 Nice to Have | Full interactive 3D model on product page. Not just photos. Luxury differentiator. |

---

### 3.2 Content & Marketing
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 63 | Blog with interior design tips and buying guides | 🟢 Nice to Have | "How to choose the right sofa", "Top 5 bedroom furniture trends 2025" — organic Google traffic. |
| 64 | Live Instagram feed embedded on website | 🟢 Nice to Have | Auto-updates with fresh content. Shows active brand. No manual website update needed. |
| 65 | Newsletter signup with lead magnet ("Free Interior Checklist") | 🟢 Nice to Have | Builds email list for future promotions, Diwali sales, new collection launches. |
| 66 | Seasonal offer / sale banner with countdown timer | 🟢 Nice to Have | Diwali, Onam, New Year sales. Creates urgency. "Offer ends in 2 days" works. |

---

### 3.3 Customer Portal (Optional — if scaling)
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 67 | User login / account creation | 🟢 Nice to Have | Saves wishlist, tracks enquiries, stores order history. Needed if moving toward e-commerce. |
| 68 | Wishlist / Save for Later | 🟢 Nice to Have | User saves a sofa today, buys it next month. Without this, they forget which product it was. |
| 69 | Order / Enquiry tracking | 🟢 Nice to Have | "Where is my custom order?" — reduces support calls. Professionalism at scale. |

---

### 3.4 Performance & Technical Excellence
| # | Feature | Priority | Why It's Needed |
|---|---------|----------|-----------------|
| 70 | PWA (Progressive Web App) setup | 🟢 Nice to Have | Users can "install" the website on phone home screen. Repeat visits up significantly. |
| 71 | Google PageSpeed score > 90 on mobile | 🟡 High Impact | Google ranks fast sites higher. Slow site = invisible site. Critical for SEO. |
| 72 | Cookie consent banner (for AdSense / analytics compliance) | 🔴 Must Have | Required by Indian IT rules and Google AdSense TCF v2.3 policy for EU traffic. |
| 73 | Error tracking (Sentry or similar) | 🟢 Nice to Have | Know when and where users hit bugs. Fix before client complains. |

---

## Quick Reference Summary

| Phase | Focus | Features Count | Est. Timeline |
|-------|-------|---------------|---------------|
| Phase 1 | Foundation, catalog, EMI, contact, SEO basics | 39 features | 3–4 weeks |
| Phase 2 | 3D animations, 360° view, gallery, booking, FAQ | 20 features | 2–3 weeks |
| Phase 3 | AR, blog, portal, PWA, advanced marketing | 14 features | 4–6 weeks |
| **Total** | **Full featured luxury furniture website** | **73 features** | **~10–13 weeks** |

---

## Recommended Phase 1 Launch Checklist

Before going live, confirm these are done:

- [ ] All 39 Phase 1 features implemented and tested
- [ ] Tested on Android Chrome, iPhone Safari, and desktop Chrome
- [ ] All forms send notifications to owner (WhatsApp / email)
- [ ] EMI calculator working with correct Bajaj Finance figures
- [ ] Google Analytics GA4 tracking active
- [ ] Sitemap submitted to Google Search Console
- [ ] All images compressed (use WebP format)
- [ ] Privacy Policy, Terms, About Us, Contact pages live
- [ ] WhatsApp float button tested on mobile
- [ ] Google Maps store location verified and correct
- [ ] Page load time under 3 seconds on mobile
- [ ] SSL certificate active (HTTPS)

---

*Document prepared for: **Alok Furniture** freelance project*
*Stack: Vite + React 19 · Tailwind CSS v4 · React Three Fiber · GSAP · Framer Motion*
*Prepared by: Senior Developer Review*
