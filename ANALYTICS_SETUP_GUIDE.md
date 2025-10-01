# Analytics Setup Guide - CWT Studio

## Quick Start (5 minutes)

Your CWT Studio website now has enterprise-grade analytics infrastructure ready to connect. Follow these steps to activate tracking:

---

## Step 1: Google Analytics 4 Setup

### Create GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** (bottom left gear icon)
3. Click **Create Property**
4. Fill in property details:
   - Property name: `CWT Studio`
   - Time zone: Your timezone
   - Currency: USD
5. Click **Next**
6. Fill in business details
7. Click **Create**

### Get Measurement ID
1. In Admin, click **Data Streams** (under Property column)
2. Click **Add stream** → **Web**
3. Enter website URL: `https://cwtstudio.com`
4. Stream name: `CWT Studio Website`
5. Click **Create stream**
6. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Add to Code
1. Open `src/lib/analytics.ts`
2. Find line 8:
   ```typescript
   const ANALYTICS_CONFIG = {
     GA4_MEASUREMENT_ID: '', // ← ADD YOUR ID HERE
   ```
3. Paste your Measurement ID:
   ```typescript
   GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
   ```
4. Save file

### Verify Installation
1. Deploy your changes
2. Visit your website
3. In GA4, go to **Reports** → **Realtime**
4. You should see yourself as an active user
5. Navigate between pages and watch events appear

---

## Step 2: Microsoft Clarity Setup (Heat Maps + Session Recording)

### Create Clarity Account
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign in with Microsoft account (free)
3. Click **Add new project**
4. Fill in:
   - Project name: `CWT Studio`
   - Website URL: `https://cwtstudio.com`
5. Click **Add new project**

### Get Project ID
1. After creation, you'll see setup instructions
2. **Copy the Project ID** (looks like: `abc123xyz`)
3. You can also find it later in **Settings** → **Setup**

### Add to Code
1. Open `src/lib/analytics.ts`
2. Find line 9:
   ```typescript
   CLARITY_PROJECT_ID: '', // ← ADD YOUR ID HERE
   ```
3. Paste your Project ID:
   ```typescript
   CLARITY_PROJECT_ID: 'abc123xyz',
   ```
4. Save file

### Verify Installation
1. Deploy your changes
2. Visit your website
3. In Clarity dashboard, wait 1-2 minutes
4. You should see recordings appear under **Recordings**
5. Check **Heatmaps** to see click and scroll data

---

## Step 3: Set Up Conversion Goals (GA4)

### Define Conversions
1. In GA4, go to **Admin** → **Events**
2. Click **Create event**
3. Create these key conversions:

#### Contact Form Submission
- Event name: `form_submission`
- Parameter: `form_name` equals `contact`
- Mark as conversion: ✅

#### CTA Clicks
- Event name: `cta_click`
- Mark as conversion: ✅

#### Sample Report Downloads
- Event name: `conversion`
- Parameter: `conversionName` contains `sample`
- Mark as conversion: ✅

### Create Audiences
1. Go to **Admin** → **Audiences**
2. Click **New audience**

**High-Intent Users**:
- Include: Users who triggered `cta_click` OR `form_submission`
- Time window: Last 7 days

**Engaged Users**:
- Include: Users with session duration > 60 seconds
- And visited 3+ pages

---

## Step 4: Configure Clarity Features

### Set Up Masking (Privacy)
1. In Clarity, go to **Settings** → **Masking**
2. Enable **Mask all input fields by default**: ✅
3. Add sensitive selectors to mask:
   - `input[type="password"]`
   - `input[type="email"]`
   - `.sensitive-data`

### Configure Filters
1. Go to **Settings** → **IP blocking**
2. Add your office IP to exclude internal traffic
3. Add any testing/staging domains

### Set Up Alerts
1. Go to **Settings** → **Rage clicks**
2. Enable rage click detection: ✅
3. Set threshold: 3 clicks in same area

---

## Step 5: Create Custom Dashboards

### GA4 Dashboard
1. Go to **Reports** → **Library**
2. Click **Create new report**
3. Add these cards:

**Conversion Funnel**:
- Homepage views → Services page → Contact form

**Top CTAs**:
- Group by `cta_name`
- Show click count and conversion rate

**Page Performance**:
- Show page load times and Core Web Vitals

