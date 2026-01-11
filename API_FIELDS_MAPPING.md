# API Fields Mapping

This document shows how all API response fields from https://api.agronextbd.com/projects/ are displayed in the UI.

## API Response Structure

```json
{
  "count": 10,
  "next": "...",
  "previous": null,
  "results": [
    {
      "project_id": 1,
      "project_title": "Organic Rice Farming",
      "start_date": "2024-01-15",
      "project_location": "Dinajpur, Bangladesh",
      "category": "Agriculture",
      "project_status": "open",
      "project_photo_url": "https://...",
      "duration": 180,
      "investment_goal": "5000000",
      "profit_max_percent": "25",
      "profit_min_percent": "20",
      "available_slots": 50,
      "unit_price": "100000"
    }
  ]
}
```

## Field Mapping & Display Locations

### ✅ All API Fields Are Displayed

| API Field | Mapped To | Display Location(s) |
|-----------|-----------|---------------------|
| `project_id` | `campaign.id` | Used internally, part of slug URL |
| `project_title` | `campaign.title` | - Campaign Card: Main title<br>- Detail Page: Hero title, Investment card title, Business tab |
| `start_date` | `campaign.startDate` | - Detail Page: Business tab (formatted as "Month Day, Year")<br>- Used to calculate `daysLeft` |
| `project_location` | `campaign.location` + `campaign.categoryTagline` | - Campaign Card: Subtitle below category<br>- Detail Page: With map pin icon below category badge |
| `category` | `campaign.category` | - Campaign Card: Badge above title<br>- Detail Page: Badge and multiple locations |
| `project_status` | `campaign.status` | - Campaign Card: "FUNDED" badge when completed<br>- Detail Page: Business tab, affects button states |
| `project_photo_url` | `campaign.coverImage` | - Campaign Card: Main image<br>- Detail Page: Hero image, Gallery |
| `duration` | `campaign.durationMonths` | - Campaign Card: Duration stat (converted from days to months)<br>- Detail Page: Duration card in stats grid |
| `investment_goal` | `campaign.targetAmount` | - Campaign Card: Target amount in progress section<br>- Detail Page: Raised of [Target], Contract tab |
| `profit_max_percent` | Part of `campaign.annualizedReturn` | - Campaign Card: Returns display<br>- Detail Page: Returns card, Contract tab<br>- Format: "20% - 25%" |
| `profit_min_percent` | Part of `campaign.annualizedReturn` | Same as above |
| `available_slots` | Calculated display | - Detail Page: "Available Slots" row showing remaining slots<br>- Formula: `(targetAmount - raisedAmount) / minInvestment` |
| `unit_price` | `campaign.minInvestment` | - Detail Page: "Unit Price" row, minimum investment message<br>- Contract tab |

## Calculated/Derived Fields

These fields are calculated from API data:

| Derived Field | Calculation | Display Location |
|---------------|-------------|------------------|
| `raisedAmount` | `investment_goal - (available_slots × unit_price)` | Campaign Card & Detail Page progress |
| `raisedPercentage` | `(raisedAmount / investment_goal) × 100` | Campaign Card & Detail Page progress bar |
| `daysLeft` | Days from today to `start_date` | Campaign Card & Detail Page countdown |
| `slug` | `project_title` sanitized + `-` + `project_id` | URL routing |
| `durationMonths` | `duration / 30` (rounded up) | Duration displays |

## Removed Conceptual Fields

These fields were in the original UI but are NOT in the API response and have been removed:

- ❌ `riskGrade` - Risk assessment badge (A, B+, C, etc.)
- ❌ `extraProfitActivated` - Extra profit bonus banner
- ❌ `extraProfitMessage` - Bonus message text
- ❌ `processingAmount` - Processing investment amount
- ❌ `investorsCount` - Number of investors
- ❌ `investmentStructure` - Contract structure type (MUDARABAH, etc.)
- ❌ `businessSection` - Detailed business overview, market opportunity, competitive advantage
- ❌ `ownerSection` - Owner name, background, experience
- ❌ `shariahSection` - Detailed shariah structure, compliance, advisor
- ❌ `contractSection` - Detailed terms, profit sharing, exit strategy
- ❌ `risksSection` - Specific market risks, business risks, mitigation strategies
- ❌ `highlights` - Key project highlights list
- ❌ `useOfFunds` - Breakdown of fund allocation

## Simplified Tab Content

Since the API doesn't provide detailed section data, tabs now show:

### Business Tab
- ✅ Project Details: Title, Category, Location, Start Date, Status (all from API)
- ✅ Description: Generated from API fields

### Owner Tab
- Generic message: "Owner information will be available after investment"

### Shariah Tab
- Generic message about Shariah compliance

### Contract Tab
- ✅ Investment Terms: Investment Goal, Unit Price, Expected Returns, Duration (all from API)

### Risks Tab
- Generic risk disclaimer with standard investment risks

## API Coverage: 100% ✅

All 13 fields from the API response are now properly displayed or used in the UI:
- **Direct Display**: 12 fields
- **Used in Calculations**: 1 field (available_slots - shown via calculated value)
- **Internal Use**: project_id (used in slug generation)

## Next.js 16 Implementation

- **Server Components**: All data fetching happens on the server
- **ISR Caching**: 60-second revalidation for fast page loads
- **Native Fetch**: No external HTTP libraries, uses Next.js built-in caching
- **Dynamic Routes**: Campaign detail pages are dynamically generated from project_id
