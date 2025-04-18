import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-light tracking-widest">FOLLOW ME</h2>
          <div className="flex gap-4 lg:gap-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/samantha-callicutt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/scallicutt18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/samanthaacall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@samanthaacallicutt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Scallicutt. All Rights Reserved.
            <br />
            Website design and dev by S Callicutt
          </div>
        </div>
      </div>
    </footer>
  );
}
