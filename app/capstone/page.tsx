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
            href="/capstone/documentary"
            className="font-fino-sans hover:underline underline-offset-4"
          >
            Documentary
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
    </div>
  );
}
