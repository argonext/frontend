# SEO Implementation - aiaxio-frontend Reference Mapping

































































































































































































































































































</html></body>    </script>        updateSummary();        });            tests[category].forEach(test => createTestItem(test, category));        Object.keys(tests).forEach(category => {        // Initialize        }            }                alert(`⚠️ ${passed}/${total} tests passed. Check failed tests.`);            } else {                alert(`🎉 Success! All ${total} tests passed!`);            if (passed === total) {                        const total = document.querySelectorAll('.test-item').length;            const passed = document.querySelectorAll('.test-item.pass').length;                        btn.textContent = '🔄 Re-run Tests';            btn.disabled = false;                        }                updateSummary();                await runTest(tests.dynamic[i], 'dynamicTests', i);            for (let i = 0; i < tests.dynamic.length; i++) {            // Run dynamic tests                        }                updateSummary();                await runTest(tests.pages[i], 'pageTests', i);            for (let i = 0; i < tests.pages.length; i++) {            // Run page tests                        }                updateSummary();                await runTest(tests.robots[i], 'robotsTests', i);            for (let i = 0; i < tests.robots.length; i++) {            // Run robots test                        }                updateSummary();                await runTest(tests.sitemaps[i], 'sitemapTests', i);            for (let i = 0; i < tests.sitemaps.length; i++) {            // Run sitemap tests                        btn.textContent = '⏳ Running Tests...';            btn.disabled = true;            const btn = document.getElementById('testBtn');        async function runAllTests() {        }            }                return false;                updateTestStatus(containerId, index, 'fail', '❌');            } catch (error) {                }                    return false;                    updateTestStatus(containerId, index, 'fail', '❌');                } else {                    return true;                    updateTestStatus(containerId, index, 'pass', '✅');                if (response.ok && test.check(content)) {                                const content = await response.text();                const response = await fetch(BASE_URL + test.url);            try {                        updateTestStatus(containerId, index, 'testing', '⏳');        async function runTest(test, containerId, index) {        }            document.getElementById('failedTests').textContent = failed;            document.getElementById('passedTests').textContent = passed;            document.getElementById('totalTests').textContent = total;                        const failed = document.querySelectorAll('.test-item.fail').length;            const passed = document.querySelectorAll('.test-item.pass').length;            const total = allItems.length;            const allItems = document.querySelectorAll('.test-item');        function updateSummary() {        }            }                statusEl.textContent = emoji;                statusEl.className = `status ${status}`;                const statusEl = testItem.querySelector('.status');                testItem.className = `test-item ${status}`;            if (testItem) {            const testItem = document.getElementById(`test-${containerId}-${index}`);        function updateTestStatus(containerId, index, status, emoji) {        }            container.appendChild(div);            `;                </div>                    </div>                        <a href="${BASE_URL}${test.url}" target="_blank" class="link-button">Open ↗</a>                    <div class="test-url">${BASE_URL}${test.url}                    <div class="test-name">${test.name}</div>                <div>                <div class="status pending">⏸️</div>            div.innerHTML = `            div.id = `test-${containerId}-${tests[containerId].indexOf(test)}`;            div.className = 'test-item';            const div = document.createElement('div');            const container = document.getElementById(containerId);        function createTestItem(test, containerId) {        };            ]                { name: 'Campaign Detail Page', url: '/campaigns/loop-freight-limited-2', check: (html) => html.includes('Loop Freight') && html.includes('og:image') }            dynamic: [            ],                { name: 'Funded Campaigns Metadata', url: '/funded-campaigns', check: (html) => html.includes('<title>Funded Campaigns') }                { name: 'Campaigns Page Metadata', url: '/campaigns', check: (html) => html.includes('<title>Active Campaigns') },                { name: 'Reports Page Metadata', url: '/reports', check: (html) => html.includes('<title>Investment Reports') },                { name: 'Shariah Page Metadata', url: '/shariah', check: (html) => html.includes('<title>Shariah Compliance') },                { name: 'FAQ Page Metadata', url: '/faq', check: (html) => html.includes('<title>FAQ | Agronext') },                { name: 'Contact Page Metadata', url: '/contact', check: (html) => html.includes('<title>Contact Us | Agronext') },                { name: 'About Page Metadata', url: '/about', check: (html) => html.includes('<title>About Us | Agronext') && html.includes('og:url') },                { name: 'Homepage Metadata', url: '/', check: (html) => html.includes('<title>Agronext - Smart Investment Platform</title>') && html.includes('og:title') },            pages: [            ],                { name: 'Robots.txt', url: '/robots.txt', check: (text) => text.includes('User-agent: *') && text.includes('Sitemap:') && text.includes('Disallow: /api/') }            robots: [            ],                { name: 'Campaigns Sitemap 1', url: '/campaigns/sitemap/1.xml', check: (text) => text.includes('<urlset') && text.includes('/campaigns/') }                { name: 'Campaigns Sitemap Index', url: '/campaigns-sitemap.xml', check: (text) => text.includes('<sitemapindex') && text.includes('/campaigns/sitemap/') },                { name: 'Static Pages Sitemap', url: '/static-pages-sitemap.xml', check: (text) => text.includes('<urlset') && text.includes('/about') && text.includes('/contact') },                { name: 'Main Sitemap Index', url: '/sitemap.xml', check: (text) => text.includes('<sitemapindex') && text.includes('static-pages-sitemap.xml') && text.includes('campaigns-sitemap.xml') },            sitemaps: [        const tests = {                const BASE_URL = 'http://localhost:3000';    <script>    </div>        </div>            <div id="dynamicTests"></div>            <h2>🎯 Dynamic Page Metadata Tests</h2>        <div class="test-section">        </div>            <div id="pageTests"></div>            <h2>📄 Static Page Metadata Tests</h2>        <div class="test-section">        </div>            <div id="robotsTests"></div>            <h2>🤖 Robots.txt Test</h2>        <div class="test-section">        </div>            <div id="sitemapTests"></div>            <h2>🗺️ Sitemap Tests</h2>        <div class="test-section">                <button onclick="runAllTests()" id="testBtn">▶️ Run All Tests</button>        </div>            </div>                <div class="label">Failed</div>                <div class="number" id="failedTests">0</div>            <div class="summary-card fail">            </div>                <div class="label">Passed</div>                <div class="number" id="passedTests">0</div>            <div class="summary-card pass">            </div>                <div class="label">Total Tests</div>                <div class="number" id="totalTests">0</div>            <div class="summary-card total">        <div class="summary" id="summary">                <h1>🔍 SEO Implementation Auto-Test Dashboard</h1>    <div class="container"><body></head>    </style>        .link-button:hover { background: #3182ce; }        }            margin-left: 12px;            font-size: 14px;            border-radius: 4px;            text-decoration: none;            color: white;            background: #4299e1;            padding: 8px 16px;            display: inline-block;        .link-button {        }            font-size: 14px;            color: #718096;        .summary-card .label {        .summary-card.total .number { color: #4299e1; }        .summary-card.fail .number { color: #f56565; }        .summary-card.pass .number { color: #48bb78; }        }            margin-bottom: 5px;            font-weight: bold;            font-size: 32px;        .summary-card .number {        }            box-shadow: 0 2px 4px rgba(0,0,0,0.1);            text-align: center;            border-radius: 8px;            padding: 15px;            background: white;        .summary-card {        }            margin-bottom: 20px;            gap: 15px;            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));            display: grid;        .summary {        button:disabled { background: #cbd5e0; cursor: not-allowed; }        button:hover { background: #2c5282; }        }            margin-bottom: 20px;            font-weight: 500;            font-size: 16px;            cursor: pointer;            border-radius: 6px;            padding: 12px 24px;            border: none;            color: white;            background: #1a365d;        button {        }            font-family: monospace;            margin-left: 36px;            color: #718096;            font-size: 12px;        .test-url {         .test-name { flex: 1; font-weight: 500; }        .status.fail { background: #f56565; color: white; }        .status.pass { background: #48bb78; color: white; }        .status.testing { background: #f6ad55; color: white; }        .status.pending { background: #e2e8f0; }        }            font-size: 14px;            justify-content: center;            align-items: center;            display: flex;            margin-right: 12px;            border-radius: 50%;            height: 24px;            width: 24px;        .status {        .test-item.fail { border-left-color: #f56565; background: #fff5f5; }        .test-item.pass { border-left-color: #48bb78; background: #f0fff4; }        .test-item.testing { border-left-color: #f6ad55; }        }            border-left: 4px solid #cbd5e0;            border-radius: 6px;            background: #f7fafc;            margin-bottom: 8px;            padding: 12px;            align-items: center;            display: flex;        .test-item {        }            font-size: 20px;            margin-bottom: 15px;            color: #2c5282;         .test-section h2 {         }            box-shadow: 0 2px 4px rgba(0,0,0,0.1);            margin-bottom: 20px;            padding: 20px;            border-radius: 8px;            background: white;        .test-section {        h1 { margin-bottom: 20px; color: #1a365d; }        .container { max-width: 1200px; margin: 0 auto; }        }            background: #f5f5f5;            padding: 20px;            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;        body {         * { margin: 0; padding: 0; box-sizing: border-box; }    <style>    <title>SEO Implementation Auto-Test Dashboard</title>    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta charset="UTF-8"><head>This document provides the exact file references from **aiaxio-frontend** that were used as templates for implementing SEO in **agronext-frontend**.

## 📋 File-by-File Reference Mapping

### 1. SEO Utility Function

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\utils\seoMeta.ts
```

**Created (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\lib\utils\seoMeta.ts
```

**What was copied:**
- `generateSeoMetadata()` function structure
- Parameters: title, description, canonicalUrl, thumbnail, thumbnailAlt
- Return type: `Promise<Metadata>`
- Metadata properties:
  - title
  - description
  - alternates.canonical
  - openGraph (title, description, type, siteName, url, images)
  - twitter (title, description, card, images)

**What was adapted:**
- Changed site name from "AIAXIO" to "Agronext"
- Updated default title and description for Agronext
- Changed default thumbnail URL

---

### 2. Robots.txt Configuration

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\robots.ts
```

**Created (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\robots.ts
```

**What was copied:**
- `MetadataRoute.Robots` return type
- Structure with `rules` array
- `userAgent: '*'` configuration
- `allow: '/'` for general access
- `disallow` array for private paths
- `sitemap` property pointing to sitemap.xml
- `BASE_URL` from environment variable

**What was adapted:**
- Changed disallowed paths from:
  - `/dashboard/*`, `/admin-dashboard/*`, `/submit/add-tool`
- To:
  - `/api/*`, `/auth/*`, `/app/*`, `/apply/*`

---

### 3. Main Sitemap Index

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\(sitemap)\sitemap.xml\route.ts
```

**Created (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\(sitemap)\sitemap.xml\route.ts
```

**What was copied:**
- `buildSitemapIndex()` function
- XML structure with `<sitemapindex>` tag
- NextResponse with XML content type
- Error handling with environment check
- Content-Length header calculation

**What was adapted:**
- Changed sitemap URLs from:
  - `static-pages-sitemap.xml`
  - `tool-specific-pages-sitemap.xml`
  - `search-keyword-pages-sitemap.xml`
  - `task-specific-pages-sitemap.xml`
- To:
  - `static-pages-sitemap.xml`
  - `campaigns-sitemap.xml`

---

### 4. Static Pages Sitemap

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\(sitemap)\static-pages-sitemap.xml\route.ts
```

**Created (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\(sitemap)\static-pages-sitemap.xml\route.ts
```

**What was copied:**
- NextRequest, NextResponse imports
- BASE_URL from environment
- `staticRoutes` array concept
- XML urlset structure with lastmod, changefreq, priority
- Content-Type: application/xml header

**What was adapted:**
- Changed routes from aiaxio pages:
  - `/`, `/about`, `/contact`, `/cookie-policy`, `/disclaimer`, `/faq`, `/privacy-policy`, `/terms-and-conditions`, `/trending`, `/tool-types`, `/submit`, `/search`, `/tools`, `/tasks`
- To agronext pages:
  - `/`, `/about`, `/contact`, `/faq`, `/shariah`, `/reports`, `/campaigns`, `/funded-campaigns`

---

### 5. Dynamic Content Sitemap

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\(sitemap)\tool-specific-pages\sitemap.ts
d:\Career\Ground\aiaxio-frontend\src\app\(sitemap)\tool-specific-pages-sitemap.xml\route.ts
```

**Created (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\(sitemap)\campaigns\sitemap.ts
d:\Career\Ground\agronext-frontend\app\(sitemap)\campaigns-sitemap.xml\route.ts
```

**What was copied:**
- **Two-tier sitemap structure:**
  1. XML route handler that creates sitemap index
  2. TypeScript sitemap generator with pagination
- `MetadataRoute.Sitemap` return type
- `generateSitemaps()` function for pagination
- `revalidate = 3600` for hourly updates
- Sitemap array with url, lastModified, changeFrequency, priority
- `fetchAllTools()` pattern (adapted to `fetchAllCampaigns()`)
- Pagination logic: 500 items per sitemap
- `buildSitemapIndex()` function for XML generation
- Error handling with environment check

**What was adapted:**
- Instead of fetching tools from API with pagination:
  ```typescript
  // aiaxio: fetch tools with pagination
  const res = await fetch(`${API_URL}/v1/ai-tool?page=${page}...`)
  ```
- Used local campaign data:
  ```typescript
  // agronext: import from data file
  import { dummyCampaigns } from '@/lib/data/campaigns';
  ```
- Changed URL structure from:
  - `/tools/${toolType}/${slug}`
- To:
  - `/campaigns/${campaign.id}`
- Maintained the same pagination structure: `/campaigns/sitemap/1.xml`, `/campaigns/sitemap/2.xml`, etc.
- Changed sitemap URL from `/tool-specific-pages-sitemap.xml` to `/campaigns-sitemap.xml`

---

### 6. Root Layout Metadata

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\layout.tsx
Lines 83-87
```

**Updated (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\layout.tsx
Lines 14-52
```

**What was copied from aiaxio pattern:**
- `export const metadata: Metadata = {}` structure
- Basic title and description

**What was enhanced (following aiaxio's overall approach):**
- Added `metadataBase` for absolute URLs
- Added `alternates.canonical`
- Added comprehensive `openGraph` configuration
- Added `twitter` card configuration
- Added `robots` meta tags with GoogleBot specifics
- Added `keywords` array

**aiaxio's actual implementation was simpler:**
```typescript
export const metadata: Metadata = {
  title: 'AIAXIO - AI Matched To Your Need',
  description: 'Discover and explore the best AI tools...',
};
```

**But I followed their page-level pattern (more comprehensive)**

---

### 7. Page-Level Metadata (Static Pages)

**Source Examples (aiaxio-frontend):**

#### Disclaimer Page:
```
d:\Career\Ground\aiaxio-frontend\src\app\(public)\disclaimer\page.tsx
Lines 1-18
```

#### Terms Page:
```
d:\Career\Ground\aiaxio-frontend\src\app\(public)\terms-and-conditions\page.tsx
Lines 1-18
```

#### Trending Page:
```
d:\Career\Ground\aiaxio-frontend\src\app\(public)\trending\page.tsx
Lines 1-23
```

**Pattern copied:**
```typescript
import { Metadata } from 'next';
import { generateSeoMetadata } from '@/utils/seoMeta';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata(
    'Page Title',
    'Page description',
    'https://site.com/page-url',
    'thumbnail-url',
    'alt-text'
  );
}
```

**Applied to agronext pages:**
- ✅ `app/about/page.tsx`
- ✅ `app/contact/page.tsx`
- ✅ `app/faq/page.tsx`
- ✅ `app/shariah/page.tsx`
- ✅ `app/reports/page.tsx`
- ✅ `app/funded-campaigns/page.tsx`
- ✅ `app/campaigns/page.tsx`

---

### 8. Dynamic Page Metadata

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\src\app\(public)\[tool-type]\s\[keyword]\page.tsx
Lines 43-122
```

**Pattern structure:**
```typescript
type Props = {
  params: Promise<{ param1: string; param2: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  // Fetch data
  const data = await fetchData(resolvedParams.param1);
  
  return generateSeoMetadata(
    // dynamic values from fetched data
  );
}
```

**Applied to (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\app\campaigns\[id]\page.tsx
```

**Implementation:**
```typescript
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.id;
  
  const campaign = await campaignService.getCampaignBySlug(slug);
  
  return generateSeoMetadata(
    `${campaign.title} | Invest in ${campaign.category} | Agronext`,
    campaign.description.substring(0, 155),
    `https://agronext.com/campaigns/${slug}`,
    campaign.coverImage,
    campaign.title
  );
}
```

---

### 9. Next.js Configuration

**Source (aiaxio-frontend):**
```
d:\Career\Ground\aiaxio-frontend\next.config.mjs
```

**Pattern observed:**
- Using environment variables (though not explicitly in config)
- Image optimization settings
- Remote patterns for images

**Applied to (agronext-frontend):**
```
d:\Career\Ground\agronext-frontend\next.config.mjs
```

**Added:**
```javascript
env: {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com',
},
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'byiocdn.sgp1.cdn.digitaloceanspaces.com' },
    { protocol: 'https', hostname: 'agronext.com' },
  ],
},
```

---

## 🔍 Key Patterns Followed from aiaxio-frontend

### 1. **Centralized SEO Utility**
- ✅ Single `generateSeoMetadata()` function
- ✅ Consistent return structure
- ✅ Fallback to defaults

### 2. **Sitemap Architecture**
- ✅ Main sitemap index (`sitemap.xml`)
- ✅ Separate sitemaps for different content types
- ✅ XML generation with proper headers
- ✅ Revalidation strategy

### 3. **Metadata Pattern**
- ✅ Page-level `generateMetadata()` functions
- ✅ Import from centralized utility
- ✅ 5 parameters: title, description, url, image, alt
- ✅ Async function returning `Promise<Metadata>`

### 4. **robots.txt Strategy**
- ✅ MetadataRoute.Robots export
- ✅ Allow public, disallow private
- ✅ Point to sitemap
- ✅ Environment-based URL

### 5. **Dynamic Content Handling**
- ✅ Type Props with params
- ✅ Resolve params with await
- ✅ Fetch data before generating metadata
- ✅ Error handling with fallbacks

---

## 📊 Implementation Comparison

| Feature | aiaxio-frontend | agronext-frontend |
|---------|----------------|-------------------|
| **SEO Utility Path** | `src/utils/seoMeta.ts` | `lib/utils/seoMeta.ts` |
| **Robots Path** | `src/app/robots.ts` | `app/robots.ts` |
| **Sitemap Folder** | `src/app/(sitemap)/` | `app/(sitemap)/` |
| **Number of Sitemaps** | 4 (static, tools, keywords, tasks) | 2 (static, campaigns) |
| **Dynamic Routes** | Tool pages, search pages | Campaign pages |
| **Data Source** | API calls with pagination | Local data import |
| **URL Structure** | `/tools/{type}/{slug}` | `/campaigns/{id}` |
| **Revalidation** | 3600 seconds (1 hour) | 3600 seconds (1 hour) |
| **Site Name** | AIAXIO | Agronext |
| **Domain** | aiaxio.com | agronext.com |

---

## 🎯 Exact Code References

### generateSeoMetadata Function

**aiaxio source:**
```typescript
// d:\Career\Ground\aiaxio-frontend\src\utils\seoMeta.ts
export async function generateSeoMetadata(
  title: string,
  description: string,
  canonicalUrl: string,
  thumbnail: string,
  thumbnailAlt?: string
): Promise<Metadata> {
  return {
    title: title ? title : TITLE,
    description: description ? description : DESCRIPTION,
    alternates: { canonical: canonicalUrl },
    openGraph: { /* ... */ },
    twitter: { /* ... */ },
  };
}
```

**Replicated exactly in agronext** with only site-specific values changed.

---

### Sitemap Index Builder

**aiaxio source:**
```typescript
// d:\Career\Ground\aiaxio-frontend\src\app\(sitemap)\sitemap.xml\route.ts
async function buildSitemapIndex(sitemaps: string[]): Promise<string> {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(sitemapURL => `
  <sitemap>
    <loc>${sitemapURL}</loc>
  </sitemap>`).join('')}
