# Client Requirements - SEO Implementation Completion

This document outlines what you need from the client to complete and optimize the SEO implementation for Agronext.

---

## 🌐 1. Domain & URL Configuration

### Required Information:
- [ ] **Production Domain URL**
  - Example: `https://agronext.com` or `https://www.agronext.com`
  - Confirm if using www or non-www version
  - Confirm if using HTTPS (should be yes)

- [ ] **Preferred Domain Version**
  - Which should be canonical: `agronext.com` vs `www.agronext.com`?
  - Set up 301 redirects for non-preferred version

### Action Items:
```env
# Update in production .env
NEXT_PUBLIC_SITE_URL=https://agronext.com
```

---

## 🖼️ 2. Open Graph & Social Media Images

### Required Assets:

#### **OG Image (Open Graph)**
- [ ] Main OG image for homepage and default pages
  - **Dimensions:** 1200px × 630px
  - **Format:** PNG or JPG
  - **File size:** < 1MB
  - **Content:** Logo, tagline, key visual
  - **Filename:** `og-image.png`

- [ ] Campaign-specific OG images (optional)
  - Use campaign cover images or generate custom ones
  - Same dimensions as above

#### **Twitter Card Image**
- [ ] Can use same as OG image (1200×630)
- [ ] Or provide specific Twitter image: 1200px × 600px

#### **Favicon & App Icons**
- [ ] Favicon.ico (32×32, 16×16)
- [ ] Apple Touch Icon (180×180)
- [ ] Android Chrome icons (192×192, 512×512)

### Where to Place:
```
agronext-frontend/
  public/
    og-image.png          ← Main OG image
    favicon.ico
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
```

### Action Required:
Ask client: *"Please provide high-quality social sharing images (1200×630px) showing Agronext branding, tagline, and key visual elements."*

---

## 📝 3. Content & Metadata Review

### Review & Approve:
- [ ] **Page Titles** - Review all titles in metadata
- [ ] **Meta Descriptions** - Approve descriptions (155-160 characters)
- [ ] **Keywords** - Confirm target keywords for each page
- [ ] **Brand Messaging** - Ensure consistency with brand voice

### Current Implementation to Review:
```
✓ Homepage: "Agronext - Smart Investment Platform"
✓ About: "About Us | Agronext - Smart Investment Platform"
✓ Campaigns: "Active Campaigns | Agronext - Browse Investment Opportunities"
✓ FAQ: "FAQ | Agronext - Frequently Asked Questions"
... (review all pages)
```

### Questions for Client:
1. Are the page titles and descriptions aligned with your brand messaging?
2. Any specific keywords you want to target?
3. Any pages missing that need SEO metadata?
4. Preferred wording for investment-related terms?

---

## 🔐 4. Search Console & Analytics Setup

### Google Search Console
- [ ] **Client needs to:**
  1. Create Google Search Console account
  2. Add property for `agronext.com`
  3. Verify domain ownership (DNS or HTML file)
  4. Provide you with access (Editor or Owner role)

- [ ] **You will then:**
  1. Submit sitemaps:
     - `https://agronext.com/sitemap.xml`
     - `https://agronext.com/static-pages-sitemap.xml`
     - `https://agronext.com/campaigns-sitemap.xml`
  2. Monitor indexing status
  3. Fix any crawl errors

### Google Analytics 4
- [ ] **Client needs to:**
  1. Create GA4 property
  2. Provide Measurement ID (e.g., `G-XXXXXXXXXX`)
  3. Grant you access (Editor role)

- [ ] **You will then:**
  1. Add GA4 tracking code to the app
  2. Set up conversion goals
  3. Configure enhanced measurement

### Bing Webmaster Tools
- [ ] Optional but recommended
- [ ] Similar setup to Google Search Console
- [ ] Import from Search Console (easier)

### Action Required:
Ask client: *"Please create Google Search Console and GA4 accounts, then share access credentials/IDs with us."*

---

## 📱 5. Social Media Integration

### Social Media Profiles
- [ ] **Facebook Business Page URL**
  - For Open Graph verification
  - Example: `https://facebook.com/agronextbd`

- [ ] **Twitter/X Profile URL**
  - For Twitter Card validation
  - Example: `https://twitter.com/agronext`

- [ ] **LinkedIn Company Page**
  - Example: `https://linkedin.com/company/agronext`

- [ ] **Instagram Profile** (if applicable)
  - Example: `https://instagram.com/agronext`

### Meta Tags to Add:
```tsx
// In app/layout.tsx or relevant pages
<meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
<meta name="twitter:site" content="@agronext" />
<meta name="twitter:creator" content="@agronext" />
```

### Action Required:
Ask client: *"Please provide links to all official social media profiles for verification and linking."*

---

## 📄 6. Legal & Compliance Pages

### Missing Pages to Create (if needed):
- [ ] **Privacy Policy** - Required for SEO and compliance
- [ ] **Terms of Service** - Important for trust signals
- [ ] **Cookie Policy** - GDPR compliance
- [ ] **Disclaimer** - Financial/investment disclaimer

### Action Required:
Ask client: *"Do you have legal documents ready? We need to create these pages and add them to the sitemap."*

---

## 🎨 7. Brand Assets & Guidelines

### Request from Client:
- [ ] **Brand Style Guide**
  - Preferred tone of voice
  - Do's and don'ts for messaging
  - Target audience description

- [ ] **Logo Assets**
  - High-res logo (for OG images)
  - Logo variants (light/dark backgrounds)

- [ ] **Color Palette**
  - For consistent visual branding in social images

- [ ] **Taglines & Slogans**
  - Official tagline for metadata
  - Elevator pitch (for descriptions)

---

## 🔍 8. Business Information

