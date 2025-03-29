
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedWorks from '@/components/FeaturedWorks'
import ProcessSection from '@/components/ProcessSection'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <section className="section bg-secondary-50 dark:bg-dark-700">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Featured Work</h2>
            <p className="max-w-2xl mx-auto text-lg text-secondary-600 dark:text-secondary-300">
              Selected projects showcasing my design process and problem-solving approach.
            </p>
          </div>
          
          <FeaturedWorks />
          
          <div className="mt-12 text-center">
            <Link href="/case-studies" className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:underline">
              View all case studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <ProcessSection />
      
      <ContactCTA />
    </div>
  )
}
