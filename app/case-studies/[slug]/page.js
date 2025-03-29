
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import PageHeader from '@/components/PageHeader'
import CaseStudySection from '@/components/CaseStudySection'
import CaseStudyGallery from '@/components/CaseStudyGallery'
import CaseStudyNav from '@/components/CaseStudyNav'

export default function CaseStudyPage({ params }) {
  // Find the case study based on the slug
  const caseStudy = caseStudies.find(study => study.slug === params.slug)
  
  // If case study doesn't exist, display an error message
  if (!caseStudy) {
    return (
      <div className="container-custom section">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <p className="mt-4">Sorry, the case study you're looking for doesn't exist.</p>
        <Link href="/case-studies" className="inline-flex items-center mt-6 text-primary-500 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to case studies
        </Link>
      </div>
    )
  }
  
  // Find next and previous case studies for navigation
  const currentIndex = caseStudies.findIndex(study => study.slug === params.slug)
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null
  
  return (
    <div>
      <PageHeader 
        title={caseStudy.title}
        description={caseStudy.shortDescription}
        bgImage={caseStudy.coverImage}
      />
      
      <div className="container-custom py-8">
        <Link href="/case-studies" className="inline-flex items-center text-primary-500 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to case studies
        </Link>
        
        <div className="grid gap-8 mt-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative w-full overflow-hidden rounded-lg aspect-video">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-dark-700">
              <h3 className="mb-4 text-xl font-bold">Project Details</h3>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">Client</h4>
                <p className="mt-1">{caseStudy.client}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">Timeline</h4>
                <p className="mt-1">{caseStudy.timeline}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">Role</h4>
                <p className="mt-1">{caseStudy.role}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">Skills</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {caseStudy.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs text-primary-600 bg-primary-50 rounded-full dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CaseStudySection 
        title="Overview"
        content={caseStudy.overview}
      />
      
      <CaseStudySection 
        title="Challenge"
        content={caseStudy.challenge}
        bgColor="bg-secondary-50 dark:bg-dark-700"
      />
      
      <CaseStudySection 
        title="Process"
        content={caseStudy.process}
      />
      
      <CaseStudyGallery images={caseStudy.images} />
      
      <CaseStudySection 
        title="Solution"
        content={caseStudy.solution}
      />
      
      <CaseStudySection 
        title="Results"
        content={caseStudy.results}
        bgColor="bg-secondary-50 dark:bg-dark-700"
      />
      
      <CaseStudyNav 
        prevCaseStudy={prevCaseStudy}
        nextCaseStudy={nextCaseStudy}
      />
    </div>
  )
}
