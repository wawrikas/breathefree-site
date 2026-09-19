# EasySwipe App Store legal pages

This directory contains the public pages used for the EasySwipe (`photo_card`) App Store submission.

## App Store Connect URLs

Replace `<pages-base-url>` with the published GitHub Pages repository URL.

- Marketing URL (optional): `<pages-base-url>/photo_card/`
- Privacy Policy URL (required): `<pages-base-url>/photo_card/privacy-policy.html`
- Support URL (required for the version metadata): `<pages-base-url>/photo_card/support.html`
- Terms of Use: `<pages-base-url>/photo_card/terms-of-use.html`
- User Privacy Choices URL (optional): the privacy policy URL can be reused because section 6 explains permission and deletion choices.

## Files

- `index.html`: landing page
- `privacy-policy.html`: privacy policy and local-data deletion instructions
- `terms-of-use.html`: supplemental use terms; links to Apple's Standard EULA
- `support.html`: support contact and product-specific FAQ
- `styles.css`, `site.js`: shared presentation and language switcher

The pages support English, Simplified Chinese, Traditional Chinese, and Japanese, and automatically select a suitable language from the browser preference.

## Submission notes

- The text reflects the September 19, 2026 Release configuration: free, no ads, no account, no analytics SDK, no subscription, and no in-app purchase.
- App Store Connect App Privacy should remain “Data Not Collected” only while the shipped binary and all embedded third-party code continue to match that statement.
- Apple requires the privacy policy to also be easily accessible from inside the app. Add links to the privacy policy and terms in the Release settings screen before submission.
- Re-check these pages whenever photo handling, cloud sync, analytics, advertising, diagnostics, accounts, payment, or third-party SDK behavior changes.
- Replace the contact email or copyright owner here and in the HTML pages if the publishing entity changes.

These pages are a product-specific publication draft, not legal advice. Have the final text reviewed for the developer's jurisdiction if needed.
