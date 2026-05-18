import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
import { QuoteSection } from './components/QuoteSection.jsx';
import { Products } from './components/Products.jsx';
import { Partners } from './components/Partners.jsx';
import { Footer } from './components/Footer.jsx';
import { CapabilitiesPage } from './pages/CapabilitiesPage.jsx';
import { ProductsPage } from './pages/ProductsPage.jsx';
import { heroSlides } from './data.js';

function getRoute() {
  return {
    hash: window.location.hash,
    pathname: window.location.pathname === '/index.html' ? '/' : window.location.pathname
  };
}

function HomePage({ activeSlide, setActiveSlide }) {
  return (
    <>
      <Hero activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <About />
      <Services />
      <QuoteSection />
      <Products />
      <Partners />
    </>
  );
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (route.hash) {
        const target = document.querySelector(route.hash);
        if (target) {
          target.scrollIntoView({ block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0 });
    });
  }, [route]);

  const handleNavigation = (event) => {
    const link = event.target.closest('a[href]');

    if (!link) return;

    const href = link.getAttribute('href');

    if (
      !href ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.target ||
      link.hasAttribute('download')
    ) {
      return;
    }

    const nextUrl = new URL(link.href, window.location.origin);

    if (nextUrl.origin !== window.location.origin) return;

    event.preventDefault();
    const nextRoute = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    window.history.pushState({}, '', nextRoute);
    setRoute(getRoute());
  };

  const normalizedPath = route.pathname.replace(/\/$/, '') || '/';
  const page =
    normalizedPath === '/capabilities' ? (
      <CapabilitiesPage />
    ) : normalizedPath === '/products' ? (
      <ProductsPage />
    ) : (
      <HomePage activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
    );

  return (
    <div onClick={handleNavigation}>
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
