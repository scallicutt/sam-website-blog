import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-[#0A1931] text-7xl mb-16 font-light tracking-widest text-center">
        MEET SAMANTHA
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 aspect-square relative w-2/3 mx-auto">
          <Image
            src="/assets/about-headshot.jpeg"
            alt="Samantha Callicutt"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="text-lg leading-relaxed text-gray-700 space-y-6 font-obviously-thin">
          <p>
            I&apos;ve always believed that stories have the power to connect us
            — across distance, across differences, across time. That belief is
            what led me to become a journalist, data journalist, documentary
            producer, and photographer. Whether through a written piece, a
            documentary film, or a single photograph, I&apos;m driven by the
            same goal: to capture real experiences and spark conversations that
            matter.
          </p>

          <p>
            My work blends deep reporting, data analysis, visual storytelling,
            and field production to explore the complexities of the world we
            live in. I&apos;m as comfortable digging into public records and
            data sets as I am interviewing someone on the side of a highway or
            filming a story as it unfolds. I&apos;m especially passionate about
            uncovering stories that are often overlooked — stories about
            resilience, change, and the human experience.
          </p>

          <p>
            As a data journalist, I turn numbers into narratives. As a
            documentary producer, I create space for voices that need to be
            heard. As a photographer, I seek out the moments that reveal a
            deeper truth.
          </p>

          <p>
            My background spans traditional reporting, investigative journalism,
            documentary film production, and visual storytelling. I&apos;m
            passionate about digging beneath the surface — turning numbers into
            narratives, shining a light on untold experiences, and creating work
            that drives understanding and change.
          </p>

          <p>
            Today, I blend my skills across mediums to tell complex,
            human-centered stories with clarity, depth, and heart. I believe
            that good storytelling can challenge assumptions, bridge divides,
            and move people toward action — and that belief drives everything I
            do.
          </p>

          <p>
            Thanks for taking the time to get to know me. I&apos;m always
            excited to connect with others who believe in the power of good
            storytelling — and I&apos;m always looking for the next story worth
            telling.
          </p>
        </div>
      </div>
    </div>
  );
}
