import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If no hash is present or if the hash is just '#top', scroll to the top
    if (!hash || hash === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If a specific hash is present, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]); // Re-run when the path or hash changes
}