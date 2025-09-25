const fs = require('fs');
const path = require('path');

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
      "telephone": "76780 45993"
    }
  },
  '/thankyou': {
    title: 'Thank You | Symphony Dental Care',
    description: 'Thank you for contacting Symphony Dental Care. We will get back to you soon.',
    canonical: 'https://www.symphonydentalcare.in/thankyou',
    ogImage: 'https://www.symphonydentalcare.in/static/media/clinic.0a13d280cb75976696ae.webp',
    schema: { "@context": "https://schema.org", "@type": "WebPage" }
  },
  '/blogs/top-10-dental-myths-busted-by-a-dentist': {
    title: 'Top 10 Dental Myths Busted by a Dentist | Symphony Dental Care',
    description: 'Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist in Khar West.',
    canonical: 'https://www.symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist',
    ogImage: 'https://www.symphonydentalcare.in/img/blog-dental-myths.webp',
    schema: { "@context": "https://schema.org", "@type": "BlogPosting" }
  },
  '/blogs/are-bleeding-gums-normal': {
    title: 'Are Bleeding Gums Normal? | Symphony Dental Care',
    description: 'Learn about bleeding gums, their causes, and when to seek professional dental care from our expert dentist in Khar West.',
    canonical: 'https://www.symphonydentalcare.in/blogs/are-bleeding-gums-normal',
    ogImage: 'https://www.symphonydentalcare.in/img/blog-bleeding-gums.webp',
    schema: { "@context": "https://schema.org", "@type": "BlogPosting" }
  }
};

export default function handler(req, res) {
  const { slug } = req.query;
  const requestPath = '/' + (Array.isArray(slug) ? slug.join('/') : (slug || ''));
  
  // Get the base HTML template
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>__TITLE__</title>
  <meta name="description" content="__DESCRIPTION__" />
  <link rel="canonical" href="__CANONICAL__" />
  <meta property="og:title" content="__TITLE__" />
  <meta property="og:description" content="__DESCRIPTION__" />
  <meta property="og:url" content="__CANONICAL__" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="__OG_IMAGE__" />
  <script type="application/ld+json">__SCHEMA__</script>
  <script defer src="/static/js/main.5a5464ba.js"></script>
  <link href="/static/css/main.1df8b020.css" rel="stylesheet">
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
</html>`;

  const routeData = metaData[requestPath] || metaData['/'];
  
  let html = htmlTemplate;
  html = html.replace(/__TITLE__/g, routeData.title);
  html = html.replace(/__DESCRIPTION__/g, routeData.description);
  html = html.replace(/__CANONICAL__/g, routeData.canonical);
  html = html.replace(/__OG_IMAGE__/g, routeData.ogImage);
  html = html.replace(/__SCHEMA__/g, JSON.stringify(routeData.schema));
  
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