</sitemapindex>`;
  return xml;
}
```

**Replicated exactly in agronext** - no changes to structure.

---

### Metadata Generation Pattern

**aiaxio example:**
```typescript
// d:\Career\Ground\aiaxio-frontend\src\app\(public)\disclaimer\page.tsx
export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata(
    'Disclaimer | AIAXIO',
    'Read AIAXIO's disclaimer...',
    'https://aiaxio.com/disclaimer',
    'https://aiaxio.com/thumbnail.jpg',
    'AIAXIO Disclaimer Thumbnail'
  );
}
```

**Applied pattern in agronext:**
```typescript
// d:\Career\Ground\agronext-frontend\app\about\page.tsx
export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata(
    'About Us | Agronext - Smart Investment Platform',
    'Learn about Agronext\'s mission...',
    'https://agronext.com/about',
    'https://agronext.com/og-image.png',
    'About Agronext'
  );
}
```

---

## ✅ Implementation Fidelity

**100% Pattern Match:**
- ✅ Function signatures
- ✅ Return types
- ✅ Metadata structure
- ✅ XML generation
- ✅ Error handling
- ✅ Environment variable usage
- ✅ Revalidation strategy

**Adapted for Agronext:**
- ✅ Site-specific text content
- ✅ Simplified sitemap structure (2 vs 4)
- ✅ Different route paths
- ✅ Local data vs API calls
- ✅ Domain and branding

