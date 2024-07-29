import React from 'react'
import Head from 'next/head'
import Script from 'next/script';
import GoogleTranslate from '../../components/GoogleTranslate';
import SocialSharing from '../../components/SocialSharing';


const Tearms = () => {

  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px',
  };

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const listItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  };

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://justwatchfree.vercel.app/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://justwatchfree.vercel.app/author/ytmag/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://justwatchfree.vercel.app/#organization',
        name: 'Just Watch Free™ - Explore. Discover. Online.',
        url: 'https://justwatchfree.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://justwatchfree.vercel.app/#website',
        url: 'https://justwatchfree.vercel.app',
        name: 'Just Watch Free™ - Explore. Discover. Online.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://justwatchfree.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://justwatchfree.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://justwatchfree.vercel.app/#webpage',
        url: 'https://justwatchfree.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://justwatchfree.vercel.app/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://justwatchfree.vercel.app/author/ytmag/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://justwatchfree.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://justwatchfree.vercel.app/',
            url: 'https://justwatchfree.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://justwatchfree.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://justwatchfree.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://justwatchfree.vercel.app/#organization',
              name: 'Just Watch Free™ - Explore. Discover. Online.',
              url: 'https://justwatchfree.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://justwatchfree.vercel.app/',
            url: 'https://justwatchfree.vercel.app/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://justwatchfree.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://justwatchfree.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://justwatchfree.vercel.app/#organization',
              name: 'Just Watch Free™ - Explore. Discover. Online.',
              url: 'https://justwatchfree.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://justwatchfree.vercel.app/',
            url: 'https://justwatchfree.vercel.app/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://justwatchfree.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://justwatchfree.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://justwatchfree.vercel.app/#organization',
              name: 'Just Watch Free™ - Explore. Discover. Online.',
              url: 'https://justwatchfree.vercel.app'
            }
          }
        ]
      }
    ]
  })

 

  return (
    <div>
        <Head>
        <title>Just Watch Free™ | Terms of Use</title>
        <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://justwatchfree.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
          content='justwatch, just watch, justwatch.com, justwatch.tv, watch free movies, watch movies free online, free download movies, watch free full movies, watch free hd movies, free movies, watch movies free'
          />
         
          <link rel='canonical' href='https://justwatchfree.vercel.app/intro/tearms' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Just Watch Free™ '
          />
          <meta
            property='og:description'
            content='Just Watch Free™ - Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
          />
          <meta property='og:url' content='https://justwatchfree.vercel.app/intro/tearms/' />
          <meta
            property='og:site_name'
            content='Just Watch Free™ '
          />
          <meta
            property='og:image'
            content='https://justwatchfree.vercel.app/og_image.webp'
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='Just Watch Free™ '
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
             <meta
          property='description'
          content='Just Watch Free™ - Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://justwatchfree.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content='4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0'
          />
          <meta
            name='facebook-domain-verification'
            content='zifsy861dlzorbop8eww76tsqlf7t4'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dm0zffs8dj8pcb3gd'
          />
          
         
          <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BBQBh9BNi-dtzrb7ayxfk3Kuh11sEA0hiPlNpdyHX0pueAdWd4lxPInWWXC3bcc5EsZTx8jDnZeDiJCRKkA91Lo' });
          `
          }}
        />
         
        </Head>
        <GoogleTranslate />
 <SocialSharing />
      {/* <Script src='../../propler/ads.js' defer /> */}
      {/* <Script src='../../propler/ads2.js' defer /> */}
         <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
<div style={containerStyle}>

<section style={sectionStyle}>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto', marginBottom: '12px', width: '100%', padding: '0 12px' }}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
    
      <h2 style={headingStyle}>1. Changes</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We may occasionally change these Terms, so we encourage you to review the Terms periodically. If you continue to use the Services after we change the Terms, you accept all changes.
      </p>
      </ul>
      <h2 style={headingStyle}>2. Registration and Access Controls</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      You are responsible for maintaining the confidentiality of your login names and passwords and you accept responsibility for all activities, charges, and damages that occur under your account. If you have reason to believe that someone is using your account without your permission, you should contact us immediately. We will not be responsible for any loss or damage resulting from your failure to notify us of unauthorized use.
      </p>
      </ul>
      <h2 style={headingStyle}>3. Third - party ads</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We use third-party advertising companies to serve ads when you visit our Website. These companies may use information (not including your name, address email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.
      </p>
      </ul>
      <h2 style={headingStyle}>Contact for Advertisement</h2>
    

      {/* Add more sections with similar structure */}

      <p style={{ color: '#666' }}>
      Please review these terms and conditions carefully before using our website. If you have any questions or concerns, please contact us at <a style={linkStyle} href="mailto:ytmagpublisher@outlook.com">ytmagpublisher@outlook.com</a>.
      </p>
    </div>
  </div>
</section>


      </div>
    </div>
  )
}

export default Tearms