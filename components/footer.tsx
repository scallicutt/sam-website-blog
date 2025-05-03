import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <h2 className="text-2xl md:text-4xl font-light tracking-widest text-center md:text-left">
            FOLLOW ME
          </h2>
          <div className="flex gap-6 md:gap-8 text-2xl md:text-3xl">
            <a
              href="https://www.linkedin.com/in/samantha-callicutt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/scallicutt18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/samanthaacall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@samanthaacallicutt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
            © 2025 Scallicutt. All Rights Reserved.
            <br />
            Website design and dev by S Callicutt
          </div>
        </div>
      </div>
    </footer>
  );
}
