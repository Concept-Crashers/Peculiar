import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'
import { PageMetadata } from '../components/ui/PageMetadata'
import { AboutSection } from '../features/home/components/AboutSection'
import { ApproachSection } from '../features/home/components/ApproachSection'
import { ContactSection } from '../features/home/components/ContactSection'
import { ExploreSection } from '../features/home/components/ExploreSection'
import { HeroSection } from '../features/home/components/HeroSection'
import { ServicesSection } from '../features/home/components/ServicesSection'

export function HomePage() {
  return (
    <SiteLayout>
      <PageMetadata
        title="Peculiar Technologies Limited | Crafting Tomorrow's Technology Today"
        description="Explore software development, website design, UI/UX, IT consulting, data, automation and training services from Peculiar Technologies in Kampala, Uganda."
      />
      <HeroSection />
      <Marquee
        items={['Software development', 'Website design', 'UI/UX and product design', 'IT strategy', 'Data and automation', 'Training']}
        label="Software development, website design, UI/UX and product design, IT strategy, data and automation, training."
        dark
      />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ExploreSection />
      <ContactSection />
    </SiteLayout>
  )
}
