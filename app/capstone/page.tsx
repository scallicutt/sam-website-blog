import Image from "next/image";
import Link from "next/link";

export default function CapstonePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Navy Background */}
      <div className="bg-[#0A1931] py-16">
        <h1 className="text-white text-7xl font-fino-sans text-center tracking-widest">
          CAPSTONE
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-16 lg:gap-64 text-3xl">
          <Link
            href="/capstone/document"
            className="font-fino-sans hover:underline underline-offset-4"
          >
            Document
          </Link>
          <Link
            href="/capstone/gallery"
            className="font-fino-sans hover:underline underline-offset-4"
          >
            Gallery
          </Link>
          <Link
            href="/capstone/text"
            className="font-fino-sans hover:underline underline-offset-4"
          >
            Text
          </Link>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/images/sam/PANA3168-2.jpg"
          alt="Capstone project filming"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-fino-sans text-center mb-8">Title</h2>
        <p className="max-w-3xl mx-auto text-center font-obviously-light text-lg">
          Ped molor aspitassita sapicipsum cus sum qui neseniet quo ommodit
          endit, int qui omnihic iment, ut earchitassum conet dolupit et pe
          cumquam quat est fugitempor ad millaut fatis autatqu ossedis dolutam
          et que simaximil dolore.
        </p>
      </div>

      {/* Footer */}
      <div className="bg-[#0A1931] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <h3 className="font-fino-sans text-2xl">FOLLOW ME</h3>
              <div className="flex gap-4">
                <Link href="https://linkedin.com" target="_blank">
                  <Image
                    src="/assets/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Image
                    src="/assets/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Image
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Image
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://youtube.com" target="_blank">
                  <Image
                    src="/assets/youtube.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-sm font-obviously-light">
              <p>© 2025 SCallicutt. All Rights Reserved</p>
              <p>Website design and dev by S. Callicutt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
