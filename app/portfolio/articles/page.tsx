import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  url: string;
  description: string;
  publication: string;
  date: string;
  image: string;
  summary?: string;
}

export default function ArticlesPage() {
  const articles: Article[] = [
    {
      title:
        "As Immigration Enforcement Intensifies, Tucson Families Are Separated",
      url: "https://news.azpm.org/p/newsfeature/2025/4/3/224321-as-immigration-enforcement-intensifies-tucson-families-are-separated/",
      description:
        "When heavily armed agents stormed Mari's home and detained her husband — a longtime U.S. resident awaiting asylum under the Convention Against Torture — her family's life was thrown into chaos. Now, struggling with serious medical needs and the threat of losing their home, Mari shares the devastating impact of the raid.",
      publication: "AZPM News",
      date: "April 3, 2025",
      image: "/images/stories/ice.jpg",
      summary:
        "When heavily armed agents stormed Mari’s home and detained her husband — a longtime U.S. resident awaiting asylum under the Convention Against Torture — her family’s life was thrown into chaos. Now, struggling with serious medical needs and the threat of losing their home, Mari shares the devastating impact of the raid. This story reveals how one family's stability was shattered in an instant — and their fight to survive without the person they depend on most.",
    },
    {
      title: "Venezuelan Family in Tucson Faces ICE Inquiry",
      url: "https://www.azpm.org/p/headlines/2025/2/26/223846-venezuelan-family-in-tucson-faces-ice-inquiry/",
      description:
        "A Venezuelan family in South Tucson was unexpectedly visited by ICE agents investigating concerns of child trafficking and prostitution, despite the family asserting that their documentation was in order.",
      publication: "AZPM",
      date: "February 26, 2025",
      image: "/images/stories/yoleidy-and-her-son-hero.jpg",
      summary:
        "A Venezuelan family in South Tucson was unexpectedly visited by ICE agents investigating concerns of child trafficking and prostitution, despite the family asserting that their documentation was in order. The following day, when agents returned, the family had secured legal representation and attracted media attention, leading to a brief and restrained interaction outside their home, where the agents questioned the children from a distance. While no immediate action was taken, the family remains fearful and uncertain about their future, as they continue seeking asylum and ensuring compliance with immigration requirements.",
    },
    {
      title: "Arizona Propositions Explained",
      url: "https://news.azpm.org/p/azpmnews/2024/11/2/222441-arizona-propositions-explained/",
      description:
        "The article provides a detailed breakdown of the statewide propositions on Arizona's 2024 ballot, covering their potential impact, key arguments for and against each measure, and who is supporting or opposing them.",
      publication: "AZPM News",
      date: "November 2, 2024",
      image: "/images/stories/vote-here.jpg",
      summary:
        "The article provides a detailed breakdown of the statewide propositions on Arizona's 2024 ballot, covering their potential impact, key arguments for and against each measure, and who is supporting or opposing them. It also examines how these propositions could influence various issues such as taxation, education, and social policies within the state. The piece aims to inform voters about the implications of their choices to help them make educated decisions at the polls.",
    },
    {
      title:
        "Forced to Flee Civil War, This Syrian Mother Found a New Home in Tucson",
      url: "https://azluminaria.org/2024/04/01/forced-to-flee-civil-war-this-syrian-mother-found-a-new-home-in-tucson/",
      description:
        "In 2020, Dalal, a Syrian single mother of four, experienced life-changing luck during the COVID-19 pandemic. After fleeing domestic violence in Lebanon, her journey took her through Germany and Los Angeles before arriving in Tucson.",
      publication: "AZ Luminaria",
      date: "April 1, 2024",
      image: "/images/stories/refugees.jpg",
      summary:
        "In 2020, Dalal, a Syrian single mother of four, experienced life-changing luck during the COVID-19 pandemic. After fleeing domestic violence in Lebanon, her journey took her through Germany and Los Angeles before arriving in Tucson, aided by the UN and later by a kind stranger on a flight who connected her to the local Syrian community. This newfound support system became a vital source of stability and hope in her new life.",
    },
    {
      title: "Andrés Cano Appointed to Board of Supervisors",
      url: "https://www.tucsonspotlight.org/andres-cano-appointed-supervisors/",
      description:
        "Former state lawmaker Andrés Cano was unanimously appointed to the Pima County Board of Supervisors on Tuesday to fill the District 5 seat vacated by Adelita Grijalva.",
      publication: "Tucson Spotlight",
      date: "April 15, 2025",
      image: "/images/stories/andres-cano.jpg",
      summary:
        "Former state lawmaker Andrés Cano was unanimously appointed to the Pima County Board of Supervisors on Tuesday to fill the District 5 seat vacated by Adelita Grijalva.",
    },
    {
      title: "Nogales International Film Festival to Transform Border Wall",
      url: "https://www.tucsonspotlight.org/nogales-international-film-festival/",
      description:
        "The Nogales International Film Festival, running from April 30 to May 2, will transform the U.S.-Mexico border wall into a movie screen, offering a unique binational cinematic experience.",
      publication: "Tucson Spotlight",
      date: "April 1, 2025",
      image: "/images/stories/nogales-film-festival.jpg",
      summary:
        "The Nogales International Film Festival, running from April 30 to May 2, will transform the U.S.-Mexico border wall into a movie screen, offering a unique binational cinematic experience with screenings, tributes, and special appearances.",
    },
    {
      title: "Philabaum Glass Studio Closing After 40 Years",
      url: "https://www.tucsonspotlight.org/philabaum-glass-studio-closing/",
      description:
        "Philabaum Glass Studio, a cornerstone of Tucson's art scene for over 40 years, is closing its doors, marking the end of an era while its legacy lives on through its artists and gallery.",
      publication: "Tucson Spotlight",
      date: "March 14, 2025",
      image: "/images/stories/philabaum-glass-studio.jpg",
      summary:
        "Philabaum Glass Studio, a cornerstone of Tucson’s art scene for over 40 years, is closing its doors, marking the end of an era while its legacy lives on through its artists and gallery.",
    },
    {
      title: "Volunteers Power Tucson Festival of Books",
      url: "https://www.tucsonspotlight.org/volunteers-power-tucson-festival-of-books/",
      description:
        "Thousands of volunteers power the Tucson Festival of Books, dedicating thousands of hours to keep the event running smoothly.",
      publication: "Tucson Spotlight",
      date: "March 12, 2025",
      image: "/images/stories/volunteers-power-tucson-festival-of-books.jpg",
      summary:
        "Thousands of volunteers power the Tucson Festival of Books, dedicating thousands of hours to keep the event running smoothly.",
    },
    {
      title: "Supervisors Reject Controversial Cell Tower Proposal",
      url: "https://www.tucsonspotlight.org/supervisors-reject-cell-tower/",
      description:
        "Pima County supervisors voted 4-1 to reject a proposed 100-foot cell tower after strong community opposition over its impact on the scenic landscape.",
      publication: "Tucson Spotlight",
      date: "February 12, 2025",
      image: "/images/stories/supervisors-reject-cell-tower.jpg",
      summary:
        "Pima County supervisors voted 4-1 to reject a proposed 100-foot cell tower after strong community opposition over its impact on the scenic landscape.",
    },
    {
      title: "Hundreds March Against 'Billionaire Agenda' in Tucson",
      url: "https://www.tucsonspotlight.org/march-against-billionaire-agenda",
      description:
        "Hundreds of protesters in Tucson marched Monday President Trump's second-term agenda, uniting activist groups to advocate for immigrant rights, social justice, and grassroots resistance.",
      publication: "Tucson Spotlight",
      date: "January 22, 2025",
      image: "/images/stories/hundreds-march-against-billionaire-agenda.jpg",
      summary:
        "Hundreds of protesters in Tucson marched Monday President Trump’s second-term agenda, uniting activist groups to advocate for immigrant rights, social justice, and grassroots resistance.",
    },
    {
      title: "Urban Agriculture Growing in Arizona",
      url: "https://www.tucsonspotlight.org/la-agricultura-urbana/",
      description:
        "Urban agriculture in Arizona is growing, promoting sustainability and community pride while expanding access to local produce. Farmers markets highlight this shift.",
      publication: "Tucson Spotlight",
      date: "November 15, 2024",
      image: "/images/stories/urban-agriculture-growing-in-arizona.jpg",
      summary:
        "Urban agriculture in Arizona is growing, promoting sustainability and community pride while expanding access to local produce. Farmers markets, like those in Pima County, highlight this shift, with vendors like Elizabeth Robb emphasizing community connection.",
    },
    {
      title: "JD Vance Draws Supporters at Pima County Rally",
      url: "https://www.tucsonspotlight.org/jd-vance-talks-border/",
      description:
        "JD Vance drew 300 supporters to the Pima County Fairgrounds, where fans showed enthusiasm for his candidacy and his alignment with Trump's policies.",
      publication: "Tucson Spotlight",
      date: "October 23, 2024",
      image:
        "/images/stories/jd-vance-draws-supporters-at-pima-county-rally.jpg",
      summary:
        "JD Vance drew 300 supporters to the Pima County Fairgrounds, where fans showed enthusiasm for his candidacy and his alignment with Trump’s policies. Former Democrat Mary Carlson and others praised Vance’s stance on the border and his outsider status. U.S. House Majority Leader Steve Scalise energized the crowd, highlighting Vance’s and Trump’s focus on the Second Amendment and border security.",
    },
    {
      title: "COVID-19 Cases Rise as Schools Reopen",
      url: "https://tucsonagenda.substack.com/p/the-daily-agenda-despite-summer-spike",
      description:
        "COVID-19 cases are rising in Pima County as schools reopen, though rates remain below the three-year average. With low booster uptake, officials urge updated vaccines.",
      publication: "Tucson Agenda",
      date: "August 6, 2024",
      image: "/images/stories/covid-19-cases-rise-as-schools-reopen.jpg",
      summary:
        "COVID-19 cases are rising in Pima County as schools reopen, though rates remain below the three-year average. With low booster uptake, officials urge updated vaccines, especially for vulnerable groups, and are working with schools to improve ventilation and promote annual flu and COVID shots.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/sam-camera-shooting-4.jpg"
          alt="Articles header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          ARTICLES
        </h1>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              target="_blank"
              className="group"
            >
              <article className="flex flex-col">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-blue-900 font-obviously-light mb-2 text-center">
                  {article.date}
                </div>

                <h2 className="text-3xl font-fino-sans leading-tight group-hover:text-blue-800 transition-colors text-center">
                  {article.title}
                </h2>
                <p className="text-gray-600 py-4">{article.summary}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
