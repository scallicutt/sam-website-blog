"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Section = "documentary" | "gallery" | "text";
type GalleryCategory = "trucks" | "ontheroad" | "HDS" | "editing" | "bloopers";

export default function CapstonePage() {
  const [activeSection, setActiveSection] = useState<Section>("documentary");
  const [activeGalleryCategory, setActiveGalleryCategory] =
    useState<GalleryCategory>("trucks");

  const galleryImages = {
    trucks: Array.from(
      { length: 15 },
      (_, i) =>
        `/images/capstone/trucks/trucks_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    ontheroad: Array.from(
      { length: 18 },
      (_, i) =>
        `/images/capstone/ontheroad/ontheroad_${String(i + 1).padStart(
          4,
          "0"
        )}.jpg`
    ),
    HDS: Array.from(
      { length: 54 },
      (_, i) => `/images/capstone/hds/hds_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    editing: Array.from(
      { length: 45 },
      (_, i) =>
        `/images/capstone/editing/editing_${String(i + 1).padStart(4, "0")}.jpg`
    ),
    bloopers: Array.from(
      { length: 3 },
      (_, i) =>
        `/images/capstone/bloopers/bloopers_${String(i + 1).padStart(
          4,
          "0"
        )}.jpg`
    ),
  };

  // Gallery pagination state
  const imagesPerPage = 9;
  const [galleryPage, setGalleryPage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const currentCategoryImages = galleryImages[activeGalleryCategory];
  const totalPages = Math.ceil(currentCategoryImages.length / imagesPerPage);
  const startIdx = galleryPage * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = currentCategoryImages.slice(startIdx, endIdx);

  const handlePrevPage = () =>
    setGalleryPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const handleNextPage = () =>
    setGalleryPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  // Reset gallery page when changing categories
  useEffect(() => {
    setGalleryPage(0);
    setSelectedImageIndex(null);
  }, [activeGalleryCategory]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((idx) =>
          idx !== null
            ? (idx - 1 + currentCategoryImages.length) %
            currentCategoryImages.length
            : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((idx) =>
          idx !== null ? (idx + 1) % currentCategoryImages.length : null
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, currentCategoryImages.length]);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/images/sam/banner-capstone.jpg"
          alt="Capstone header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-fino-sans tracking-widest">
          CAPSTONE
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-16 text-xl">
          <button
            onClick={() => setActiveSection("documentary")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "documentary"
              ? "text-[#0A1931] underline underline-offset-4"
              : "text-gray-500 hover:text-[#0A1931]"
              }`}
          >
            Documentary
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "gallery"
              ? "text-[#0A1931] underline underline-offset-4"
              : "text-gray-500 hover:text-[#0A1931]"
              }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveSection("text")}
            className={`font-fino-sans transition-all duration-300 cursor-pointer ${activeSection === "text"
              ? "text-[#0A1931] underline underline-offset-4"
              : "text-gray-500 hover:text-[#0A1931]"
              }`}
          >
            Text
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        {/* Documentary Section */}
        <div
          className={`transform transition-all duration-500 ${activeSection === "documentary"
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible hidden"
            }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7t5k8ZiI3Qg?si=chfHP1ZquwVkeiTB"
                title="Drive Like A Girl Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className={`transform transition-all duration-500 ${activeSection === "gallery"
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible hidden"
            }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Gallery Category Navigation */}
            <div className="flex justify-center gap-8 mb-8">
              {Object.keys(galleryImages).map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveGalleryCategory(category as GalleryCategory)
                  }
                  className={`font-fino-sans transition-all duration-300 cursor-pointer capitalize ${activeGalleryCategory === category
                    ? "text-[#0A1931] underline underline-offset-4"
                    : "text-gray-500 hover:text-[#0A1931]"
                    }`}
                >
                  {category === "ontheroad" ? "On The Road" : category}
                </button>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-20 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              onClick={handlePrevPage}
              aria-label="Previous"
              style={{ display: totalPages > 1 ? "block" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-20 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              onClick={handleNextPage}
              aria-label="Next"
              style={{ display: totalPages > 1 ? "block" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="grid grid-cols-3 gap-4">
              {currentImages.map((image, idx) => (
                <div
                  key={startIdx + idx}
                  className="aspect-square w-full h-auto relative cursor-pointer group"
                  onClick={() => setSelectedImageIndex(startIdx + idx)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedImageIndex(startIdx + idx)
                  }
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${startIdx + idx + 1}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Modal Dialog */}
          {selectedImageIndex !== null && (
            <dialog
              className="fixed inset-0 w-full h-full bg-black/90 z-50 flex items-center justify-center outline-none"
              open
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedImageIndex(null);
              }}
              tabIndex={-1}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Navigation buttons */}
                <button
                  className="absolute left-4 text-white hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex! - 1 + currentCategoryImages.length) %
                      currentCategoryImages.length
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 text-white hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex! + 1) % currentCategoryImages.length
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {/* Full size image */}
                <div className="relative w-[90vw] h-[90vh]">
                  <Image
                    src={currentCategoryImages[selectedImageIndex]}
                    alt={`Gallery image ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>
              </div>
            </dialog>
          )}
        </div>

        {/* Text Section */}
        <div
          className={`transform transition-all duration-500 ${activeSection === "text"
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible hidden"
            }`}
        >
          <div className="prose prose-lg mx-auto font-obviously-light px-4">
            <h2 className="text-4xl font-fino-sans text-center mb-8">
              Driving Into Change: How Women Have the Potential to Change the Trucking Industry
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-center mb-6">By Samantha Callicutt</p>
              <p>
                For decades, the American truck driver has been portrayed in popular culture through a narrow lens. For example, truck drivers have often been depicted as rugged lone wolves navigating the open road in films like Smokey and the Bandit or the television series B.J. and the Bear. These portrayals typically center on men and reinforce the long-standing image of trucking as a masculine profession rooted in physical toughness and independence. Truck driving has long been seen as &quot;men&apos;s work&quot;—a tough, physical, and solitary career shaped by masculine ideals such as endurance, independence, mechanical skill, and risk-taking. These traits have historically aligned with the cultural image of the lone male trucker navigating long, isolated routes and handling demanding physical labor, a stereotype reinforced in media portrayals and labor narratives (Hamilton, 2008; Mellström, 2004). This cultural framing has contributed to the perception that truck driving is a &quot;man&apos;s job,&quot; marginalizing women in the field and shaping public expectations around who belongs behind the wheel of a big rig.
              </p>
              <p>
                Yet today, this perception is being challenged loudly and persistently. Although women still represent a small share of the trucking workforce, they are steadily taking on more driving jobs and challenging outdated perceptions by excelling in safety, visibility, and leadership within the industry. Research from the 2023 study Driving in a Man&apos;s World highlights not just the increasing presence of women in trucking—up 23.1% since 2010—but also their measurable strengths, including lower rates of unsafe driving and hours-of-service violations compared to their male counterparts.
              </p>
              <p>
                In an era where trucking faces historic labor shortages and safety demands, women may be critical to the industry&apos;s future. In their Driver Shortage Update 2021 report, The American Trucking Associations estimates a shortage of over 80,000 drivers, a number projected to grow if recruitment efforts don&apos;t keep pace with industry demand. This shortage was attributed to factors such as increased freight demand, pandemic-related challenges, and an aging workforce. At the same time, carriers are under increasing pressure to improve safety records, reduce liability, and maintain reliable delivery schedules.
              </p>
              <p>
                Research has shown that female drivers are statistically safer, with lower crash rates and fewer violations, making them a valuable asset in addressing both workforce gaps and safety concerns. Embracing a more diverse driver pool isn&apos;t just a matter of equity—it&apos;s a strategic solution to some of the industry&apos;s most urgent challenges.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">A History of Exclusion</h4>
              <p>
                The roots of trucking as a &quot;male-dominated career&quot; run deep. When the industry rose to prominence in the early 20th century during and after World War I, as motorized freight began to replace horse-drawn transport, trucking was quickly defined as physically demanding, independent labor suited only for men. While there were no explicit laws prohibiting women from obtaining commercial driver&apos;s licenses, widespread gender norms, discriminatory hiring practices, and occupational segregation effectively kept women out of the industry.
              </p>
              <p>
                As historian Shane Hamilton notes in Trucking Country: The Road to America&apos;s Wal-Mart Economy, the image of the trucker as a rugged, self-reliant man was deeply embedded in American political and economic culture, helping solidify trucking&apos;s masculine identity throughout the 20th century. These cultural and institutional barriers established a gendered legacy that continues to shape perceptions of the industry today.
              </p>
              <p>
                Physical strength and mechanical aptitude were considered the key traits for success—attributes culturally coded as masculine. Trucking jobs were marketed almost exclusively to men, while women were steered toward caregiving, teaching, or clerical roles.
              </p>
              <p>
                During World War II, as American men were drafted into military service, women temporarily stepped into roles traditionally reserved for men—including trucking and other forms of wartime logistics. Women drove supply trucks for the U.S. Army and worked for defense contractors, playing a critical role in keeping domestic freight moving. One notable example was the Women&apos;s Army Corps (WAC), where women were trained to operate heavy vehicles, including transport trucks, to support the war effort. However, these roles were framed as patriotic exceptions rather than long-term career pathways. As Hamilton notes, women were &quot;swiftly displaced from these roles once peace returned.&quot; As the postwar economy reasserted traditional gender norms, trucking jobs were once again marketed exclusively to men. Despite proving their competence on the road, female truckers were pushed out of the industry, reinforcing the masculine identity of the profession for decades to come.
              </p>
              <p>
                Even legal systems reinforced these norms. In Gender at Work: The Dynamics of Job Segregation by Sex during World War II, sociologist Ruth Milkman examines how, despite the absence of explicit legal prohibitions, institutional practices and societal attitudes limited women&apos;s participation in certain occupations. Milkman highlights that during World War II, women who entered traditionally male-dominated industries were often relegated to less skilled positions and faced systemic barriers to advancement. These patterns were not necessarily codified in law but were perpetuated through workplace policies and cultural expectations that questioned women&apos;s capabilities and temperament for such roles. This institutional exclusion reinforced stereotypes about women&apos;s suitability for transportation and other labor-intensive jobs, shaping employment practices and societal perceptions for decades.
              </p>
              <p>
                By the late 20th century, the few women who worked as truckers encountered significant barriers—from harassment and inadequate amenities on the road to outright bias from employers and male peers, and these issues persist today. While progress has been made, many of these challenges persist.
              </p>
              <p>
                And while the industry has evolved in many ways, these issues have not disappeared. At the Ladies&apos; Night event hosted by HDS Trucking, several women shared that although they aim to stay positive and encourage newcomers, they&apos;ve experienced everything from being questioned about their competence to feeling unsafe at truck stops. Their stories reflect a reality where women still must navigate a profession that is still not seen as a job for women.
              </p>
              <p>
                One woman, Ravyn Brooks, stated as much. She is 5&apos;5&quot; and by her own admission, &quot;100 pounds soaking wet.&quot; She recounts how her appearance became a barrier to her education, describing a conversation with her grandfather in which he hesitated to support her pursuit of a CDL because of how she looked:
              </p>
              <p className="italic">
                &quot;Well honestly I have always wanted to be a truck driver, but unfortunately I had a male figure in my family tell me I couldn&apos;t do it because I&apos;m too little…I remember telling my grandfather, &apos;hey I think I want to be a truck driver, could you help me out going to school?&apos; And he was like, &apos;absolutely not, you are too small, you can&apos;t drive that big ole&apos; truck. Like once he said that to me I was like, I&apos;ve never seen a woman truck driver so I guess you&apos;re right.&quot;
              </p>
              <p>
                Ravyn attended HDS Trucking school with grant funds available through the Pima One-Stop Program. She graduated with her CDL in November and is currently driving trucks hauling heavy machinery for her cousin&apos;s company.
              </p>
              <p>
                Despite these challenges, women have persisted—and today, they are writing their own story.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">The Numbers: Progress Amid Disparity</h4>
              <p>
                Progress has been slow, but real. Scott and Davis-Sramek&apos;s 2023 study found that women make up just 3.2% of the sample in a major inspection dataset. However, this represents a 23.1% increase in women&apos;s representation since 2010—a promising sign of growth.
              </p>
              <p>
                Critically, female truckers are not only filling needed roles—they often outperform their male counterparts. Another study from Scott and Davis-Sramek in 2024 analyzed over 22 million truck inspection data points between 2010 and 2022. The researchers found that male drivers were 13.2% more likely to receive a major unsafe driving violation and 7.4% more likely to incur serious hours-of-service violations compared to female drivers.
              </p>
              <p>
                This trend persisted across all types of carriers and circumstances. In short, women were consistently less prone to risky driving behaviors, suggesting they bring a safety advantage to the industry.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">Ongoing Challenges: Beyond the Driver&apos;s Seat</h4>
              <p>
                Despite this strength, barriers remain. The Mineta Transportation Institute&apos;s 2018 report, Attracting and Retaining Women in the Transportation Industry, identified persistent obstacles: the image of trucking as a &quot;masculine&quot; field, a shortage of female mentors, concerns about personal safety, and difficulties balancing long-haul schedules with family life.
              </p>
              <p>
                Trucker-in-training Brooks explained as much in regards to her own two year old son, Nimani, and how she balances getting the necessary &quot;over-the-road&quot; experience, and being there for him.
              </p>
              <p className="italic">
                &quot;So my son will be going to live with my sister, and she&apos;ll just keep him until I get out of training. At that point we&apos;ll just be kind of switching back and forth, sometimes he&apos;ll be with her, and sometimes he&apos;ll be with me, or my aunt. Eventually once I do get off the road I do plan on getting something locally after I get that experience so that I can be home more often. Because my hesitation in being away for so long, I know it sounds crazy but I just don&apos;t want him to forget me.&quot;
              </p>
              <p>
                Another woman at HDS trucking corroborated family-life concerns. Lynda Thomas, a truck driver since 1978 and now a Travel Coordinator for HDS Trucking School, stated the perception she was subjected to driving commercial trucks in the 70&apos;s:
              </p>
              <p className="italic">
                &quot;At that time (1978) I weighed a whole whopping 95 pounds. I&apos;m 5 foot 3. And obviously to the men I should be home doing dishes and raising children. And even police officers back then in this industry did not recognize the ability or the will that a woman could have.&quot;
              </p>
              <p>
                Trucking jobs often emphasize &quot;agentic&quot; traits—assertiveness, independence, and attention to detail—that are culturally associated with masculinity. Meanwhile, many women generally seek careers aligned with &quot;communal&quot; values like teamwork and social impact.
              </p>
              <p>
                This trend is supported by findings from the Pew Research Center, which reported that women&apos;s share of employment in community and social service occupations rose from 35% in 1980 to 60% in 2018, reflecting a strong preference for roles that emphasize interpersonal connection and meaningful contribution to society.
              </p>
              <p>
                These findings suggest if the trucking industry highlights opportunities for teamwork, service, and mentorship—especially through programs supporting new drivers—it may resonate more deeply with women seeking purpose-driven work. As long as trucking is marketed narrowly, the industry risks losing talented women who could thrive behind the wheel.
              </p>
              <p>
                Practical concerns can weigh on some women as well. Facilities at rest stops and truck terminals are often inadequate for women, and harassment remains a serious issue on the road. Many rest areas lack well-lit parking, secure restroom and shower facilities, or designated safe spaces for women—conditions that contribute to a widespread sense of vulnerability.
              </p>
              <p>
                According to the Women in Trucking Association&apos;s 2022 Female Driver Safety and Harassment Study, 54% of female drivers believe the trucking industry is safe for women, while nearly 18% disagree, and 28.5% remain neutral. However, specific environments raise significant safety concerns: 87% of respondents consider truck stops unsafe, 85.5% cite rest areas, 75% identify the cab as a safety threat, and 74% point to shipper/receiver facilities as high-risk locations. These findings underscore the need for targeted safety improvements to support the recruitment and retention of women in trucking.
              </p>
              <p>
                These numbers aren&apos;t just abstract data—they reflect the lived reality of many women behind the wheel. The constant need to stay alert and prepared for danger takes a toll, and for some, safety threats become terrifyingly real. Bailey &quot;Bae&quot; Callahan, a driver for Swift Trucking, shared a harrowing experience during a stop in Jackson, Mississippi that underscores just how vulnerable female drivers can feel in these truck stop facilities:
              </p>
              <p className="italic">
                &quot;I was taking a 34, which is my day and a half off. And also my cycle started, so I was just in my feelings and I was like, I need snacks right now. Walk inside, get some snacks. I&apos;m walking out of the stop. I have one headset ear on, one ear off and head on a constant swivel, and I didn&apos;t see anybody around me…but there was a guy behind me that I did not catch. So I put my stuff in my truck on the floor, and I am about to climb in and I&apos;m the worst case scenario. I&apos;m freaking out. And as I&apos;m screaming, I feel the guy get yanked off of me. So we both end up on the ground. I look up and this other driver is beating this guy with a tire whacker, and I&apos;m sobbing. The guy who attacked me, he ran away, finally, and the driver who had gotten off his truck, he picked me up, gave me a really really big hug, and he was like, are you okay? And I was like, I don&apos;t know.&quot;
              </p>
              <p>
                Creating a safer and more inclusive environment would require investment in practical infrastructure and cultural change.
              </p>
              <p>
                For instance, rest stops and terminals should include well-lit, monitored parking areas, private and secure restroom and shower facilities, and emergency alert systems.
              </p>
              <p>
                Designing transportation systems with the most vulnerable users in mind—such as women, the elderly, and those traveling alone—can improve safety, comfort, and accessibility for everyone. The Transportation Research Board&apos;s 2020 report, Attracting, Retaining, and Advancing Women in Transit, found that a lack of safe facilities, visible role models, and supportive workplace policies continues to discourage women from entering and remaining in transportation careers.
              </p>
              <p>
                Also, in Callahan&apos;s case, the only reason the situation didn&apos;t escalate further was because another driver happened to be nearby and intervened. But relying on luck or the presence of a bystander is not a safety strategy. Security personnel, surveillance cameras, and gender-sensitive training for staff could also significantly improve safety. In addition, companies could implement zero-tolerance harassment policies, offer self-defense training, and create mentorship networks to support women entering the field.
              </p>
              <p>
                By prioritizing inclusive infrastructure and equity-driven workforce strategies, the industry can begin to dismantle the structural barriers that have long limited women&apos;s participation.
              </p>
              <p>
                Until the industry makes these changes, recruiting and retaining women will remain an uphill battle. Addressing safety is not just a matter of equity—it&apos;s essential for building a workforce prepared to meet the growing demands of freight transport in the 21st century and meeting the 80,000 truck driver shortage currently faced by the industry.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">Lessons from Abroad: A Model for Progress</h4>
              <p>
                Looking internationally, there are examples of greater success. Sweden has made major strides in encouraging women to pursue trucking careers (Lund University, 2020). Today, women comprise 33% of students in high school transport programs. Outreach efforts like the TV show &quot;Swedish Truckers&quot; and initiatives by the Swedish Association of Road Transport have helped normalize women&apos;s presence in the field.
              </p>
              <p>
                The World Bank, too, has emphasized the need for systemic change globally. Their 2023 report, Barriers to Women&apos;s Employment in Transport, highlights the importance of redesigning recruitment initiatives, creating harassment-free workplaces, and investing in career progression pathways for women in transportation fields.
              </p>
              <p>
                The U.S. trucking industry may be able to learn from these models, borrowing from Sweden, Germany, coupled with private groups like HDS, U.S carriers could not only close the labor gap, but also build a more equitable and sustainable workforce.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">Redefining Strength</h4>
              <p>
                Women in trucking challenge outdated notions of what makes a great driver. It&apos;s not just physical endurance or mechanical skill—it&apos;s focus, patience, professionalism, and, above all, safety.
              </p>
              <p>
                Strength means navigating 70-hour work weeks, managing strict deadlines, maintaining composure in difficult conditions, and doing it all while facing greater scrutiny. Female drivers bring not only these traits, but an edge in performance metrics that the industry requires.
              </p>
              <p>
                Mackenzie Callahan, a Driver Lead at HDS Trucking School, shared her personal experience at the HDS Ladies&apos; Night event, emphasizing how the female drivers on her fleet consistently excel in safety, professionalism, and reliability. Her observations reflect a growing recognition within the industry that women bring valuable strengths to the profession:
              </p>
              <p className="italic">
                &quot;Yeah I can say with absolute certainty that every single female who&apos;s on my fleet is a badass. They work hard and they do their job and they run circles around these boys, swear.&quot;
              </p>
              <p>
                Callahan&apos;s remarks capture a shift in how female drivers are increasingly viewed—not as exceptions, but as leaders in performance and professionalism. As more women like those on her fleet prove their capabilities, they&apos;re not only pivotal to reshaping the workforce but redefining what excellence looks like in the trucking industry.
              </p>
              <p>
                Another powerful voice helping women step into the trucking industry is Tara Staton, an Admissions Representative at HDS Trucking—and the mother of both Mackenzie Callahan and Bailey &quot;Bae&quot; Callahan, two respected women already succeeding on the road. Tara plays a key role in encouraging women who walk through the school&apos;s doors, many of whom arrive with anxiety, doubts, or fears about whether trucking is a field they can truly belong in. With a blend of empathy and firsthand experience, she guides them forward.
              </p>
              <p className="italic">
                &quot;I really pull in my two girls, who are in this industry. I&apos;m showing them the other people that have done this, and talking about their stories and how they overcome obstacles as well. If you&apos;ve got kids, you can be local. You can be home when you need to, to take care of your family,&quot; Staton states. &quot;When I see a woman come in, I get so excited because I know what opportunities there are for them to take care of themselves and not have to rely on anyone to empower them. That&apos;s what I want when they come in. My job is to empower them.&quot;
              </p>
              <p>
                Staton&apos;s approach reflects the heart of what mentorship and representation can do. By offering real-life examples of women who have not only entered the field but thrived in it—including her own daughters—she helps demystify the profession and replace fear with possibility. Her work exemplifies how support at the entry level can serve as a turning point for women who might never have considered trucking a viable, empowering career.
              </p>
              <h4 className="text-xl font-fino-sans mt-6 mb-4">The Road Ahead</h4>
              <p>
                Current women drivers are also opening doors for the next generation. Programs like the Women In Trucking Association&apos;s mentorship networks and the Federal Motor Carrier Safety Administration&apos;s diversity initiatives are helping to create meaningful pathways for women at every level of the trucking workforce.
              </p>
              <p>
                Structural changes within the trucking industry have also played a key role in opening doors for more women to enter the field. Doug Prall, owner of all the HDS Trucking Schools (which span across several different states in the southwest), points to two major shifts that have helped make trucking a more accessible and appealing career path. &quot;There&apos;s two major changes,&quot; he explained. &quot;Most trucking companies now recognize that not everybody wants to go out on the road for 2 to 4 weeks at a time. So they have created the traffic patterns to get people home faster. Some of them are home daily, some maybe a couple days or some a week at the most.&quot; This shift away from long-haul-only schedules reflects a growing awareness of the need for work-life balance, especially among drivers with caregiving responsibilities—many of whom are women.
              </p>
              <p>
                In addition to changes in scheduling, modern equipment has also evolved to meet the needs of a more diverse workforce. &quot;They&apos;re plush, beautiful trucks,&quot; Prall continued. &quot;So you have power steering, power brakes, and you get all the comforts of home. You can put your TVs and computers and bedding and closets... Just the quality of the trucks themselves and the fact that they&apos;re getting these people home fast, it makes all the difference.&quot; Together, these changes not only improve the physical demands of the job but also challenge outdated assumptions about who belongs in the driver&apos;s seat.
              </p>
              <p>
                However, compared to their European counterparts, U.S. programs have often focused more on awareness and representation than on deeply restructuring the job itself.
              </p>
              <p>
                U.S. male truckers also are not easily accepting of a woman truck driver&apos;s expertise in the job and on the road. This skepticism often manifests in subtle dismissals or outright condescension, undermining women&apos;s confidence and authority behind the wheel.
              </p>
              <p>
                As Lynda Thomas, HDS Trucking School&apos;s Special Projects Coordinator, put it: &quot;They think you&apos;re stupid if you&apos;re in a truck. That you don&apos;t really know what you&apos;re doing.&quot; Her words reflect a broader cultural bias that continues to challenge women&apos;s legitimacy in the profession, regardless of their skill or experience.
              </p>
              <p>
                In countries like Germany and the Netherlands, initiatives don&apos;t just promote diversity—they actively redesign training and workplace expectations to recognize and leverage women&apos;s strengths, such as attention to detail, communication skills, and a strong safety record. For example, in Germany, the Women in Transport (WiT) Network was established through collaboration with partners such as the World Bank and the German Agency for International Cooperation (GIZ) to support women&apos;s advancement across the transport industry. The program offers resources like mentorship, skill-building workshops, and networking platforms, all aimed at improving access, reducing entry barriers, and encouraging more inclusive employment practices within the sector.
              </p>
              <p>
                These programs move beyond simply integrating women into an existing male-coded system; they reimagine the profession in a way that values what women already bring to the job.
              </p>
              <p>
                Women drivers&apos; high safe driving performance and records as well as lower rates of violations point to a future where the highways are not just more diverse—but safer not only for the truck drivers but for other drivers with whom they share the roads.
              </p>
              <p>
                Ellen Voie, President and CEO of the Women In Trucking Association, highlights the valuable contributions women make to the industry, stating,
              </p>
              <p className="italic">
                &quot;Women truck drivers bring a higher level of safety to the industry. They work well with customers, and they&apos;re an important demographic as the trucking industry tries to fill professional driver positions.&quot;
              </p>
              <p>
                The road may still be long, but women are already driving the trucking industry toward a better future—one mile, and one stereotype, at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="max-w-3xl mx-auto mt-8 px-4 pb-16">
          <h2 className="text-4xl font-fino-sans text-center mb-6">Synopsis</h2>
          <p className="text-center font-obviously-light text-lg">
            For the past 6 months, I&apos;ve been working on my Master&apos;s
            capstone thesis project for my program at the University of Arizona.
            When I embarked on this project, I had no idea about the incredible
            journey I was about to take and I&apos;m SO proud to reveal my debut
            documentary film, &quot;Drive Like A Girl.&quot; Elvio Anderson, my
            co-pilot, and I have fully dove into not only the truck driving world,
            but the lives, experiences, and challenges of the female truck drivers
            who are breaking social norms and stereotypes. While once a
            predominantly male job, these woman show that driving &quot;big
            ole&apos; big rigs&quot; is a job for EVERYONE.
          </p>
        </div>
      </div>
    </div>
  );
}
