export const metadata = {
  title: 'Lokale Service Wereldwijde Zichtbaarheid - WereldDigitaal.nl',
  description: 'Ontdek hoe WereldDigitaal.nl uw bedrijf kan helpen groeien met innovatieve digitale oplossingen. Vraag nu een gratis consult aan!'

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
