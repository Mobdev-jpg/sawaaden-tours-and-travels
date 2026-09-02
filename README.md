# Sawaaden Tours & Travels

A responsive, SEO-focused travel agency website for **Sawaaden Tours & Travels**, Gangtok, Sikkim.

## Website

Primary domain: **https://sawaadentours.in/**

## Features

- Responsive mobile navigation
- Sikkim tour packages and destination sections
- Nathula, Tsomgo, North Sikkim, Gurudongmar, Silk Route, Pelling and South Sikkim coverage
- Custom-tour enquiry through WhatsApp and phone
- Google Maps location and review links
- SEO metadata, Open Graph and Twitter metadata
- TravelAgency JSON-LD structured data
- `robots.txt` and a clean XML sitemap
- Custom favicon and web app manifest
- Custom 404 page
- GitHub Pages custom-domain configuration

## Business

**Sawaaden Tours & Travels (Silk Route Tourism)**  
Metro-Point Fly-Over, National Highway 31A, Mahatma Gandhi Marg, Arithang, Gangtok, Sikkim 737102  
Phone: +91 97755 52239  
Website: https://sawaadentours.in/  
Facebook: https://www.facebook.com/sawaadentoursandtravels/

## GitHub Pages launch

The repository is prepared for GitHub Pages from the `main` branch and contains a `CNAME` file for `sawaadentours.in`.

In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save.

At the domain provider, configure the apex domain with GitHub Pages A records:

- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

For `www`, use a CNAME pointing to `Mobdev-jpg.github.io`.

After DNS propagation, return to **Settings → Pages**, confirm `sawaadentours.in` as the custom domain, and enable **Enforce HTTPS** when GitHub makes it available.

GitHub recommends verifying the custom domain at the account level as an additional protection against domain takeover.

## Local development

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## SSH

```bash
git remote add origin git@github.com:Mobdev-jpg/sawaaden-tours-and-travels.git
git branch -M main
git push -u origin main
```

## SEO

The site uses crawlable semantic HTML, local Sikkim travel terms, structured data, Open Graph metadata, `robots.txt` and a sitemap. Google rankings cannot be guaranteed; long-term visibility depends on accurate business information, Search Console, genuine reviews, useful travel content and authoritative links.