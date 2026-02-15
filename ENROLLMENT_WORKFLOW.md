# 📋 Enrollment Workflow Guide

## ✅ Fixed Registration → Payment Flow

This guide shows your complete enrollment workflow from student registration to course access.

---

## 🎯 Why Registration First?

**Benefits:**
- ✅ You have all student contact info
- ✅ Can assign to cohorts properly
- ✅ Can communicate with students
- ✅ Track who paid vs who didn't
- ✅ Build anticipation before payment
- ✅ Higher conversion (registered = interested)

---

## 🔄 Complete Student Journey

```
┌─────────────────────────────────────────────────────────────┐
│  STUDENT JOURNEY (Registration → Payment → Access)          │
└─────────────────────────────────────────────────────────────┘

1. Student visits website
   ↓
2. Clicks "Enroll Now" button
   ↓
3. Fills out Google Form
   - Name
   - Email  
   - Mobile Number
   ↓
4. Submits form
   - Auto-confirmation email sent
   - Data saved to Google Sheet
   ↓
5. YOU review registration (within 24 hours)
   ↓
6. YOU send personalized email with:
   - Welcome message
   - Cohort date options
   - Stripe payment link
   - Course details
   ↓
7. Student completes payment via Stripe
   ↓
8. YOU track payment in Google Sheet
   ↓
9. YOU grant course access:
   - GitHub repository access
   - Discord/Slack invite
   - Course materials
   - Calendar invite
   ↓
10. Student joins cohort & starts learning! 🎓
```

---

## 📊 Your Action Items (Step-by-Step)

### Daily: Check New Registrations

**Step 1: Open Google Sheet**
- Go to your form responses sheet
- Check for new submissions

**Step 2: Review Each Registration**
- Note student name, email, phone
- Check for any special notes/questions

**Step 3: Assign to Cohort**
- Add "Cohort" column if not exists
- Assign: "Cohort-March-2026" (or your format)
- Add "Status" column: "Pending Payment"

---

### Within 24 Hours: Send Welcome + Payment Email

**Use this email template:**

```
Subject: Welcome to AI 101! Your Payment Link & Cohort Details

Hi [Name],

Thank you for enrolling in AI 101: Vibe Coding for Software Developers!

📅 YOUR COHORT DETAILS:
- Cohort: [Cohort Name]
- Start Date: [Date]
- Format: Live online sessions
- Duration: 2-part course

💳 COMPLETE YOUR ENROLLMENT:
To secure your spot, please complete payment here:
👉 https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

Price: £50 (one-time payment)

✅ WHAT'S INCLUDED:
- Live sessions with instructor
- Hands-on labs and projects
- Q&A and code review
- Certificate of completion
- Lifetime access to materials
- Community access

📚 WHAT HAPPENS NEXT:
1. Complete payment via the link above
2. You'll receive immediate confirmation
3. 1 week before course: Setup instructions & materials
4. Day of course: Zoom link and final details

🔗 COURSE MATERIALS (Available Now):
GitHub: https://github.com/madhusudhankonda/ai

Questions? Just reply to this email!

Excited to see you in the cohort!

Best regards,
Madhusudhan Konda
AI Lead & Instructor
chocolateminds.com/ai
```

---

### When Payment Received

**You'll see in Stripe Dashboard:**
- Customer email
- Payment amount
- Date/time
- Payment ID

**Update Your Google Sheet:**
```
| Name | Email | Cohort | Payment Status | Payment Date | Access Granted |
|------|-------|--------|----------------|--------------|----------------|
| John | john@ | Mar-26 | ✅ PAID        | 2026-02-14   | Yes            |
```

**Send Confirmation Email:**

```
Subject: Payment Confirmed! Welcome to AI 101 🎉

Hi [Name],

Your payment has been received! You're officially enrolled in:

📚 Course: AI 101 - Vibe Coding for Software Developers
🎓 Cohort: [Cohort Name]
📅 Start Date: [Date]

🚀 IMMEDIATE ACCESS:
- GitHub Repository: [Link]
- Course Discord: [Link]
- Pre-course Materials: [Link]

📧 WHAT'S NEXT:
- One week before: Setup instructions
- Three days before: Zoom link & final details
- Day before: Reminder email
- Day of: See you there!

📝 PRE-COURSE PREPARATION (Optional):
1. Set up VS Code or Cursor
2. Sign up for GitHub Copilot (free trial)
3. Review Module 1 materials

Questions? Reply to this email anytime.

See you in [X] days!

Madhusudhan Konda
```

---

## 📈 Tracking Sheet Template

### Sheet 1: "Registrations"
```
| Timestamp | Name | Email | Phone | Cohort | Payment Status | Payment Date | Access Granted | Notes |
|-----------|------|-------|-------|--------|----------------|--------------|----------------|-------|
```

### Sheet 2: "Cohorts"
```
| Cohort Name | Start Date | Capacity | Registered | Paid | Pending | Completed |
|-------------|-----------|----------|------------|------|---------|-----------|
| Mar-2026    | 2026-03-15| 20       | 15         | 12   | 3       | 0         |
```

