# 🎓 Cohort Management System Guide

Complete guide to managing course registrations, cohorts, and student communications.

---

## 📋 Option 1: Google Forms + Sheets (Recommended - FREE)

Perfect for small to medium cohorts. No coding required!

### Step 1: Create Registration Form

1. **Go to Google Forms**: https://forms.google.com
2. **Create new form**: "AI 101 Course Registration"
3. **Add these fields**:

```
✅ Required Fields:
- Full Name (Short answer)
- Email Address (Short answer, email validation)
- Company/Organization (Short answer)
- Experience Level (Multiple choice)
  • Beginner
  • Intermediate
  • Advanced
- Preferred Cohort (Multiple choice)
  • Next Available
  • [Specific dates when announced]
- How did you hear about us? (Short answer)

✅ Optional Fields:
- LinkedIn Profile (Short answer)
- GitHub Username (Short answer)
- What do you hope to build? (Paragraph)
- Dietary restrictions (for in-person events)
```

4. **Settings**:
   - ✅ Collect email addresses
   - ✅ Limit to 1 response
   - ✅ Send confirmation email to respondents
   - ✅ Allow response editing

### Step 2: Set Up Google Sheets Tracking

Your form automatically creates a Google Sheet. Enhance it:

**Sheet 1: "Form Responses"**
- Auto-populated by form submissions

**Sheet 2: "Cohort Tracker"**
Create columns:
```
| Cohort | Start Date | Status | Student Count | Paid Count | Completed |
|--------|-----------|---------|---------------|------------|-----------|
| Cohort 1 | TBD | Planning | 0 | 0 | 0 |
```

**Sheet 3: "Student Database"**
Enhanced tracking:
```
| Name | Email | Cohort | Payment Status | Access Granted | Completion | Notes |
|------|-------|--------|----------------|----------------|------------|-------|
```

### Step 3: Automate with Google Apps Script (Optional)

Add automation to send confirmation emails:

```javascript
// Go to Extensions > Apps Script in your Google Sheet
function onFormSubmit(e) {
  var email = e.values[1]; // Email column
  var name = e.values[2]; // Name column
  
  var subject = "Welcome to AI 101 - Vibe Coding!";
  var message = `
Hi ${name},

Thank you for registering for AI 101: Vibe Coding for Software Developers!

We'll be in touch soon with:
- Cohort start dates
- Payment instructions
- Pre-course materials

In the meantime:
- GitHub: https://github.com/madhusudhankonda/ai
- Website: https://chocolateminds.com/ai

Questions? Just reply to this email.

Best regards,
Madhusudhan Konda
  `;
  
  MailApp.sendEmail(email, subject, message);
}

// Set trigger: Edit > Current project's triggers > Add Trigger
// Function: onFormSubmit
// Event: On form submit
```

---

## 🔄 Option 2: Airtable + Zapier (More Features)

Professional solution with automation.

### Benefits:
- ✅ Better interface than Google Sheets
- ✅ Kanban boards for cohort management
- ✅ Built-in forms
- ✅ Email automation via Zapier
- ✅ Payment tracking
- ✅ Calendar view

### Setup:

1. **Create Airtable Base**: https://airtable.com
2. **Tables**:
   - Students (Name, Email, Cohort, Payment Status, etc.)
   - Cohorts (Name, Start Date, Capacity, Enrolled Count)
   - Communications (Email log, sent date, template used)

3. **Airtable Form**: Create public form for registrations

4. **Zapier Automations**:
   - New registration → Send welcome email
   - Payment received → Grant course access
   - 1 week before cohort → Send reminder email
   - Course complete → Send certificate

**Cost**: Free for <1,000 records, then $10/month

---

## 💳 Option 3: Integrate with Stripe + Email Service

Connect payments directly to cohort management.

### Architecture:
```
Website → Stripe Payment → Webhook → Your System → Email Service
```

### Setup with Stripe Webhooks:

1. **Create Google Sheet or Airtable database**

2. **Set up Stripe Webhook**:
   - Stripe Dashboard > Developers > Webhooks
   - Add endpoint (use Zapier webhook URL or Google Apps Script web app)
   - Listen for: `checkout.session.completed`

3. **On payment success**:
   - Add student to cohort
   - Send welcome email
   - Grant GitHub access
   - Add to email list

### Email Services (Choose one):

**A. Mailchimp** (Free up to 500 contacts)
- Create audience/list
- Set up automated welcome series
- Tag by cohort

**B. ConvertKit** (Free up to 300 subscribers)
- Better for creators
- Visual automation builder
- Tag-based segmentation

**C. SendGrid** (Free 100 emails/day)
- Developer-friendly
- Good API
- Transactional + marketing emails

**D. Gmail + Google Groups** (Free)
- Simple email lists
- Create group per cohort
- Use Gmail to send updates

---

## 📧 Email Templates

### 1. Registration Confirmation
```
Subject: Welcome to AI 101! 🎉

Hi [Name],

Thanks for registering for AI 101: Vibe Coding for Software Developers!

What's Next:
→ We'll email you cohort dates within 48 hours
→ Payment link will be sent separately
→ Course materials: [GitHub Link]

Questions? Just reply to this email.

Best,
Madhusudhan
```

