import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 left-0 w-full bg-dark text-light p-4 sm:p-6 md:p-8 lg:p-10 text-center">
      <aside>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Copyright © {new Date().getFullYear()} - Powered by ExchangeRate-API | Built by Hiriya Dejene
        </p>
      </aside>
    </footer>
  );
}

export default Footer;