# GitHub Pages & Stripe Integration Guide

This guide will help you set up GitHub Pages for your course website and integrate Stripe for payments.

## 📖 Table of Contents

1. [Setting Up GitHub Pages](#setting-up-github-pages)
2. [Stripe Integration Options](#stripe-integration-options)
3. [Option 1: Payment Links (Easiest - No Backend)](#option-1-payment-links)
4. [Option 2: Stripe Checkout (Advanced)](#option-2-stripe-checkout)
5. [Testing and Going Live](#testing-and-going-live)

---

## 🚀 Setting Up GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub:
   ```
   https://github.com/madhusudhankonda/vibe-coding-4-sofware-developers
   ```

2. Click on **Settings** (top right)

3. Scroll down to **Pages** section (left sidebar)

4. Under "Source", select:
   - Branch: `main`
   - Folder: `/docs`

5. Click **Save**

6. Your site will be published at:
   ```
   https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/
   ```

### Step 2: Verify Deployment

- Wait 2-3 minutes for GitHub to build your site
- Visit your GitHub Pages URL
- You should see your course landing page!

### Step 3: Custom Domain (Optional)

If you want to use a custom domain like `course.chocolateminds.com`:

1. In GitHub Pages settings, add your custom domain
2. Create a `CNAME` file in the `/docs` folder with your domain
3. Add DNS records at your domain provider:
   - Type: `CNAME`
   - Name: `course` (or your subdomain)
   - Value: `madhusudhankonda.github.io`

---

## 💳 Stripe Integration Options

### Prerequisites

1. Create a Stripe account: https://stripe.com
2. Complete account verification
3. Get your API keys from Dashboard > Developers > API Keys

---

## Option 1: Payment Links (Easiest - No Backend Required)

**Recommended for quick setup!**

### Step 1: Create a Product

1. Log into Stripe Dashboard
2. Go to **Products** (left menu)
3. Click **Add product**
4. Fill in:
   - **Name**: AI 101: Vibe Coding for Software Developers
   - **Description**: Full course access with live sessions, labs, and certificate
   - **Pricing**: One-time payment, $99 USD
5. Click **Save product**

### Step 2: Create a Payment Link

1. In your product, click **Create payment link**
2. Configure:
   - **Collect customer addresses**: Optional (enable if you need it)
   - **Collect phone numbers**: Optional
   - **After payment**: Choose "Show confirmation page" or redirect to success page
   - **Success URL**: `https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/success.html`
3. Click **Create link**
4. Copy your Payment Link URL (looks like: `https://buy.stripe.com/xxxxx`)

### Step 3: Update Your Website

Replace the checkout button in `docs/index.html`:

**Find this:**
```html
<button id="checkout-button" class="btn btn-primary">Enroll Now</button>
```

**Replace with:**
```html
<a href="YOUR_STRIPE_PAYMENT_LINK_URL" class="btn btn-primary">Enroll Now</a>
```

### Step 4: Update Success Page URL

In the Payment Link settings, set:
- **Success URL**: Your GitHub Pages URL + `/success.html`
- Example: `https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/success.html`

### Step 5: Test!

1. Visit your website
2. Click "Enroll Now"
3. You'll be redirected to Stripe's secure payment page
4. Use test card: `4242 4242 4242 4242` (any future expiry, any CVC)
5. After payment, you'll be redirected to your success page

**That's it! You're now accepting payments!** 🎉

---

## Option 2: Stripe Checkout (Advanced - Requires Backend)

This option gives you more control but requires setting up a backend server.

### Architecture Overview

```
Website (GitHub Pages)
    ↓
Backend Server (Create checkout session)
    ↓
Stripe Checkout
    ↓
Success Page (GitHub Pages)
```

### Step 1: Create a Backend

You can use:
- **Vercel/Netlify Functions** (Serverless)
- **AWS Lambda**
- **Node.js/Express server**
- **Python/Flask server**

### Step 2: Example Backend (Node.js)

Create a simple server:

```javascript
// server.js
const express = require('express');
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY');
const app = express();

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_YOUR_PRICE_ID', // Replace with your Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://yourdomain.com/success.html',
      cancel_url: 'https://yourdomain.com/index.html#pricing',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Step 3: Update Frontend

In `docs/assets/js/stripe-integration.js`:

1. Replace `YOUR_STRIPE_PUBLISHABLE_KEY` with your actual publishable key
2. Update the backend endpoint URL
3. Replace `price_xxxxxxxxxxxxx` with your actual Price ID

### Step 4: Deploy Backend

Deploy your backend to:
- Heroku
- Vercel
- Netlify
- AWS
- Your own server

---

## 🧪 Testing and Going Live

### Test Mode

1. In Stripe Dashboard, toggle to **Test mode** (top right)
2. Use test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Requires authentication: `4000 0025 0000 3155`
3. Any future expiry date (e.g., 12/34)
4. Any 3-digit CVC (e.g., 123)

### Go Live

1. Complete Stripe account verification
2. Switch to **Live mode** in Stripe Dashboard
3. Get your **Live API keys**
4. Update your website/backend with Live keys
5. Create a real Payment Link or Product
6. Test with a small real payment
7. Launch! 🚀

---

## 📧 Post-Payment Automation

### Option 1: Stripe Webhooks + Email Service

Set up webhooks to automatically:
- Send confirmation email
- Grant course access
- Add to mailing list

### Option 2: Third-Party Integrations

Use Stripe integrations with:
- **Zapier**: Automate workflows
- **Mailchimp**: Add to email list
- **Discord/Slack**: Add to community
- **Teachable/Thinkific**: Grant course access

---

## 💰 Pricing Tiers

Your website has 3 pricing tiers:

1. **Free**: GitHub access only (no payment needed)
2. **Full Course**: $99 (requires Stripe setup)
3. **Enterprise**: Custom (contact form)

### Setting Up Multiple Tiers

Create multiple products in Stripe:
- Product 1: Full Course Access - $99
- Product 2: Early Bird Special - $79
- Product 3: Team (5 licenses) - $399

Each gets its own Payment Link!

---

## 🔒 Security Best Practices

1. **Never expose Secret Keys**: Keep them on the backend only
2. **Use HTTPS**: GitHub Pages automatically provides SSL
3. **Validate on backend**: Don't trust frontend data
4. **Use webhook signatures**: Verify Stripe webhooks
5. **Test thoroughly**: Use test mode extensively

---

## 📊 Analytics & Tracking

### Track Conversions

Add to `docs/index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Track Stripe Events

Use Stripe Dashboard to monitor:
- Payment attempts
- Success rate
- Failed payments
- Revenue

---

## 🆘 Troubleshooting

### GitHub Pages Not Working

- Check Settings > Pages is enabled
- Verify `/docs` folder is selected
- Wait 5 minutes for deployment
- Check for errors in GitHub Actions tab

### Stripe Not Working

- Verify API keys are correct
- Check if you're in Test vs Live mode
- Ensure Payment Link is active
- Check browser console for errors

### Success Page Not Redirecting

- Verify success URL in Stripe settings
- Check URL is complete with https://
- Test the success page URL directly

---

## 📚 Additional Resources

### Documentation
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Payment Links](https://stripe.com/docs/payment-links)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)

### Support
- Stripe Support: https://support.stripe.com
- GitHub Support: https://support.github.com

---

## ✅ Quick Setup Checklist

- [ ] Enable GitHub Pages
- [ ] Verify site is live
- [ ] Create Stripe account
- [ ] Create product in Stripe
- [ ] Create Payment Link
- [ ] Update website with Payment Link
- [ ] Test with test card
- [ ] Verify success page works
- [ ] Switch to Live mode
- [ ] Test with real payment
- [ ] Launch! 🎉

---

**Need help?** Open an issue on GitHub or contact support!