### Structured Data Preparation:
- [ ] **Company Legal Name**
- [ ] **Company Registration Number**
- [ ] **Physical Address** (for Local SEO)
- [ ] **Phone Number**
- [ ] **Email Address**
- [ ] **Business Hours**
- [ ] **Year Founded**
- [ ] **Number of Employees** (range)
- [ ] **Service Areas** (geographic coverage)

### Use for:
- Schema.org markup (future implementation)
- Contact page accuracy
- Google Business Profile

### Action Required:
Ask client: *"Please provide complete business information for local SEO and structured data."*

---

## 📊 9. Campaign Data & Content

### For Dynamic SEO:
- [ ] **Campaign Descriptions**
  - SEO-optimized descriptions (155-300 chars)
  - Unique for each campaign

- [ ] **Campaign Images**
  - High-quality cover images
  - Proper alt text for each image

- [ ] **Category Descriptions**
  - Unique description for each category
  - Target relevant keywords

### Action Required:
Ask client: *"Review campaign descriptions for SEO optimization. Each should be unique and include relevant keywords."*

---

## 🚀 10. Deployment & Technical Requirements

### Production Environment:
- [ ] **Hosting Platform Details**
  - Vercel? AWS? Other?
  - Access credentials if needed

- [ ] **Environment Variables**
  ```env
  NEXT_PUBLIC_SITE_URL=https://agronext.com
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
  # Add others as needed
  ```

- [ ] **SSL Certificate**
  - Confirm HTTPS is properly configured
  - Check for mixed content issues

- [ ] **CDN Configuration**
  - If using CDN, ensure sitemap.xml is not cached aggressively
  - Set proper cache headers

### DNS Configuration:
- [ ] **Verify DNS Settings**
  - A records point to correct IP
  - CNAME if using subdomain
  - TXT records for Search Console verification

---

## 🧪 11. Testing & Validation Checklist

### Before Launch - Client Should Test:
- [ ] **All pages load correctly**
- [ ] **Social sharing works**
  - Share on Facebook - check preview
  - Share on Twitter - check card
  - Share on LinkedIn - check preview

- [ ] **Mobile responsiveness**
  - All pages mobile-friendly
  - Google Mobile-Friendly Test

- [ ] **Page speed**
  - Google PageSpeed Insights score > 80
  - Core Web Vitals pass

### Tools to Use:
1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Test: `https://agronext.com`

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Test all major pages

3. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test for structured data errors

4. **Google Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly

---

## 📧 12. Email Template to Client

Here's a ready-to-send email template:

---

**Subject: SEO Implementation Complete - Required Items from Your End**

Hi [Client Name],

Great news! The SEO implementation for Agronext is complete. To finalize and optimize everything, I need the following from your team:

**🌐 IMMEDIATE NEEDS:**

1. **Production Domain URL**
   - Confirm: Is it `https://agronext.com` or `https://www.agronext.com`?

2. **Open Graph Image** (for social media sharing)
   - Dimensions: 1200px × 630px
   - Should include: Agronext logo, tagline, key visual
   - Format: PNG or JPG (under 1MB)

3. **Google Search Console Access**
   - Please create an account at: https://search.google.com/search-console
   - Add `agronext.com` as a property
   - Grant me Editor access using my email: [your-email@example.com]

4. **Google Analytics 4 Setup**
   - Please create GA4 property
   - Share the Measurement ID (starts with G-)

**📱 ADDITIONAL INFORMATION:**

5. **Social Media Profiles**
   - Facebook page URL
   - Twitter/X handle
   - LinkedIn company page
   - Any other platforms

6. **Business Information** (for local SEO)
   - Complete business address
   - Phone number
   - Business hours
   - Year founded

7. **Content Review**
   - Please review page titles and descriptions in the attached document
   - Confirm they align with your brand messaging

**⏰ TIMELINE:**

- Items 1-4 are needed within 3-5 days for launch
- Items 5-7 can be provided within 1-2 weeks

**✅ WHAT'S ALREADY DONE:**

✓ SEO metadata on all pages
✓ XML sitemaps (static + dynamic)
✓ Robots.txt configuration
✓ Open Graph tags
✓ Twitter Cards
✓ Canonical URLs
✓ Mobile optimization

Once you provide the above, I'll:
- Submit sitemaps to Search Console
- Validate social sharing
- Set up analytics tracking
- Run final SEO audit

Please let me know if you have questions about any of these items.

Best regards,
[Your Name]

---

---

## ✅ Quick Checklist

Print this and use it during client meetings:

```
CRITICAL (Needed before launch):
☐ Production domain URL
☐ Open Graph image (1200×630)
☐ Google Search Console setup
☐ SSL certificate confirmed

HIGH PRIORITY (Needed within 1 week):
☐ Google Analytics 4 setup
☐ Social media profile URLs
☐ Content/metadata approval
☐ Brand assets (logos, colors)

MEDIUM PRIORITY (Needed within 2 weeks):
☐ Business information
☐ Legal pages (privacy, terms)
☐ Campaign descriptions optimization
☐ Category descriptions

LOW PRIORITY (Nice to have):
☐ Bing Webmaster Tools
☐ Additional social platforms
☐ Video content for SEO
☐ Blog/content strategy
```

---

## 🎯 Next Steps After Client Provides Info

1. **Update environment variables** with production URL and GA ID
2. **Upload OG images** to public folder
3. **Add social meta tags** with client's social handles
4. **Submit sitemaps** to Search Console
5. **Validate** all pages with SEO tools
6. **Monitor** indexing status for 2 weeks
7. **Provide client** with SEO performance report

---

**Document Version:** 1.0  
**Date:** January 10, 2026  
**Status:** Ready for client communication
