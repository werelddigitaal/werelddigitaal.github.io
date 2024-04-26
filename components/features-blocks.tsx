export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Ontdek onze diensten</h2>
            <p className="text-xl text-gray-600">Wij bieden een breed scala aan diensten om jouw bedrijf te helpen groeien en opvallen in de markt.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item: Branding & Identiteit */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M19 38h26v12H19z" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M32 26V8M32 52v-8" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Branding & Identiteit</h4>
              <p className="text-gray-600 text-center">Ontwikkel een unieke merkidentiteit die zich onderscheidt van de concurrentie.</p>
            </div>

            {/* 2nd item: Grafisch ontwerp */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M20.5 30.5l8-8M43.5 30.5l-8-8" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Grafisch ontwerp</h4>
              <p className="text-gray-600 text-center">Creëer visuele elementen die de kernwaarden van jouw merk uitstralen.</p>
            </div>

            {/* 3rd item: Website ontwerp */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M28 8h8v48h-8zM48 28v8H16v-8z" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Website ontwerp</h4>
              <p className="text-gray-600 text-center">Laat jouw online aanwezigheid opvallen met aantrekkelijke en functionele websites.</p>
            </div>

            {/* 4th item: Contentcreatie */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M28 8h8v48h-8zM48 28v8H16v-8z" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M16 24h32v16H16z" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contentcreatie</h4>
              <p className="text-gray-600 text-center">Ontwikkel boeiende content die jouw doelgroep aanspreekt en betrekt.</p>
            </div>

            {/* 5th item: Sociale media marketing */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M22 34l-4-4M42 34l4-4M32 22v24" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M28 12h8v4h-8zM28 48h8v4h-8zM36 12v8h4v-8zM24 48v-8h-4v8z" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sociale media marketing</h4>
              <p className="text-gray-600 text-center">Vergroot jouw online bereik en betrokkenheid met effectieve sociale media strategieën.</p>
            </div>

            {/* 6th item: Digitale strategie */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M28 8h8v48h-8zM48 28v8H16v-8z" />
                  <path className="stroke-current text-white" strokeLinecap="round" strokeWidth="4" d="M24 24h16v16H24z" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Digitale strategie</h4>
              <p className="text-gray-600 text-center">Ontwikkel een gerichte en effectieve digitale strategie om jouw doelen te bereiken.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
