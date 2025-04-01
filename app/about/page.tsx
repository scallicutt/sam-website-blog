import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-[#0A1931] text-7xl mb-16 font-light tracking-widest text-center">
        MEET SAMANTHA
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-start justify-end">
          <div className="aspect-square relative w-[75%]">
            <Image
              src="/assets/about-headshot.jpeg"
              alt="Samantha Callicutt"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-[75%] text-lg leading-relaxed text-gray-700">
            <p>
              Ma aut aceperiat. Eceaquidest ventia volorror sum lla sa cum quos
              et voles que et ut autemporio od quaest, tet fugit facolupa cupta
              volut ad unt lab ipidit doles nim qui del maiorem rem re verita
              sapedig enitendusias sumqui nusandunt accate vellaborum es et ut
              everate ssimus sunt velectur?
            </p>
            <p className="mt-4">
              Um a placcus sinctor estlis sum sin comnis et aut pa se pera
              dolorem est elo tet eosserum elesserum as et miliquamus
              miliorempore volorit ibeaquam, simagni tatius et parohicae quae
              lamus et venes et arum cusam faceatlam, sunturlt optiaeri occus.
            </p>
            <p className="mt-4">
              Axim quam diostium quidemos im quibus solorerchit quam qui od eum
              quatius re nis aut rem sus sed mil idebitio doluptia exerovi
              denessinto ist, consedic totas ut landita tectest, quae volores
              equisit, soloresequam ra dus, quos issitiatis si dolecum estorum
              resti bla nonet molupis esclenient eaquistorer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
