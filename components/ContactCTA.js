
'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-primary-500 dark:bg-primary-600">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to bring your design vision to life?
          </h2>
          <p className="mb-10 text-xl text-white/90">
            Let's collaborate to create exceptional digital experiences that resonate with your users.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 transition-colors bg-white rounded-md hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
