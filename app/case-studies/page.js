
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/data/caseStudies'
import PageHeader from '@/components/PageHeader'

export default function CaseStudies() {
  return (
    <div>
      <PageHeader 
        title="Case Studies" 
        description="Explore my design process and solutions for real-world problems."
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link 
                key={study.id} 
                href={`/case-studies/${study.slug}`}
                className="case-study-card group"
              >
                <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={study.coverImage}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="mb-2 text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-white/90">{study.shortDescription}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    {study.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">{study.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
