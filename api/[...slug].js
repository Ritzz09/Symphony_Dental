// File: api/[...slug].js
const metaData = {
  '/': {
    title: 'Dentist in Khar West | Dental Clinic in Khar/Bandra',
    description: 'Looking for a dentist in Khar/Bandra? Symphony Dental Care offers expert dental services with a focus on patient comfort, care, and the latest treatments for all your oral health needs.',
    canonical: 'https://symphonydentalcare.in/',
    ogImage: 'https://symphonydentalcare.in/img/clinic.webp',
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
    canonical: 'https://symphonydentalcare.in/thankyou',
    ogImage: 'https://symphonydentalcare.in/img/clinic.webp',
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Thank You Page" }
  },
  '/blogs/top-10-dental-myths-busted-by-a-dentist': {
    title: 'Top 10 Dental Myths Busted by a Dentist | Symphony Dental Care',
    description: 'Discover the truth behind common dental myths. Learn facts about oral health from our experienced dentist in Khar West.',
    canonical: 'https://symphonydentalcare.in/blogs/top-10-dental-myths-busted-by-a-dentist',
    ogImage: 'https://symphonydentalcare.in/img/blog-dental-myths.webp',
    schema: { 
      "@context": "https://schema.org", 
      "@type": "BlogPosting",
      "headline": "Top 10 Dental Myths Busted by a Dentist",
      "author": { "@type": "Person", "name": "Dr. Sailee Kalyankar" },
      "publisher": { "@type": "Organization", "name": "Symphony Dental Care" }
    }
  },
  '/blogs/are-bleeding-gums-normal': {
    title: 'Are Bleeding Gums Normal? | Symphony Dental Care',
    description: 'Learn about bleeding gums, their causes, and when to seek professional dental care from our expert dentist in Khar West.',
    canonical: 'https://symphonydentalcare.in/blogs/are-bleeding-gums-normal',
    ogImage: 'https://symphonydentalcare.in/img/blog-bleeding-gums.webp',
    schema: { 
      "@context": "https://schema.org", 
      "@type": "BlogPosting",
      "headline": "Are Bleeding Gums Normal?",
      "author": { "@type": "Person", "name": "Dr. Sailee Kalyankar" },
      "publisher": { "@type": "Organization", "name": "Symphony Dental Care" }
    }
  }
};

export default function handler(req, res) {
  const { slug } = req.query;
  const requestPath = '/' + (Array.isArray(slug) ? slug.join('/') : (slug || ''));
  
  console.log('Processing route:', requestPath);
  
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N4MLNGGV');
  </script>
  
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
  <meta property="og:site_name" content="Symphony Dental Care" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="__TITLE__" />
  <meta name="twitter:description" content="__DESCRIPTION__" />
  <meta name="twitter:image" content="__OG_IMAGE__" />
  
  <link rel="shortcut icon" href="/img/logo.jpg" type="image/x-icon" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
  <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet">
  
  <link rel="stylesheet" href="/css/bootstrap.css" />
  <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/nivo-lightbox/nivo-lightbox.css" />
  <link rel="stylesheet" href="/css/nivo-lightbox/default.css" />
  <link rel="stylesheet" href="/static/css/main.1df8b020.css" />
  
  <script type="application/ld+json">__SCHEMA__</script>
</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4MLNGGV"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  
  <script defer src="/static/js/main.5a5464ba.js"></script>
  <script type="text/javascript" src="/js/jquery.1.11.1.js"></script>
  <script type="text/javascript" src="/js/bootstrap.js"></script>
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
