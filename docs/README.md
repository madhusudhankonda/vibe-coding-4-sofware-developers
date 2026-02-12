# Course Website

This folder contains the GitHub Pages website for the AI 101: Vibe Coding for Software Developers course.

## 🌐 Live Site

Once deployed, the site will be available at:
```
https://madhusudhankonda.github.io/vibe-coding-4-sofware-developers/
```

## 📁 Structure

```
docs/
├── index.html              # Main landing page
├── modules.html            # Detailed module breakdown
├── success.html            # Post-payment success page
├── SETUP_GUIDE.md         # Complete setup instructions
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── stripe-integration.js  # Stripe payment integration
│   └── images/            # Image assets (add your images here)
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select source: `main` branch, `/docs` folder
4. Save and wait for deployment

### 2. Set Up Stripe (Optional)

For payment processing, follow the [SETUP_GUIDE.md](SETUP_GUIDE.md)

**Quick option:** Use Stripe Payment Links (no backend required)

## 🎨 Customization

### Colors

Edit `assets/css/style.css` to change colors:

```css
:root {
    --primary-color: #0000ff;    /* Main blue */
    --secondary-color: #ffeb3b;  /* Yellow accent */
    --text-dark: #1a1a1a;       /* Text color */
}
```

### Content

- **Landing page**: Edit `index.html`
- **Modules**: Edit `modules.html`
- **Success page**: Edit `success.html`

### Pricing

Update pricing in `index.html`:

```html
<div class="price">
    <span class="currency">$</span>
    <span class="amount">99</span>
</div>
```

## 💳 Stripe Integration

### Option 1: Payment Links (Recommended)

1. Create a Payment Link in Stripe Dashboard
2. Replace the button in `index.html`:
   ```html
   <a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary">Enroll Now</a>
   ```

### Option 2: Custom Checkout

1. Update `assets/js/stripe-integration.js` with your keys
2. Set up a backend server (see SETUP_GUIDE.md)
3. Deploy backend and update API endpoint

## 📊 Adding Analytics

Add Google Analytics before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🖼️ Adding Images

1. Place images in `assets/images/`
2. Reference in HTML:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

Recommended images:
- Course banner
- Instructor photo
- Tool logos
- Project screenshots

## 🎯 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI with gradient hero
- ✅ Stripe payment integration ready
- ✅ Multiple pricing tiers
- ✅ Module breakdown page
- ✅ Success page for post-purchase
- ✅ Clean, professional design
- ✅ Fast loading
- ✅ SEO-friendly

## 📱 Mobile Responsive

The site is fully responsive and looks great on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Local Development

To test locally:

1. Open `index.html` in a browser, or
2. Use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
3. Visit `http://localhost:8000`

## 🚀 Deployment

### To GitHub Pages

```bash
# After making changes
git add docs/
git commit -m "Update website"
git push origin main
```

Changes will be live in 2-3 minutes.

### Custom Domain

1. Add CNAME file:
   ```bash
   echo "yourdomain.com" > docs/CNAME
   ```
2. Configure DNS at your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🎨 Design Credits

- Design: Modern, clean professional design
- Colors: Blue primary with yellow accents (matching course branding)
- Typography: System fonts for fast loading
- Icons: Emoji for universal compatibility

## 📧 Support

For questions about the website:
- Open an issue on GitHub
- Contact through course website
- Email: [Your email]

## 📄 License

Course website content © 2026 Madhusudhan Konda

---

**Ready to launch your course website!** 🚀
