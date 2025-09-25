const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Meta data
const metaData = {
  '/': {
    title: 'Dentist in Khar West | Dental Clinic in Khar/Bandra',
    description: 'Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs.',
    canonical: 'https://www.symphonydentalcare.in/',
    ogImage: 'https://www.symphonydentalcare.in/static/media/clinic.0a13d280cb75976696ae.webp',
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Symphony Dental Care",
      "telephone": "76780 45993",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Ashray Building, 101, 18th Rd, opp. Laxmi Narayan Temple, Khar, Khar West",
        "addressLocality": "Mumbai",
        "postalCode": "400052",
        "addressCountry": "IN"
      }
    }
  },
  '/thankyou': {
    title: 'Thank You | Symphony Dental Care',
    description: 'Thank you for contacting Symphony Dental Care. We will get back to you soon.',
    canonical: 'https://www.symphonydentalcare.in/thankyou',
    ogImage: 'https://www.symphonydentalcare.in/static/media/clinic.0a13d280cb75976696ae.webp',
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Thank You Page" }
  },
  '/blogs/top-10-dental-myths-busted-by-a-dentist': {
    title: 'Top 10 Dental Myths Busted by a Dentist | Symphony Dental Care',
    description: 'Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist in Khar West.',
    canonical: 'https://www.symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist',
    ogImage: 'https://www.symphonydentalcare.in/img/blog-dental-myths.webp',
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Top 10 Dental Myths Busted by a Dentist" }
  },
  '/blogs/are-bleeding-gums-normal': {
    title: 'Are Bleeding Gums Normal? | Symphony Dental Care',
    description: 'Learn about bleeding gums, their causes, and when to seek professional dental care from our expert dentist in Khar West.',
    canonical: 'https://www.symphonydentalcare.in/blogs/are-bleeding-gums-normal',
    ogImage: 'https://www.symphonydentalcare.in/img/blog-bleeding-gums.webp',
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Are Bleeding Gums Normal?" }
  }
};


// Don't serve static files in production - let Vercel handle them
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, 'build'), {
    index: false
  }));
}

function processHTML(req, res) {
  // For production, use absolute path
  const filePath = process.env.NODE_ENV === 'production' 
    ? path.join(process.cwd(), 'build', 'index.html')
    : path.join(__dirname, 'build', 'index.html');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading index.html:', err);
      return res.status(500).send('Error loading page');
    }
    
    const routeData = metaData[req.path] || metaData['/'];
    
    // Replace placeholders
    data = data.replace(/__TITLE__/g, routeData.title);
    data = data.replace(/__DESCRIPTION__/g, routeData.description);
    data = data.replace(/__CANONICAL__/g, routeData.canonical);
    data = data.replace(/__OG_IMAGE__/g, routeData.ogImage);
    data = data.replace(/__SCHEMA__/g, JSON.stringify(routeData.schema));
    
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}

// Your routes
app.get('/', processHTML);
app.get('/thankyou', processHTML);
app.get('/blogs/top-10-dental-myths-busted-by-a-dentist', processHTML);
app.get('/blogs/are-bleeding-gums-normal', processHTML);
app.get('*', processHTML);

module.exports = app;