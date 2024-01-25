import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-bold text-xl mb-2">About Me</h2>
            <p>
              Pursuing a Master's in Journalism, I blend web design with
              storytelling, focusing on unveiling hidden narratives and making
              an impact.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Contact</h2>
            <ul>
              <li>Email: scallicutt18@gmail.com</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Scallicutt. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