### Sheet 3: "Communications Log"
```
| Date | Student | Type | Subject | Sent By |
|------|---------|------|---------|---------|
| 2/14 | John    | Welcome | Welcome + Payment Link | Auto |
| 2/15 | John    | Confirmation | Payment Confirmed | Manual |
```

---

## 🤖 Automation Options (Future)

### Level 1: Manual (Start Here)
- Students register
- You manually send payment links
- You manually track payments
- You manually grant access

**Time:** 5-10 min per student

### Level 2: Semi-Automated
- Students register
- **Google Apps Script sends auto-welcome email** with payment link
- You track payments in Stripe
- You manually grant access

**Time:** 2-3 min per student

### Level 3: Fully Automated (Scale)
- Students register
- Auto-email with payment link
- **Stripe webhook → Update Google Sheet**
- **Zapier → Auto-grant access**
- **Auto-send confirmation email**

**Time:** 30 seconds per student (just monitoring)

---

## 🔧 Quick Setup: Google Apps Script Auto-Email

Add this to your Google Sheet (Extensions > Apps Script):

```javascript
function onFormSubmit(e) {
  // Get form responses
  var email = e.values[1]; // Email column
  var name = e.values[2];  // Name column
  
  // Your payment link
  var paymentLink = "https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200";
  
  // Email subject and body
  var subject = "Welcome to AI 101! Your Payment Link Inside";
  var body = `
Hi ${name},

Thank you for enrolling in AI 101: Vibe Coding for Software Developers!

Complete your enrollment:
${paymentLink}

Price: £50

We'll be in touch with cohort dates within 24 hours.

Best regards,
Madhusudhan Konda
  `;
  
  // Send email
  MailApp.sendEmail(email, subject, body);
}
```

**Set up trigger:**
1. Click clock icon (Triggers)
2. Add trigger
3. Function: `onFormSubmit`
4. Event: "On form submit"
5. Save

Now every registration gets an automatic welcome email! 🎉

---

## 💡 Pro Tips

### 1. Payment Deadline
Set a payment deadline (e.g., 7 days) to create urgency:
```
"Please complete payment within 7 days to secure your spot."
```

### 2. Cohort Assignment Strategy
- Fill cohorts to 80% capacity
- Keep 20% buffer for last-minute registrations
- Close registration 1 week before start

### 3. Follow-up Sequence
```
Day 0: Registration → Welcome + Payment Link
Day 3: No payment? → Gentle reminder
Day 7: Still no payment? → Final reminder
Day 10: Remove from cohort list
```

### 4. Early Bird Discount (Optional)
```
"Register and pay within 48 hours: £40 (save £10!)"
```

### 5. Group Discounts
```
"3+ students from same company: £40 each"
```

---

## 📞 Handling Common Scenarios

### Student asks: "Can I pay later?"
```
"Of course! Your spot is reserved for 7 days. 
Complete payment anytime before [date] to secure your enrollment."
```

### Student asks: "Which cohort should I join?"
```
"We have cohorts starting [dates]. Based on your schedule, 
I'd recommend [specific cohort]. Which works best for you?"
```

### Student asks: "Can I get a refund?"
```
"Yes, we offer a 7-day money-back guarantee if you're not satisfied."
```

### Payment failed:
```
"We noticed your payment didn't go through. 
Please try again or let us know if you need help: [payment link]"
```

---

## ✅ Daily Checklist

**Morning (5 min):**
- [ ] Check new registrations
- [ ] Send welcome emails with payment links
- [ ] Update tracking sheet

**Afternoon (5 min):**
- [ ] Check Stripe for new payments
- [ ] Update payment status in sheet
- [ ] Send confirmation emails
- [ ] Grant course access

**Weekly:**
- [ ] Review cohort capacity
- [ ] Follow up with pending payments
- [ ] Prepare for upcoming cohort
- [ ] Send reminder emails to next cohort

---

## 🎯 Success Metrics

Track these in your sheet:

1. **Registration → Payment Conversion**
   - Target: >70%
   - Formula: (Paid Students / Total Registrations) × 100

2. **Time to Payment**
   - Target: <3 days average
   - Track: Days between registration and payment

3. **Payment → Completion Rate**
   - Target: >80%
   - Track: Students who complete course

4. **Response Time**
   - Target: <24 hours
   - Track: Time to send payment link after registration

---

## 📈 Scaling Up

### At 10+ students/month:
- Add Google Apps Script auto-emails
- Create email templates
- Use Calendly for 1-on-1 calls

### At 50+ students/month:
- Switch to Airtable
- Add Zapier automation
- Use Stripe webhooks
- Hire assistant

### At 100+ students/month:
- Use ConvertKit/Mailchimp
- Full automation
- Dedicated support person
- Self-serve payment page

---

## 🎓 You're All Set!

This workflow ensures:
✅ You capture all student info
✅ Can communicate with cohort
✅ Track payments properly
✅ Deliver great experience
✅ Scale smoothly

**Questions?** Check the COHORT_MANAGEMENT_GUIDE.md for more details!
