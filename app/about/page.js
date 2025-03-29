
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import SkillsSection from '@/components/SkillsSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About Me" 
        description="UX/UI designer passionate about creating intuitive digital experiences."
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg aspect-square md:aspect-auto">
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="mb-6 text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Hello! I'm a UX/UI designer with a passion for creating intuitive, user-centered digital experiences that solve real problems.
                </p>
                <p>
                  With a background in both design and psychology, I approach each project with a deep understanding of user behavior and a commitment to creating designs that are not only beautiful but also functional and accessible.
                </p>
                <p>
                  I believe that great design is invisible—it should feel natural and effortless to the user. My process involves extensive research, thoughtful planning, and iterative design to ensure that every product I work on meets both user needs and business goals.
                </p>
                <p>
                  When I'm not designing, you can find me exploring new hiking trails, experimenting with photography, or attending design meetups to stay connected with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      <ExperienceTimeline />
      
      <section className="section bg-secondary-50 dark:bg-dark-700">
        <div className="container-custom">
          <h2 className="mb-8 text-3xl font-bold text-center">Education & Certifications</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-dark-600">
              <h3 className="mb-2 text-xl font-bold">Master of Design</h3>
              <p className="mb-1 text-primary-500 dark:text-primary-400">Design University</p>
              <p className="text-secondary-600 dark:text-secondary-300">2016 - 2018</p>
              <p className="mt-4">Specialized in User Experience Design with focus on digital interfaces and interactive systems.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-dark-600">
              <h3 className="mb-2 text-xl font-bold">Bachelor of Arts</h3>
              <p className="mb-1 text-primary-500 dark:text-primary-400">Creative Arts College</p>
              <p className="text-secondary-600 dark:text-secondary-300">2012 - 2016</p>
              <p className="mt-4">Major in Graphic Design with minor in Psychology, providing a foundation for understanding user behavior.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-dark-600">
              <h3 className="mb-2 text-xl font-bold">UX Certification</h3>
              <p className="mb-1 text-primary-500 dark:text-primary-400">Nielsen Norman Group</p>
              <p className="text-secondary-600 dark:text-secondary-300">2019</p>
              <p className="mt-4">Comprehensive certification covering research methods, information architecture, and interaction design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
