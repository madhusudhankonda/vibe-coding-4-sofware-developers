/**
 * Stripe Integration for AI 101 Course
 * 
 * Setup Instructions:
 * 1. Sign up for Stripe at https://stripe.com
 * 2. Get your Publishable Key from Dashboard > Developers > API Keys
 * 3. Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' below with your actual key
 * 4. Create a Product in Stripe Dashboard:
 *    - Name: "AI 101: Vibe Coding for Software Developers"
 *    - Price: $99 (or your preferred amount)
 * 5. Create a Payment Link or use Stripe Checkout
 * 6. Replace the priceId below with your actual Price ID
 */

// Initialize Stripe with your publishable key
// IMPORTANT: Replace with your actual Stripe publishable key
const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Configuration
const config = {
    // Replace with your actual Price ID from Stripe Dashboard
    priceId: 'price_xxxxxxxxxxxxx',
    
    // Course details
    courseName: 'AI 101: Vibe Coding for Software Developers',
    courseDate: '21st February 2026',
    
    // Success and cancel URLs
    successUrl: window.location.origin + '/docs/success.html',
    cancelUrl: window.location.origin + '/docs/index.html#pricing'
};

// Checkout button click handler
document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout-button');
    
    if (checkoutButton) {
        checkoutButton.addEventListener('click', async function(e) {
            e.preventDefault();
            
            // Disable button to prevent multiple clicks
            checkoutButton.disabled = true;
            checkoutButton.textContent = 'Processing...';
            
            try {
                // Option 1: Using Stripe Checkout (Recommended for beginners)
                await redirectToCheckout();
                
                // Option 2: Using Payment Links (Alternative - uncomment to use)
                // window.location.href = 'YOUR_STRIPE_PAYMENT_LINK_URL';
                
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
                checkoutButton.disabled = false;
                checkoutButton.textContent = 'Enroll Now';
            }
        });
    }
});

/**
 * Redirect to Stripe Checkout
 * This requires a backend endpoint to create a checkout session
 */
async function redirectToCheckout() {
    // You'll need to create a backend endpoint to create a checkout session
    // For now, this is a placeholder that shows how it would work
    
    try {
        // Call your backend to create a checkout session
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId: config.priceId,
                courseName: config.courseName,
                successUrl: config.successUrl,
                cancelUrl: config.cancelUrl
            })
        });
        
        const session = await response.json();
        
        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        
        if (result.error) {
            alert(result.error.message);
        }
    } catch (error) {
        console.error('Error:', error);
        // If backend is not set up yet, show instructions
        showSetupInstructions();
    }
}

/**
 * Show setup instructions if Stripe is not configured
 */
function showSetupInstructions() {
    const message = `
Stripe Integration Setup Required

To enable payments, you need to:

1. Sign up for Stripe: https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Update the Stripe key in stripe-integration.js
4. Create a product and price in Stripe
5. Set up a backend endpoint or use Payment Links

For a quick setup without backend:
- Use Stripe Payment Links (easiest option)
- Create a Payment Link in Stripe Dashboard
- Replace the checkout button URL with your Payment Link

Documentation: https://stripe.com/docs/payment-links
    `;
    
    alert(message);
}

/**
 * Alternative: Simple Payment Link Integration (No Backend Required)
 * 
 * Steps:
 * 1. Go to Stripe Dashboard > Payment Links
 * 2. Create a new Payment Link for your course
 * 3. Copy the Payment Link URL
 * 4. Update the button to use the Payment Link:
 * 
 * Example:
 * <a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary">Enroll Now</a>
 * 
 * This is the easiest way to accept payments without setting up a backend!
 */

// Export for use in other files if needed
window.StripeIntegration = {
    config,
    redirectToCheckout
};
