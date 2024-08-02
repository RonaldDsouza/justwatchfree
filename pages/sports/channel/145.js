import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import GoogleTranslate from '../../../components/GoogleTranslate'
import SocialSharing from '../../../components/SocialSharing'
import Pagination from '../../../components/Pagination'
import { FaTelegram } from 'react-icons/fa'
import styles from '/styles/video-player.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { Image } from 'cloudinary-react'

const Ch01 = ({ sports }) => {
  const router = useRouter()
  const { id } = router.query
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 0 // Assume there are 3 pages

  return (
    <div>
      <Head>
        <title>Watch Channel 145 | JWF™</title>
        <meta name='robots' content='index, follow' />
        <meta name='revisit-after' content='1 days' />
        <meta
          name='description'
          content='Just Watch Free™ - Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
        <meta
          http-equiv='Permissions-Policy'
          content='encrypted-media=(self)'
        />
        <meta http-equiv='Permissions-Policy' content='accelerometer=(self)' />
        <meta
          http-equiv='Permissions-Policy'
          content='device-orientation=(self); device-motion=(self)'
        />

        <meta
          name='robots'
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='keywords'
          content='livetv, freetvchannels, onlinetv, tvchannelsfree, watchtvlive'
        />
        <meta property='og:locale' content='en_US' />
        <meta
          property='og:site_name'
          content='Just Watch Free™ | Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image:height' content='1280' />
        <meta property='og:image:width' content='720' />
        <meta
          property='og:title'
          content='Just Watch Free™ | Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
        <meta
          property='og:description'
          content='Just Watch Free™ - Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta
          property='og:image'
          content='https://justwatchfree.vercel.app/og_image.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Just Watch Free™' />
        <meta
          name='twitter:description'
          content='Just Watch Free™ - Explore. Discover. Online. Stream online HD movies with Google Translate for access in any language, worldwide.'
        />
        <meta
          name='twitter:image'
          content='https://justwatchfree.vercel.app/og_image.jpg'
        />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
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
      {/* <Script src='../../propler/ads2.js' defer /> */}
      <div
        className={`w-full`}
        style={{
          //  display: 'flex',
          //  flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          //  padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
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
          href='https://t.me/watchmoviemovies/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl mt-2 flex items-center justify-center'
          style={{ marginTop: '25px', marginBottom: '25px' }}
        >
          <span className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
            For Request or Demand Movies Join Telegram
            <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
          </span>
        </a>
        {/* <div className='bg-gray-600 shadow'> */}
        <h1 className='py-5 font-bold leading-none tracking-tight text-green-500 text-center text-3xl dark:text-white'>
          Watch Live Stream Channel 145
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '15px'
          }}
        >
          <iframe
            src='https://free.timeanddate.com/clock/i9hhw5re/fs26/tcd3d3d3/pcd3d3d3/ftb/pd2/tt0/tw1/tm1'
            frameborder='0'
            width='442'
            height='33'
            className='items-center justify-center'
            style={{
              fontWeight: 'bold'
            }}
          ></iframe> 
        </div>
        <div className='flex flex-col text-blue-600 text-center items-center justify-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            route='sports'
            style={{
              marginTop: '50px',
              marginBottom: '50px',
              borderRadius: '50px',
              boxShadow: '0 0 10px 0 #fff',
              filter:
                'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
            }}
          />
          <div
            className={styles['iframe-container']}
            style={{
              marginTop: '50px'
            }}
          >
            <iframe
              className='video responsive rounded-3xl mr-8 flex border-1 border-blue-600 bg-gray-600 p-2 webkitallowFullScreen mozallowFullScreen allowFullScreen'
              marginHeight='0'
              marginWidth='0'
              src='https://dlhd.sx/embed/stream-145.php'
              name='iframe_a'
              scrolling='no'
              allowFullScreen
              width='100%'
              height='100%'
              frameBorder='0'
            ></iframe>
            {/* <iframe class="video responsive" marginheight="0" marginwidth="0" src="https://dlhd.sx/embed/stream-1.php" name="iframe_a" scrolling="no" allowfullscreen="yes" width="100%" height="100%" frameborder="0">Your Browser Do not Support Iframe</iframe>     https://daddylivehd.sx/embed/stream-1.php                               */}
          </div>
          <h3 className='mb-9 text-bg text-black-500 text-red-600 text-center xl:px-4 font-bold'>
            *Note: In the Player Setting Pls Select to{' '}
            <a className='mb-9 text-xl text-black-500 text-blue-600 text-center xl:px-4 font-bold'>
              {' '}
              UNMUTE PLAYER{' '}
            </a>{' '}
            it Takes time to Unmute.
          </h3>
          <div style={{ textAlign: 'center', color: 'red' }}>
            <p className='text-bg font-semibold'>
              It looks like this content is restricted in your region. You may
              need to use a VPN to access it.
            </p>
            <p className='text-bg font-semibold'>
              <a href='https://example.com/vpn' style={{ color: '#1e90ff' }}>
                Click here to learn more about VPNs
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://justwatchfree.vercel.app/sports.json')
  const data = await res.json()
  const selectedSports = data.find(sports => sports.id === 'INDEX145')
  return {
    props: {
      sports: selectedSports
    }
  }
}

export default Ch01
