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
        title="Peculiar Technologies Limited | Thoughtful tech. Real purpose."
        description="Peculiar Technologies Limited believes the best technology begins with understanding people and the challenges they want to solve."
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
      <ContactSection />
    </SiteLayout>
  )
}
