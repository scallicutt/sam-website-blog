import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-bold text-xl mb-2">Elevator Pitch</h2>
            <p>
              Investigative, multimedia journalist and UofA Journalism grad
              student. I tell stories using the power of technology to unveil
              hidden narratives and give voice to the human experience.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Contact</h2>
            <ul>
              <Link href={"mailto:scallicutt18@gmail.com"}>
                scallicutt18@gmail.com
              </Link>
            </ul>
          </div>
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
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Scallicutt. All Rights Reserved.
          <br />
          Website design and dev by S. Callicutt
        </div>
      </div>
    </footer>
  );
}
