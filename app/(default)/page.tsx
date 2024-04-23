export const metadata = {
  title: 'Home - WereldDigitaal.nl',
  description: 'Welkom bij WereldDigitaal.nl - Expert in Website Design, Hosting & Branding.

Bent u op zoek naar een professionele en betrouwbare partner voor uw online aanwezigheid? Bij WereldDigitaal.nl combineren we innovatief webdesign met krachtige hostingdiensten om uw bedrijf online te laten schitteren.

Onze diensten:

Website Design: Wij creëren op maat gemaakte websites die niet alleen visueel aantrekkelijk zijn, maar ook gebruiksvriendelijk en responsief. Elk ontwerp wordt zorgvuldig afgestemd op uw merk en doelgroep, zodat u zich kunt onderscheiden van de concurrentie.
Hosting: Met onze betrouwbare en snelle hostingdiensten zorgen we ervoor dat uw website altijd online is. We bieden verschillende hostingpakketten aan die geschikt zijn voor zowel kleine als grote bedrijven.
Bedrijfsbranding: Naast website design en hosting, helpen we u ook graag met uw bedrijfsbranding. Van logo-ontwerp tot complete huisstijl, wij zorgen ervoor dat uw merk consistent en herkenbaar is in alle communicatie-uitingen.
Waarom kiezen voor WereldDigitaal.nl?

Ontzorging: Wij begrijpen dat u zich wilt focussen op uw core business. Daarom nemen wij graag alle technische en creatieve aspecten van uw online aanwezigheid uit handen.
Ervaring: Met jarenlange ervaring en een team van gedreven professionals staan we garant voor kwaliteit en service.
SEO-vriendelijk: Onze websites zijn geoptimaliseerd voor zoekmachines, zodat u beter vindbaar bent voor potentiële klanten.
Ontdek wat WereldDigitaal.nl voor uw bedrijf kan betekenen en neem vandaag nog contact met ons op voor een vrijblijvend gesprek!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
