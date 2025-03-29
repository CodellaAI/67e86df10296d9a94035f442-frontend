
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function CaseStudyNav({ prevCaseStudy, nextCaseStudy }) {
  return (
    <section className="py-12 border-t border-secondary-200 dark:border-dark-600">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div>
            {prevCaseStudy ? (
              <Link 
                href={`/case-studies/${prevCaseStudy.slug}`}
                className="flex items-center group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                <div>
                  <span className="block text-sm text-secondary-500 dark:text-secondary-400">Previous</span>
                  <span className="font-medium text-secondary-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400">{prevCaseStudy.title}</span>
                </div>
              </Link>
            ) : (
              <div className="opacity-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-sm text-secondary-500 dark:text-secondary-400">No previous case study</span>
              </div>
            )}
          </div>
          
          <Link 
            href="/case-studies"
            className="px-4 py-2 text-sm font-medium text-white transition-colors bg-primary-500 rounded-md hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            All Case Studies
          </Link>
          
          <div className="text-right">
            {nextCaseStudy ? (
              <Link 
                href={`/case-studies/${nextCaseStudy.slug}`}
                className="flex items-center group"
              >
                <div>
                  <span className="block text-sm text-secondary-500 dark:text-secondary-400">Next</span>
                  <span className="font-medium text-secondary-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400">{nextCaseStudy.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div className="opacity-50">
                <span className="text-sm text-secondary-500 dark:text-secondary-400">No next case study</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