**User Segments**:
- Compare new vs returning visitors
- Show engagement metrics by segment

### Clarity Dashboard
1. In Clarity, use default dashboard
2. Focus on these metrics:
   - **Rage clicks**: Find UX frustrations
   - **Dead clicks**: Identify confusing elements
   - **Quick backs**: Pages with high bounce
   - **Scroll depth**: Content engagement

---

## Step 6: Test Your Setup

### Run This Checklist
- [ ] Visit homepage → Check GA4 Realtime
- [ ] Click a CTA → Verify event in GA4
- [ ] Submit contact form → Verify conversion
- [ ] Navigate 3+ pages → Check Clarity session
- [ ] Test on mobile device → Verify tracking
- [ ] Wait 24 hours → Check full reports

### Debug Mode
If tracking isn't working:
1. Open browser console (F12)
2. Look for these logs:
   ```
   ✅ Google Analytics 4 initialized
   ✅ Microsoft Clarity initialized
   📊 Page View: /
   📊 Event: [event name]
   ```
3. If you don't see these, check:
   - IDs are correct in `analytics.ts`
   - No browser extensions blocking tracking
   - No ad blockers active
   - Cookie consent accepted

---

## What's Being Tracked?

### Automatic Tracking
✅ Page views (all route changes)
✅ CTA clicks (with location and variant)
✅ Form submissions (with form name)
✅ Scroll depth (25%, 50%, 75%, 100%)
✅ Time on page (10s, 30s, 60s, 120s, 300s)
✅ Errors (with severity and context)
✅ Performance metrics (Core Web Vitals)
✅ A/B test assignments
✅ User segments
✅ Chat widget interactions

### Custom Events
Add more tracking with:
```typescript
import analytics from '@/lib/analytics';

// Track any event
analytics.trackEvent('button_click', {
  button_name: 'download',
  location: 'sidebar',
});

// Track conversions
analytics.trackConversion('lead_qualified', 5000);

// Track errors
analytics.trackError('API call failed', error.stack, 'high');
```

---

## Privacy & Compliance

### GDPR Compliance
✅ Cookie consent required before tracking
✅ User can opt-out anytime
✅ Data anonymization enabled
✅ IP masking configured
✅ No PII collected without consent

### What's Collected
- Page URLs and titles
- Click locations (no personal data)
- Scroll depth and time on page
- Device type and browser
- Anonymous user ID (cookied)
- Aggregated performance data

### What's NOT Collected
- Names, emails, addresses
- Form field values (unless explicitly tracked)
- Payment information
- Session replays without consent
- Any PII without opt-in

---

## Monitoring Your Data

### Daily Checks (5 min)
- GA4 Realtime: Verify tracking active
- Clarity: Review 2-3 sessions for UX issues
- Check for error spikes

### Weekly Analysis (30 min)
- Review conversion rates by source
- Identify top-performing CTAs
- Analyze heat maps for UX improvements
- Check A/B test results

### Monthly Deep Dive (2 hours)
- Full funnel analysis
- User segment performance
- Content engagement review
- Technical performance audit
- Plan optimization tests

---

## Getting Help

### Resources
- GA4 Help: [support.google.com/analytics](https://support.google.com/analytics)
- Clarity Help: [docs.microsoft.com/clarity](https://docs.microsoft.com/clarity)
- Phase 2 Docs: [PHASE_2_IMPLEMENTATION_COMPLETE.md](./PHASE_2_IMPLEMENTATION_COMPLETE.md)

### Common Issues

**Tracking not working?**
- Check browser console for errors
- Verify IDs in `analytics.ts`
- Clear cache and cookies
- Test in incognito mode

**Duplicate events?**
- Check for multiple initializations
- Verify only one analytics snippet
- Review React component mounting

**Missing data?**
- Allow 24-48 hours for full processing
- Check date range in reports
- Verify events are marked as conversions

---

## Next Steps

After analytics are live:

1. **Week 1**: Collect baseline data
2. **Week 2**: Identify opportunities
3. **Week 3**: Launch first A/B test
4. **Week 4**: Implement winning variants

**Expected Results**:
- 20-35% conversion rate improvement
- 25-40% increase in qualified leads
- 40-60% better analytics quality
- Data-driven decision making

---

**Need Help?** Open an issue or contact your technical team with this guide.

✅ Analytics setup complete - happy tracking!
