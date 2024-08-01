import fs from 'fs';
import path from 'path';
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/latest.json'
import sportsData from '../../public/sports.json'
import GoogleTranslate from '../../components/GoogleTranslate'
import Pagination from '../../components/Pagination'
import SocialSharing from '../../components/SocialSharing'
import Head from 'next/head'
import Script from 'next/script'


const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Just Watch Free™ - Explore. Discover. Online.',
    url: 'https://justwatchfree.vercel.app/',
    image: ['https://justwatchfree.vercel.app/favicon.ico'],
    logo: {
      '@type': 'ImageObject',
      url: 'https://justwatchfree.vercel.app/logo.png',
      width: 280,
      height: 80
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://justwatchfree.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://justwatchfree.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://justwatchfree.vercel.app/sports/',
  headline: 'Watch Online sports | Just Watch Free™',
  url: 'https://justwatchfree.vercel.app/sports/',
  description:
    'Just Watch Free™ - Explore. Discover. Online. Stream online HD sports with Google Translate for access in any language, worldwide.',
  image: 'https://justwatchfree.vercel.app/og_image.jpg',
  author: {
    '@type': 'Person',
    name: 'DrTrailer',
    url: 'https://gravatar.com/drtrailer2022'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Just Watch Free™ - Explore. Discover. Online.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://justwatchfree.vercel.app/og_image.jpg'
    }
  },
  datePublished: '2024-06-02',
  dateModified: '2024-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://justwatchfree.vercel.app/sports/'
  },
  additionalProperty: {
    '@type': 'PropertyValue',
    name: 'Action Platform',
    value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
  }
})

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Just Watch Free™ - Explore. Discover. Online.',
      item: 'https://justwatchfree.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'sports',
      item: 'https://justwatchfree.vercel.app/sports/'
    }
  ]
})

// Utility function to get random items
const getRandomItems = (data, count) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const SportsSchedule = ({ schedule }) => {
    // Get the date key (assuming there's only one top-level key in your JSON)
    const dateKey = Object.keys(schedule)[0];
    const scheduleData = schedule[dateKey];
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = // Assume there are 3 pages
    useEffect(() => {
      // Logic to fetch browsers for the current page
    }, [currentPage])

  const [latest, setLatest] = useState([])

  const fetchData = async () => {
    try {
      const [latestRes] = await Promise.all([
        fetch('https://justwatchfree.vercel.app/latest.json')
      ])

      const [latestData] = await Promise.all([latestRes.json()])

      setLatest(getRandomItems(latestData, 3))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 10000) // 30000 seconds interval , 10000

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <Head>
        <title> Watch Online Live Sports | JWF™</title>
        <link rel='canonical' href='https://justwatchfree.vercel.app/sports/' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Watch Online sports | JWF™' />
        <meta
          property='og:description'
          content='Just Watch Free™ - Explore. Discover. Online. Stream online HD sports with Google Translate for access in any language, worldwide.'
        />

        <meta property='og:url' content='https://justwatchfree.vercel.app/sports' />

        <meta property='og:site_name' content='Just Watch Free' />
        {/* <meta property='og:type' content='article' /> */}
        <meta
          property=' og:image:alt'
          content='https://justwatchfree.vercel.app/og_image.jpg'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='sports' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
       <meta name="keywords" content="livetv, freetvchannels, onlinetv, tvchannelsfree, watchtvlive"/>
        <meta
          property='og:image'
          content='https://justwatchfree.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        {/* <script src='https://www.youtube.com/iframe_api' /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
         <script
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr |function () { (w.webpushr.q = w.webpushr.q |[]).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BDeLBmbVL39XWa_fEU4TTZ5OFjYr0zLf_PZN6CLLEtCdxOsDYdH6TIWC1ltmT8A4QdXsd8zVbN3izqMFubKPW_k' });
          `
            }}
          />
      </Head>
    
      <GoogleTranslate />
      <SocialSharing />
      {/* <Script src='../../propler/ads.js' defer /> */}
      {/* <Script src='../propler/ads2.js' defer /> */}
      <h1
        className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Just Watch Free Live Sports Section.
      </h1>

      <div
            className='shadow-lg flex items-center justify-center'
            role='navigation'
          >
            <ul
              id='menu-header-menu'
              className='menu flex flex-wrap justify-center'
            >
              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-35' className='menu-home active'>
                  <a
                    href='/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Home<span className='p'></span>
                  </a>
                </li>
              </button>

              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-284913' className='menu-softwarecategories'>
                  <a href='../trailers/'>
                    <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                      Trailers<span className='p'></span>
                    </h3>
                  </a>
                </li>
              </button>
              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-11610' className='menu-graphicdesign'>
                  <a
                    href='../movies/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Movies<span className='p'></span>
                  </a>
                </li>
              </button>
              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-84' className='menu-antivirus'>
                  <a
                    href='../tvshow/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Tv Show<span className='p'></span>
                  </a>
                </li>
              </button>
              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-84' className='menu-antivirus'>
                  <a
                    href='../sports/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Live Sports<span className='p'></span>
                  </a>
                </li>
              </button>
             <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-84' className='menu-antivirus'>
                  <a
                    href='../adult/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Adult<span className='p'></span>
                  </a>
                </li>
              </button>
             
              <button className='border border-black p-2 m-1 hover:bg-orange-100'>
                <li id='menu-item-194' className='menu-tutorials'>
                  <a
                    href='../latest/'
                    className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                  >
                    Latest News<span className='p'></span>
                  </a>
                </li>
              </button>
            </ul>
          </div>
          <a
            href='https://t.me/watchmovietvshow/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl mt-2 flex items-center justify-center'
            style={{ marginTop: '25px' }}
          >
            <span className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
              For Request or Demand Movies Join Telegram
              <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
            </span>
          </a>
        {/* </div> */}
      <div className='container'>
      <div className='flex-container'>
        <div className='main-content'>
          <div className='card-container'>
            <h1 className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>{dateKey}</h1>
            {Object.entries(scheduleData).map(([category, events], index) => (
              <div key={index}>
                <h2 className='px-0 bg-gradient-to-r from-gray-500 to-gray-500 bg-clip-text text-transparent text-4xl hover:text-blue-800 font-bold mt-2 '>{category}</h2>
                {events.map((event, idx) => (
                  <div key={idx} className='event-card p-4 border-b border-gray-300'>
                    <p className='event-time text-gray-600 font-semibold'>  GMT Time:{event.time}</p>
                    <p className='event-title font-semibold'>{event.event}</p>
                    {event.channels.map((channel, channelIdx) => (
                      <p key={channelIdx} className='channel-info font-semibold'>
                        Channel: <a href={`sports/channel/${channel.channel_id}`} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{channel.channel_name}</a> (ID: {channel.channel_id})
                      </p>
                    //   <p key={channelIdx} className='channel-info'>
                    //   Channel: <a href={`sports/channel/${channel.channel_id}`} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{channel.channel_name}</a> (ID: {channel.channel_id})
                    // </p>
                    ))}
                    <button className='bg-blue-500 text-white py-1 px-4 rounded mt-2'>
                      
                      View Event
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        </div>

        
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'sports-schedule.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const schedule = JSON.parse(jsonData);

  return {
    props: {
      schedule,
    },
  };
}

export default SportsSchedule;

