# 🔧 Google Form Setup Instructions

## Connect Form to Payment Page

Follow these steps to redirect students to the payment page after registration.

---

## Step 1: Configure Google Form Confirmation

1. **Open your Google Form**: https://forms.gle/1JqYaa3fRprz8xKK9

2. **Click Settings** (gear icon ⚙️ at top right)

3. **Go to "Presentation" tab**

4. **Find "Confirmation message"** section

5. **Replace default message with**:
```
Thank you for registering! You'll be redirected to complete your enrollment...
```

6. **Scroll down to "Show link to submit another response"**
   - ❌ Uncheck this (we don't want multiple submissions)

---

## Step 2: Add Custom Confirmation URL (IMPORTANT)

Unfortunately, Google Forms doesn't have a built-in redirect feature. Here's the workaround:

### Option A: Update Confirmation Message with Payment Link (Easiest)

1. In Settings > Presentation > Confirmation message
2. Replace with this exact text:

```
🎉 Registration Confirmed!

Thank you for enrolling in AI 101: Vibe Coding for Software Developers!

NEXT STEP: Complete your enrollment
👉 Click here to pay now (£50): https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

Or visit: https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/registered.html

✅ You'll also receive an email within 24 hours with:
- Cohort dates
- Course materials
- Access details

Questions? Reply to the confirmation email you'll receive.

Looking forward to seeing you in the course!
- Madhusudhan Konda
```

**This is the simplest solution!** Students will see the payment link immediately after submitting.

---

### Option B: Auto-Redirect Script (Advanced)

If you want automatic redirect, you'll need to:

1. **Create a custom confirmation page** (we've already done this: `registered.html`)

2. **Use a URL shortener with redirect**:
   - Go to Bitly, TinyURL, or similar
   - Create short link that redirects to:
   ```
   https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/registered.html
   ```
   - Example: `bit.ly/ai101-thanks`

3. **Add to form confirmation**:
   ```
   Thank you! Click here to complete enrollment: bit.ly/ai101-thanks
   ```

---

### Option C: Google Apps Script Auto-Redirect (Most Advanced)

Create a Google Apps Script that sends a custom email with payment link:

1. In Google Form > More (3 dots) > Script editor

2. Paste this code:

```javascript
function onFormSubmit(e) {
  var email = e.values[1]; // Adjust based on your column
  var name = e.values[2];
  
  var subject = "Complete Your AI 101 Enrollment";
  var body = `
Hi ${name},

Thank you for registering for AI 101!

🎯 NEXT STEP: Complete your enrollment by paying the course fee.

Click here to pay now (£50):
https://buy.stripe.com/9B614o3STbCg9Ph4DUcV200

Or visit this page for more details:
https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/registered.html

What happens after payment:
✅ Immediate confirmation email
✅ Access to course materials (GitHub)
✅ Cohort assignment within 24 hours
✅ Community invite (Discord/Slack)

Questions? Just reply to this email.

Best regards,
Madhusudhan Konda
AI Lead & Instructor
chocolateminds.com/ai
  `;
  
  MailApp.sendEmail(email, subject, body);
}
```

3. Set up trigger:
   - Click clock icon (Triggers)
   - Add trigger
   - Function: `onFormSubmit`
   - Event: "On form submit"
   - Save

Now every registration automatically sends an email with payment link!

---

## Step 3: Test the Flow

1. **Submit a test registration** using your own email
2. **Check what happens**:
   - Do you see the confirmation message with payment link?
   - Did you receive an email (if using Apps Script)?
3. **Click the payment link** to verify it works
4. **Adjust messaging** if needed

---

## Recommended Setup (Quickest)

For immediate implementation, I recommend **Option A**:

1. Update Google Form confirmation message with payment link (5 minutes)
2. Set up Google Apps Script auto-email (10 minutes)

This gives you:
- ✅ Immediate payment option in confirmation
- ✅ Auto-email with payment link
- ✅ Professional follow-up
- ✅ Higher conversion rate

---

## Complete Flow After Setup

```
Student fills form
    ↓
Sees confirmation: "Click here to pay: [link]"
    ↓
Receives auto-email with payment link
    ↓
Clicks payment link
    ↓
Pays £50 via Stripe
    ↓
Redirects to success.html
    ↓
You see payment in Stripe
    ↓
You grant course access
```

---

## Email Settings in Google Forms

Also configure these:

1. **Settings > Responses**
   - ✅ "Collect email addresses"
   - ✅ "Limit to 1 response"
   - ✅ "Respondents can edit after submit" (optional)

2. **Settings > Presentation**
   - ✅ "Show progress bar"
   - ❌ "Shuffle question order" (unchecked)
   - ❌ "Show link to submit another response" (unchecked)

---

## Tracking Conversions

In your Google Sheet, add these columns:

| Name | Email | Registered Date | Clicked Payment Link | Paid | Payment Date |
|------|-------|----------------|---------------------|------|--------------|

This helps you track:
- Registration → Payment conversion rate
- Time to payment
- Follow-up needed

---

## Need Help?

If you get stuck:
1. Check the ENROLLMENT_WORKFLOW.md guide
2. Test with your own email first
3. Adjust messaging based on what works

---

**Quick Start:** Just update the Google Form confirmation message with the payment link. That's the 80/20 solution! 🎯
