# 💰 Payment Tracking System

## Problem: How to know who paid vs who didn't?

**Two separate systems:**
- Google Form → Captures registrations
- Stripe → Captures payments

**Solution:** Match them up and track status

---

## 📋 Quick Setup (10 minutes)

### Step 1: Enhance Your Google Sheet

Open your form responses sheet and add these columns:

```
Column F: Payment Status
Column G: Payment Date  
Column H: Stripe Payment ID
Column I: Amount Paid
Column J: Cohort Assigned
Column K: Access Granted
Column L: Last Contact Date
Column M: Notes
```

### Step 2: Use This Template

Create a second sheet called "Dashboard" with this:

```
===========================================
         PAYMENT TRACKING DASHBOARD
===========================================

Total Registrations:     [=COUNTA(Sheet1!A:A)-1]
Paid Students:          [=COUNTIF(Sheet1!F:F,"PAID")]
Pending Payment:        [=COUNTIF(Sheet1!F:F,"PENDING")]
Conversion Rate:        [=Paid/Total*100]%

-------------------------------------------
STUDENTS NEEDING FOLLOW-UP
-------------------------------------------

[Filter: Status = "PENDING" AND Days Since Registration > 3]
```

---

## 🔍 Daily Tracking Workflow

### Morning Routine (5 minutes)

**1. Check New Registrations**
```
- Open Google Sheet
- See new rows (form submissions from yesterday/today)
- Mark all new entries as "PENDING"
```

**2. Check Stripe Dashboard**
```
- Go to: https://dashboard.stripe.com/payments
- Filter: Last 24 hours
- Note all customer emails who paid
```

**3. Match & Update**
```
- For each Stripe payment:
  - Find email in Google Sheet
  - Update status to "PAID"
  - Add payment date
  - Add Stripe payment ID (for reference)
```

**4. Identify Who Didn't Pay**
```
- Anyone with "PENDING" status needs follow-up
- If > 3 days, send reminder email
```

---

## 📧 Follow-up Email Schedule

### Day 0: Registration
- Auto-confirmation with payment link

### Day 1: If Not Paid
- No action (give them time)

### Day 3: If Still Not Paid
**Send reminder:**
```
Subject: Complete Your AI 101 Enrollment

Hi [Name],

I noticed you registered for AI 101 but haven't completed payment yet.

Quick reminder: Complete your enrollment here (£50):
https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

Your spot is reserved until [Date]. Don't miss out!

Questions? Just reply.

Best,
Madhusudhan
```

### Day 7: Final Reminder
**Last chance email:**
```
Subject: Last Chance: Your AI 101 Spot Expires Soon

Hi [Name],

This is a friendly final reminder - your reserved spot expires in 24 hours.

Secure your enrollment now:
https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

After this, you'll need to re-register.

Don't miss out!
Madhusudhan
```

### Day 8: Remove from List
- Mark as "EXPIRED"
- Free up the spot

---

## 🤖 Automated Matching (Advanced)

### Option 1: Manual Formula in Google Sheets

Add this formula in your "Payment Status" column:

```
=IF(ISBLANK(B2),"",
   IF(VLOOKUP(B2,'Stripe Import'!A:A,1,FALSE)=B2,"PAID","PENDING"))
```

This checks if email exists in a "Stripe Import" sheet.

### Option 2: Stripe Webhook → Google Sheet (Full Automation)

**What it does:**
- Stripe payment happens → Webhook fires
- Zapier catches webhook
- Auto-updates Google Sheet: Status = "PAID"

**Setup:**
1. Create Zapier account (free)
2. New Zap:
   - Trigger: Stripe "New Payment"
   - Action: Google Sheets "Update Row"
   - Match: Customer email
   - Update: Payment Status = "PAID"

**Cost:** Free for <100 payments/month

### Option 3: Google Apps Script (No Extra Cost)

Add this script to auto-check Stripe:

```javascript
// This checks Stripe API and updates payment status
function checkStripePayments() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // Your Stripe secret key (NEVER share this!)
  var stripeKey = "sk_live_YOUR_KEY";
  
  for (var i = 1; i < data.length; i++) {
    var email = data[i][1]; // Email column
    var currentStatus = data[i][5]; // Payment Status column
    
    if (currentStatus !== "PAID") {
      // Check Stripe for this email
      var paid = checkStripeForEmail(email, stripeKey);
      
      if (paid) {
        sheet.getRange(i + 1, 6).setValue("PAID");
        sheet.getRange(i + 1, 7).setValue(new Date());
      }
    }
  }
}

function checkStripeForEmail(email, apiKey) {
  // Query Stripe API
  var url = "https://api.stripe.com/v1/charges?customer=" + email;
  var options = {
    "method": "get",
    "headers": {
      "Authorization": "Bearer " + apiKey
    }
  };
  
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  
  return data.data.length > 0;
}
```

