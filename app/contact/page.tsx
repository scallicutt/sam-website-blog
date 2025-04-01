import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/contact/hero.jpg"
          alt="Contact header showing communication icons"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <h1 className="absolute inset-0 flex items-center justify-center text-[#0A1931] text-7xl font-light tracking-widest">
          CONNECT WITH ME
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif mb-8">Let&apos;s Chat!</h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Hello! I&apos;m Samantha, a journalist and Master&apos;s degree
              student at the University of Arizona. I specialize in multimedia,
              investigative journalism and I am currently an intern for AZPM,
              Tucson&apos;s local NPR affiliate.
            </p>
            <p>
              In addition to my journalist work, I am also an actor. My
              background is in stage, but I am currently working to start
              exploring the world of film acting. To see more of my acting work,
              please see visit my acting page!
            </p>
            <p>
              If you&apos;re interested in collaborating, discussing potential
              projects, or just want to say hi, I&apos;d love to hear from you.
              Connecting with like-minded individuals and professionals is
              always exciting. Whether it&apos;s a journalistic inquiry, an
              acting project, or any creative endeavor, feel free to drop me an
              email. Let&apos;s explore how we can work together to create
              something amazing. Don&apos;t hesitate to reach out!
            </p>
          </div>
        </div>

        {/* Right column - Call to Action Buttons */}
        <div className="flex flex-col gap-8 justify-center">
          <Link
            href="mailto:email@example.com"
            className="bg-[#0A1931] text-white py-8 px-6 text-center hover:bg-[#0A1931]/90 transition-colors"
          >
            <div className="text-2xl font-light">Send me an email</div>
          </Link>
          <Link
            href="/assets/samantha-callicutt-resume.pdf"
            className="bg-[#0A1931] text-white py-8 px-6 text-center hover:bg-[#0A1931]/90 transition-colors"
          >
            <div className="text-2xl font-light">Download my résumé</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