---

## 📚 Files Reference Summary

### Copied Patterns From:
1. ✅ `aiaxio-frontend/src/utils/seoMeta.ts`
2. ✅ `aiaxio-frontend/src/app/robots.ts`
3. ✅ `aiaxio-frontend/src/app/(sitemap)/sitemap.xml/route.ts`
4. ✅ `aiaxio-frontend/src/app/(sitemap)/static-pages-sitemap.xml/route.ts`
5. ✅ `aiaxio-frontend/src/app/(sitemap)/tool-specific-pages/sitemap.ts`
6. ✅ `aiaxio-frontend/src/app/(public)/disclaimer/page.tsx` (metadata pattern)
7. ✅ `aiaxio-frontend/src/app/(public)/[tool-type]/s/[keyword]/page.tsx` (dynamic metadata)

### Created In Agronext:
1. ✅ `agronext-frontend/lib/utils/seoMeta.ts`
2. ✅ `agronext-frontend/app/robots.ts`
3. ✅ `agronext-frontend/app/(sitemap)/sitemap.xml/route.ts`
4. ✅ `agronext-frontend/app/(sitemap)/static-pages-sitemap.xml/route.ts`
5. ✅ `agronext-frontend/app/(sitemap)/campaigns/sitemap.ts` (Dynamic generator)
6. ✅ `agronext-frontend/app/(sitemap)/campaigns-sitemap.xml/route.ts` (Index)
7. ✅ Metadata in 9 page files

---

**Implementation Date:** January 10, 2026  
**Pattern Source:** aiaxio-frontend  
**Fidelity:** 100% pattern match, adapted for agronext content
