import Image from "next/image";
import Link from "next/link";

interface Article {
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    date: "Feb 26, 2025",
    title: "Venezuelan family in Tucson faces ICE inquiry",
    description:
      "A Venezuelan family in South Tucson was unexpectedly visited by ICE agents investigating concerns of child trafficking and prostitution, despite the family asserting that their...",
    image: "/portfolio/venezuelan-family.jpg",
    link: "/portfolio/venezuelan-family",
  },
  {
    date: "Nov 2, 2024",
    title: "Arizona propositions explained",
    description:
      "The article provides a detailed breakdown of the statewide propositions on Arizona's 2024 ballot, covering their potential impact, key arguments for and against each measure, and who is...",
    image: "/portfolio/vote-here.jpg",
    link: "/portfolio/arizona-propositions",
  },
  {
    date: "Apr 1, 2024",
    title: "This Syrian mother found a new home in Tucson",
    description:
      "In 2020, Dalal, a Syrian single mother of four, experienced life-changing luck during the COVID-19 pandemic. After fleeing domestic violence in Lebanon, her journey took her...",
    image: "/portfolio/syrian-mother.jpg",
    link: "/portfolio/syrian-mother",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/portfolio/hero.jpg"
          alt="Portfolio header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-light tracking-widest">
          PORTFOLIO
        </h1>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col">
              <Link href={article.link} className="group">
                <div className="relative h-64 mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-500 mb-2">{article.date}</div>
                <h2 className="text-2xl font-serif mb-3 group-hover:underline">
                  {article.title}
                </h2>
                <p className="text-gray-700 line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-4 text-gray-500 group-hover:underline">
                  View Article
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
