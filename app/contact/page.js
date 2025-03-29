
import { Mail, Phone, MapPin, Linkedin, Twitter, Dribbble, Github } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Get in Touch" 
        description="Have a project in mind? Let's work together to bring your ideas to life."
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
              <p className="mb-8 text-lg text-secondary-600 dark:text-secondary-300">
                Feel free to reach out through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-primary-500" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:hello@designportfolio.com" className="text-secondary-600 hover:text-primary-500 dark:text-secondary-300 dark:hover:text-primary-400">
                      hello@designportfolio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-primary-500" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-secondary-600 hover:text-primary-500 dark:text-secondary-300 dark:hover:text-primary-400">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-primary-500" />
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="mb-4 text-xl font-bold">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 text-secondary-600 transition-colors rounded-full hover:text-primary-500 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-dark-600">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="p-2 text-secondary-600 transition-colors rounded-full hover:text-primary-500 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-dark-600">
                    <Twitter className="w-6 h-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="p-2 text-secondary-600 transition-colors rounded-full hover:text-primary-500 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-dark-600">
                    <Dribbble className="w-6 h-6" />
                    <span className="sr-only">Dribbble</span>
                  </a>
                  <a href="#" className="p-2 text-secondary-600 transition-colors rounded-full hover:text-primary-500 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-dark-600">
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
