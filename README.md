# ARIWA – Global Broadcast Ecosystem

ARIWA is a modern corporate website that showcases Broadcast, IP Video, and AI technology solutions from leading global brands. The website provides product information, company solutions, and contact details in a clean cyber-inspired interface.

---

## Features

- Modern Cyber-Linear UI
- Responsive Layout
- Glassmorphism Design
- Brand Slider with Infinite Auto Scroll
- Product Filtering
- Dynamic Product Detail Page
- Special Layouts for Different Brands
- Embedded Google Maps
- Contact Information
- Official Website Links

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome
- Google Fonts (Inter & JetBrains Mono)

---

## Project Structure

```
ARIWA/
│
├── index.html
├── products.html
├── product-detail.html
├── solutions.html
├── contact.html
│
├── style.css
├── script.js
├── products.js
│
└── assets/
    ├── logos/
    └── products/
```

---

## Pages

### Home

The homepage introduces the ARIWA ecosystem.

Features

- Hero Banner
- Infinite Brand Logo Slider
- Button linking to Products page

---

### Products

Displays all supported technology brands.

Functions

- Filter by Category
  - All
  - Broadcast
  - IP Video
  - AI

- Click any brand to open Product Detail.

---

### Product Detail

Displays detailed information for each brand.

Includes

- Brand Logo
- Brand Description
- Official Website Button
- Product Gallery

Special layouts are implemented for several brands.

| Brand       | Layout                    |
| ----------- | ------------------------- |
| Vizrt       | 2-column Grid             |
| Kiloview    | 2-column Grid             |
| NDI         | YouTube Video             |
| Magewell    | Horizontal Product Slider |
| SNS         | Dual Product Sections     |
| Step Out    | AI Gallery                |
| SponixTech  | Video Gallery             |
| Joymechanix | Product Grid + Video      |
| PTZOptics   | Website Only              |
| Telycam     | Website Only              |
| Isthari     | Website Only              |

---

### Solutions

Displays ARIWA service capabilities.

Includes

- Live Production
- IP Video Workflow
- AI Analytics
- Cloud Infrastructure
- Sports Broadcasting
- Media Security

---

### Contact

Displays company information.

Includes

- Contact Person
- Phone
- Email
- Facebook
- WhatsApp
- Google Maps

---

## JavaScript

### products.js

Contains all product data.

Each object contains:

```javascript
{
  (name, type, desc, url, logo, products);
}
```

---

### script.js

Responsible for

- Infinite Logo Slider
- Drag Support
- Auto Scroll
- Product Navigation

---

### product-detail.html

Loads information dynamically using URL parameters.

Example

```
product-detail.html?name=Vizrt
```

JavaScript then searches

```javascript
products.find(...)
```

to display the correct content.

---

## Product Categories

### Broadcast

- Chyron
- wTVision
- Vizrt
- SNS
- Joymechanix

---

### IP Video

- NDI
- Kiloview
- Magewell
- PTZOptics
- Telycam

---

### AI

- Step Out
- SponixTech
- Isthari

---

## UI Theme

Design Style

- Cyber Corporate
- Glassmorphism
- Neon Accent
- Dark Theme

Primary Colors

```
Teal
#46F3E4

Pink
#FF3BF3

Background
#05080A
```

Fonts

- Inter
- JetBrains Mono

---

## Responsive Design

Optimized for

- Desktop
- Tablet
- Mobile

---

## Assets

Project assets include

- Brand Logos
- Product Images
- Videos
- Icons

Stored under

```
assets/
```

---

## Future Improvements

- Search Products
- Dark / Light Theme Switch
- Product Comparison
- Animations
- Backend Integration
- CMS Support
- Multi-language Support
- Product Search API

---

## Author

Developed for

**ARIWA**
Global Broadcast, IP Video & AI Technology Ecosystem

© 2026 ARIWA
