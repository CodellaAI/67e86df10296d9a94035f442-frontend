
import Link from 'next/link'
import { Linkedin, Twitter, Dribbble, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 bg-secondary-900 dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid gap-8 mb-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4 text-2xl font-bold tracking-tight text-white">
              Design<span className="text-primary-400">Portfolio</span>
            </Link>
            <p className="max-w-md text-secondary-300">
              Creating intuitive digital experiences through thoughtful UX/UI design. 
              Let's work together to bring your vision to life.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-secondary-300 transition-colors rounded-full hover:text-primary-400 hover:bg-secondary-800">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-2 text-secondary-300 transition-colors rounded-full hover:text-primary-400 hover:bg-secondary-800">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2 text-secondary-300 transition-colors rounded-full hover:text-primary-400 hover:bg-secondary-800">
                <Dribbble className="w-5 h-5" />
                <span className="sr-only">Dribbble</span>
              </a>
              <a href="#" className="p-2 text-secondary-300 transition-colors rounded-full hover:text-primary-400 hover:bg-secondary-800">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-bold text-white">Contact</h3>
              <a href="mailto:hello@designportfolio.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                hello@designportfolio.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-secondary-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-secondary-400">
              © {currentYear} Design Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-secondary-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
