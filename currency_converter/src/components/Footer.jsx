
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter,FaWhatsapp } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="footer bottom-0 left-0 w-full bg-dark text-light p-4 sm:p-6 md:p-8 lg:p-10 text-center font-sans">
      <h5>Contact me </h5>
      <div className="flex justify-center items-center h-16 w-16 rounded-full gap-4 mx-auto">
      <a href="https://wa.me/+251961643564" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-blue-600 text-2xl hover:text-blue-800" />
      </a>
      <a href="https://x.com/HiriyaGirma" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
      </a>
      <a href="https://t.me/hiriyamarta" target="_blank" rel="noopener noreferrer">
        <LiaTelegram className="text-pink-500 text-2xl hover:text-pink-700" />
      </a>
    </div>
      <aside>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Copyright © {new Date().getFullYear()} - Powered by ExchangeRate-API | Built by Hiriya Dejene
        </p>
      </aside>
    </footer>
  );
}

export default Footer;