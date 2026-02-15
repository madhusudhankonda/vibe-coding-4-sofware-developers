# 🚀 Quick Start: Enable GitHub Pages

Follow these simple steps to make your course website live!

## Step 1: Enable GitHub Pages (2 minutes)

1. **Go to your repository**:
   ```
   https://github.com/madhusudhankonda/ai
   ```

2. **Click Settings** (top navigation bar)

3. **Click Pages** (in the left sidebar under "Code and automation")

4. **Configure Source**:
   - Branch: Select `main`
   - Folder: Select `/docs`
   - Click **Save**

5. **Wait for deployment** (2-3 minutes)
   - You'll see a message: "Your site is ready to be published"
   - Then: "Your site is live at..."

## Step 2: Visit Your Website

Your site will be live at:
```
https://madhusudhankonda.github.io/ai/
```

## Step 3: Set Up Payments (Optional)

Choose one of these options:

### Option A: Stripe Payment Links (Easiest - 10 minutes)

1. Create a free Stripe account at https://stripe.com
2. Go to **Products** → **Add product**
3. Create product: "AI 101 Course" - $99
4. Click **Create payment link**
5. Copy the payment link URL
6. Update `docs/index.html` line 168:
   ```html
   <a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary">Enroll Now</a>
   ```
7. Commit and push changes

**Done!** You can now accept payments!

### Option B: Keep Free Access Only

If you want to offer the course for free:
- Keep the current setup
- The "Free Access" tier links to GitHub
- No Stripe setup needed

## Step 4: Customize (Optional)

### Update Instructor Info
Edit `docs/index.html` (search for "Your Instructor" section)

### Change Colors
Edit `docs/assets/css/style.css`:
```css
:root {
    --primary-color: #0000ff;    /* Your brand color */
    --secondary-color: #ffeb3b;  /* Accent color */
}
```

### Add Your Photo
1. Add image to `docs/assets/images/`
2. Update HTML to reference it

## Troubleshooting

### Site not showing up?
- Wait 5 minutes after enabling Pages
- Check Settings > Pages shows "Your site is published"
- Clear browser cache
- Try incognito/private browsing

### Still need help?
See the detailed guide: `docs/SETUP_GUIDE.md`

## 🎉 That's It!

Your course website is now live and ready to accept students!

**Next steps:**
- Share your website URL
- Set up Stripe for payments
- Customize content and colors
- Add your instructor photo
- Set up email notifications

---

**Questions?** Open an issue on GitHub or check the full `SETUP_GUIDE.md`
