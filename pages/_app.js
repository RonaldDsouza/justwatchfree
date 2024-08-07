import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from '../components/PageTransition';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Script from 'next/script';
import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    const setupWebpushr = () => {
      if (typeof window.webpushr !== 'undefined') {
        window.webpushr('setup', {
          key: 'BDeLBmbVL39XWa_fEU4TTZ5OFjYr0zLf_PZN6CLLEtCdxOsDYdH6TIWC1ltmT8A4QdXsd8zVbN3izqMFubKPW_k',
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.webpushr.com/app.min.js';
    script.async = true;
    script.onload = setupWebpushr;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='center'>
    
      <GoogleAnalytics measurementId='G-JMSKR580QF' />
      <Script async data-id="101459579" src="//static.getclicky.com/js"></Script>
      

      <PageTransition>
   
        <Hamburger />
        <Component {...pageProps} />
        <Footer />
      </PageTransition>
    </div>
  );
}

export default Application;