**Run this daily:** Set up a time-based trigger

---

## 📊 Conversion Funnel Tracking

Track these metrics:

```
1. Registrations:        [X people]
   ↓
2. Viewed payment link:  [X%] 
   ↓
3. Clicked payment link: [X%]
   ↓
4. Completed payment:    [X%] ← Your conversion rate
   ↓
5. Joined cohort:        [X%]
   ↓
6. Completed course:     [X%]
```

**Goal conversions:**
- Registration → Payment: >70%
- Payment → Completion: >80%

---

## 🎯 Quick Reference: Payment Statuses

Use these standard statuses in your sheet:

```
⏳ PENDING      - Registered, not paid yet
📧 REMINDED     - Sent follow-up email
✅ PAID         - Payment received
🎓 ENROLLED     - Added to cohort
🚀 ACTIVE       - Currently in course
✨ COMPLETED    - Finished course
❌ EXPIRED      - Didn't pay, removed
🔄 REFUNDED     - Requested refund
```

---

## 📱 Daily Checklist

**Every Morning:**
- [ ] Check Google Sheet for new registrations (2 min)
- [ ] Check Stripe for new payments (2 min)
- [ ] Match emails and update statuses (3 min)
- [ ] Send reminders to PENDING > 3 days (5 min)

**Weekly:**
- [ ] Review conversion rates
- [ ] Follow up with pending payments
- [ ] Clean up expired registrations

---

## 🔔 Set Up Alerts

### Stripe Email Notifications
1. Stripe Dashboard → Settings → Email notifications
2. Enable: "Successful payments"
3. You'll get email every time someone pays

### Google Sheets Notifications
1. Tools → Notification rules
2. "When someone submits a form"
3. Get instant email for new registrations

### Pro Tip: Create Gmail Filters
```
From: Stripe
Subject: "Payment succeeded"
→ Label: "Course Payments"
→ Star
```

Now you see all payments in one place!

---

## 💡 Best Practice Workflow

```
8:00 AM - Check new registrations
8:05 AM - Check Stripe payments  
8:10 AM - Update Google Sheet statuses
8:15 AM - Send follow-ups to pending (Day 3+)
8:20 AM - Done! ✅

Weekly: Review metrics and optimize
```

---

## 🆘 Common Scenarios

### Scenario 1: Student says "I paid but no access"
```
1. Check Stripe for their email
2. Find payment ID
3. Check Google Sheet - is it marked PAID?
4. If yes, grant access immediately
5. If no payment found, ask for receipt
```

### Scenario 2: Duplicate payment
```
1. Check Stripe for both transactions
2. Issue refund for duplicate
3. Keep one payment active
4. Update sheet: Status = PAID, Notes = "Duplicate refunded"
```

### Scenario 3: Wrong email in form
```
1. Check Stripe payment email
2. Update Google Sheet with correct email
3. Send confirmation to correct email
4. Grant access using Stripe email
```

---

## 📈 Sample Tracking Sheet

```
| Name  | Email         | Reg Date | Status    | Pay Date | Days Since Reg | Action Needed |
|-------|---------------|----------|-----------|----------|----------------|---------------|
| John  | john@ex.com   | 2/10     | ✅ PAID   | 2/10     | 3              | Grant access  |
| Jane  | jane@ex.com   | 2/12     | ⏳ PENDING| -        | 1              | Wait          |
| Bob   | bob@ex.com    | 2/09     | 📧 REMINDED| -       | 4              | Final reminder|
| Alice | alice@ex.com  | 2/13     | ✅ PAID   | 2/13     | 0              | Grant access  |
| Tom   | tom@ex.com    | 2/05     | ❌ EXPIRED| -        | 8              | Archive       |
```

---

## 🎓 Success Metrics

**Good conversion rates:**
- 70-80%: Registration → Payment (within 7 days)
- 80-90%: Payment → Course completion

**If lower:**
- Check: Is payment link working?
- Try: Shorter follow-up time (Day 1 instead of Day 3)
- Test: Different email subject lines
- Consider: Payment plan option

---

## 🔗 Quick Links

**Tools:**
- Google Sheet: Your form responses
- Stripe Dashboard: https://dashboard.stripe.com/payments
- Zapier (automation): https://zapier.com

**Your Links:**
- Registration form: https://forms.gle/1JqYaa3fRprz8xKK9
- Payment link: https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

---

**Remember:** Check daily for first 2 weeks, then weekly once you have a system!
