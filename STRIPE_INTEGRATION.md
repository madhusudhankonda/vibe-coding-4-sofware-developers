# 🔗 Connecting Your Stripe Product to the Website

You've already created your Stripe product! Here's how to connect it to your website.

## ✅ What You Have

- **Product**: AI 101 - Vibe Coding for Software Developers
- **Price**: £50.00
- **Product ID**: `prod_Ty5CmDbAIR3jVF`
- **Status**: Active ✅

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Payment Link in Stripe

1. **Go to your Stripe product** (you're already there!)
   
2. **Click "Create payment link"** (or look for a payment link button)

3. **Configure the payment link:**
   ```
   Success URL: https://madhusudhankonda.github.io/ai/success.html
   
   After payment: Redirect to success URL
   
   Collect customer information:
   - ✅ Email address (required)
   - ⬜ Billing address (optional)
   - ⬜ Phone number (optional)
   
   Payment methods:
   - ✅ Card
   - ⬜ Apple Pay
   - ⬜ Google Pay (optional)
   ```

4. **Click "Create link"**

5. **Copy your Payment Link** - it will look like:
   ```
   https://buy.stripe.com/test_xxxxxxxxxxxxx
   ```
   (or without "test_" if you're in live mode)

### Step 2: Update Your Website

The website has been updated to show **£50** pricing.

Now you need to add your Payment Link:

1. Open: `docs/index.html`
2. Find line 241 (around the "Enroll Now" button)
3. Replace `YOUR_STRIPE_PAYMENT_LINK` with your actual link:

**Current code (line 241):**
```html
<a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary">Enroll Now</a>
```

**Update to:**
```html
<a href="https://buy.stripe.com/test_xxxxx" class="btn btn-primary">Enroll Now</a>
```
(Use your actual Payment Link URL)

### Step 3: Commit and Push

```bash
git add docs/index.html
git commit -m "Connect Stripe payment link"
git push origin main
```

### Step 4: Test!

1. Wait 2-3 minutes for GitHub Pages to update
2. Visit your website
3. Click "Enroll Now"
4. You'll be taken to Stripe's secure checkout
5. Use a test card to complete payment:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/34)
   - CVC: Any 3 digits (e.g., 123)
6. You should be redirected to your success page!

## 🧪 Testing vs Live Mode

### Currently in Test Mode?

If you see "test_" in your payment link, you're in test mode (good for testing!)

**Test cards:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requires 3D Secure: `4000 0025 0000 3155`

### Going Live

When ready to accept real payments:

1. Switch to **Live mode** in Stripe (top right toggle)
2. Complete Stripe account verification
3. Create a new Payment Link in Live mode
4. Update the website with the Live payment link
5. Test with a real small payment
6. Launch! 🚀

## 📧 What Happens After Payment?

1. **Customer pays** on Stripe
2. **Stripe processes** the payment
3. **Customer redirected** to success page
4. **Stripe sends email** receipt to customer
5. **You receive notification** in Stripe dashboard

### Set Up Email Notifications

To automatically send course access:

**Option 1: Stripe Email (Built-in)**
- Stripe automatically sends payment receipts
- Customize in: Settings > Emails > Receipts
- Add course access info to receipt

**Option 2: Use Webhooks + Email Service**
- Set up Stripe webhook
- Connect to email service (Mailchimp, SendGrid)
- Automate welcome emails with course details

**Option 3: Manual (For Small Groups)**
- Check Stripe dashboard for new payments
- Manually send course access email
- Simple for limited enrollment

## 💡 Pro Tips

### Add Course Details to Receipt

In Stripe Dashboard:
1. Go to Settings > Receipts
2. Customize email receipt
3. Add course information:
   ```
   Thank you for enrolling in AI 101!
   
   Course Date: 21st February 2026, 10:00-12:00 GMT
   
   Access course materials:
   https://github.com/madhusudhankonda/ai
   
   You will receive joining instructions 1 week before the course.
   ```

### Track Your Sales

Monitor in Stripe Dashboard:
- Payments > All payments
- View customer emails
- Export data for tax records
- See conversion rates

## 🔒 Security Reminders

✅ **Safe to share:**
- Payment Links (public URLs)
- Publishable Keys (start with `pk_`)

❌ **Never share:**
- Secret Keys (start with `sk_`)
- Webhook signing secrets
- Customer data

## 🆘 Troubleshooting

**Payment Link not working?**
- Check link is active in Stripe
- Verify URL copied correctly
- Try in incognito mode

**Success page not loading?**
- Check success URL in Payment Link settings
- Verify GitHub Pages is enabled
- Test success page URL directly

**Want to change price?**
- Create new Payment Link with new price
- Or edit product price in Stripe
- Update website with new link

## 📞 Need Help?

- **Stripe Support**: https://support.stripe.com
- **GitHub Issues**: Open an issue in your repo
- **Stripe Docs**: https://stripe.com/docs/payment-links

---

## ✅ Quick Checklist

- [ ] Create Payment Link in Stripe
- [ ] Copy Payment Link URL
- [ ] Update `docs/index.html` line 241
- [ ] Commit and push changes
- [ ] Wait for GitHub Pages to deploy
- [ ] Test with test card
- [ ] Verify success page works
- [ ] Customize Stripe receipt email
- [ ] Switch to Live mode when ready
- [ ] Launch! 🎉

---

**Your website is ready! Just add your Payment Link and you're live!** 🚀
