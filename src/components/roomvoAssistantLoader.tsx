'use client';

import { useEffect } from 'react';

export default function DelayedRoomvoScriptLoader() {
  // loading the roomvo script after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://www.roomvo.com/static/scripts/b2b/common/assistant.js';
      script.defer = true;
      script.setAttribute('data-locale', 'nl-nl');
      script.setAttribute('data-position', 'middle-right');
      script.id = 'roomvoAssistant';
      script.type = 'text/javascript';
      document.body.appendChild(script);
      // removing unnecessary ui from the loader
      const elementToHide = document.querySelector('.css-1s8e9du') as HTMLElement;
      if (elementToHide) elementToHide.style.display = 'none';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
