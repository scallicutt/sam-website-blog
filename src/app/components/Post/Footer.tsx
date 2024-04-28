import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8b6f7c] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div>
            <h2 className="font-bold text-xl mb-2">Follow Me</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/samantha.a.callicutt"
                className="fab fa-facebook-f hover:text-gray-400"
                target="_blank"
              ></Link>
              <Link
                href="https://x.com/scallicutt18?s=21"
                className="fab fa-twitter hover:text-gray-400"
                target="_blank"
              ></Link>
              <Link
                href="https://www.instagram.com/samanthaacall"
                className="fab fa-instagram hover:text-gray-400"
                target="_blank"
              ></Link>
              <Link
                href="https://www.linkedin.com/in/samantha-callicutt/"
                className="fab fa-linkedin-in hover:text-gray-400"
                target="_blank"
              ></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white pt-4">
          &copy; {new Date().getFullYear()} Scallicutt. All Rights Reserved.
          <br />
          Website design and dev by S. Callicutt
        </div>
      </div>
    </footer>
  );
}
