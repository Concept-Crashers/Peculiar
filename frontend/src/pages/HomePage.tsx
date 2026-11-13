import { SiteLayout } from '../components/layout/SiteLayout'
import { Marquee } from '../components/ui/Marquee'
import { PageMetadata } from '../components/ui/PageMetadata'
import { AboutSection } from '../features/home/components/AboutSection'
import { ApproachSection } from '../features/home/components/ApproachSection'
import { ContactSection } from '../features/home/components/ContactSection'
import { ExploreSection } from '../features/home/components/ExploreSection'
import { EvidenceSection } from '../features/home/components/EvidenceSection'
import { HeroSection } from '../features/home/components/HeroSection'
import { ServicesSection } from '../features/home/components/ServicesSection'

export function HomePage() {
  return (
    <SiteLayout>
      <PageMetadata
        title="Peculiar Technologies Limited | Crafting Tomorrow's Technology Today"
        description="Peculiar Technologies Limited is based in Kampala, Uganda. Explore the company story and technology information being prepared for publication."
      />
      <HeroSection />
      <Marquee
        items={['People first', 'Built with purpose', 'Made to matter']}
        label="People first. Built with purpose. Made to matter."
        dark
      />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ExploreSection />
      <EvidenceSection />
      <ContactSection />
    </SiteLayout>
  )
}
