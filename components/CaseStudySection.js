
export default function CaseStudySection({ title, content, bgColor = '' }) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>
          <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}