### 2. Cohort Assignment
```
Subject: You're in Cohort [X] - Starting [Date]!

Hi [Name],

Great news! You've been assigned to Cohort [X].

📅 Start Date: [Date]
⏰ Schedule: [Details]
💻 Format: Live online sessions

Next Steps:
1. Complete payment: [Stripe Link]
2. Join our community: [Discord/Slack Link]
3. Pre-course setup: [GitHub Repo]

See you soon!
Madhusudhan
```

### 3. Pre-Course Reminder (1 week before)
```
Subject: Your AI 101 Course Starts in 1 Week! 🚀

Hi [Name],

Excited for next week? Here's what to prepare:

✅ Required Setup:
- Install VS Code or Cursor
- Sign up for GitHub Copilot (free trial)
- Clone course repo: [Link]

📚 Optional Reading:
- [Resource 1]
- [Resource 2]

🔗 Zoom Link: [Link]
📅 Add to Calendar: [.ics file]

Questions? Reply to this email.

Can't wait to see you!
Madhusudhan
```

### 4. Post-Course Follow-up
```
Subject: Thanks for taking AI 101! 🎓

Hi [Name],

Congratulations on completing AI 101!

📜 Your certificate: [Link]
💻 Course materials: Available forever
🎯 Next steps: [Suggestions]

Keep building with AI!

Optional:
- Leave a review: [Link]
- Join alumni community: [Link]
- Share your projects: [Link]

Madhusudhan
```

---

## 🎯 Recommended Workflow

### For Your First Few Cohorts (0-50 students):

```
1. Google Form for registration
   ↓
2. Responses → Google Sheet
   ↓
3. Manual review & cohort assignment
   ↓
4. Send payment link (Stripe)
   ↓
5. Track payment in Sheet
   ↓
6. Send emails via Gmail or Mailchimp
   ↓
7. Grant course access (GitHub, Discord)
```

### As You Scale (50+ students):

```
1. Airtable form for registration
   ↓
2. Zapier automation
   ↓
3. Auto-assign to cohort (based on date/capacity)
   ↓
4. Stripe payment link auto-sent
   ↓
5. Payment webhook → Update Airtable
   ↓
6. ConvertKit automation sends email series
   ↓
7. Auto-grant access (Zapier)
```

---

## 🔧 Quick Start: 30-Minute Setup

**Step 1 (5 min)**: Create Google Form
- Use template above
- Add your branding

**Step 2 (5 min)**: Set up confirmation email
- Form settings > Send respondent a copy
- Customize confirmation message

**Step 3 (10 min)**: Create tracking sheet
- Add cohort tracker tab
- Create status columns

**Step 4 (10 min)**: Set up Mailchimp free account
- Create audience
- Import from Google Sheets (when needed)
- Create welcome automation

**Done!** You can now accept registrations.

---

## 📊 Cohort Management Dashboard (Google Sheets)

Create a simple dashboard:

```
===========================================
         COHORT OVERVIEW DASHBOARD
===========================================

Total Registrations:  [=COUNTA(Sheet1!A:A)]
Paid Students:        [=COUNTIF(Sheet1!D:D,"Paid")]
Pending Payment:      [=COUNTIF(Sheet1!D:D,"Pending")]
Active Cohorts:       [=COUNTIF(Cohorts!C:C,"Active")]

-------------------------------------------
CURRENT COHORT STATUS
-------------------------------------------

Cohort 1: [Start Date]
- Capacity: 20
- Enrolled: 15
- Paid: 12
- Available: 5

Cohort 2: [Start Date]
- Capacity: 20
- Enrolled: 8
- Paid: 5
- Available: 12
```

---

## 🎓 Managing Multiple Cohorts

### Naming Convention:
```
AI101-2026-Q1-01  (Year-Quarter-Number)
AI101-FEB-2026    (Month-Year)
COHORT-001        (Simple sequential)
```

### Capacity Planning:
- Start small: 10-15 students
- Optimal: 20-25 students
- Maximum: 30 students (for quality interaction)

### Scheduling:
- Monthly cohorts (sustainable)
- Quarterly cohorts (intensive prep)
- Rolling admission (self-paced option)

---

## 💡 Pro Tips

1. **Collect Payment After Registration**
   - Higher conversion than payment-first
   - Send payment link within 24 hours
   - Set deadline (e.g., 7 days before course)

2. **Use Cohort-Specific Links**
   - Create unique Zoom links per cohort
   - Easier tracking
   - Better security

3. **Pre-Course Engagement**
   - Send setup instructions 1 week before
   - Share intro video
   - Create anticipation

4. **Post-Course Follow-up**
   - Send within 24 hours
   - Include certificate
   - Ask for testimonials
   - Offer advanced course discount

5. **Build Community**
   - Discord or Slack channel
   - Cohort-specific channels
   - Alumni network
   - Peer support

---

## 🔗 Quick Links

**Setup Tools:**
- Google Forms: https://forms.google.com
- Google Sheets: https://sheets.google.com
- Airtable: https://airtable.com
- Zapier: https://zapier.com
- Mailchimp: https://mailchimp.com
- ConvertKit: https://convertkit.com

**Email Templates:**
- See templates above
- Customize with your branding
- Test before sending to cohort

---

## 📈 Metrics to Track

Essential KPIs:
- Registration → Payment conversion rate
- Payment → Completion rate
- Student satisfaction (survey)
- Project completion rate
- Referral rate
- Course rating

Use these to improve each cohort!

---

**Questions?** 
Open an issue or update this guide as you learn what works!
