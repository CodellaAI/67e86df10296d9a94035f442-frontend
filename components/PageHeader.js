
import Image from 'next/image'

export default function PageHeader({ title, description, bgImage }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Background */}
      {bgImage ? (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-secondary-900/70 dark:bg-dark-800/80 z-10"></div>
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute w-64 h-64 rounded-full bg-primary-300/20 dark:bg-primary-700/10 blur-3xl -top-10 -left-10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary-300/20 dark:bg-secondary-700/10 blur-3xl top-1/3 -right-20"></div>
        </div>
      )}
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl font-bold md:text-5xl ${bgImage ? 'text-white' : ''}`}>
            {title}
          </h1>
          {description && (
            <p className={`mt-6 text-xl ${
              bgImage 
                ? 'text-white/90' 
                : 'text-secondary-600 dark:text-secondary-300'
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
