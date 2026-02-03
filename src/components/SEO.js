// components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  const siteTitle = "Danil Scenic Tours";
  const defaultDescription = "Premier safari tour operator in Kenya offering wildlife adventures, cultural tours, and nature experiences.";
  const siteUrl = "https://www.danilscenictours.co.ke";
  
  const seo = {
    title: title ? `${title} | ${siteTitle}` : `${siteTitle} | Premier Safari Tours & Wildlife Adventures in Kenya`,
    description: description || defaultDescription,
    image: image || `${siteUrl}/og-image.jpg`,
    url: url || siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      <link rel="canonical" href={seo.url} />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;