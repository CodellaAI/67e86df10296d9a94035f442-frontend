
'use client'

import { useState } from 'react'
import { Send, Loader } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    })
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thanks for your message! I\'ll get back to you soon.'
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus.isSubmitted && !formStatus.isError && (
        <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-md dark:bg-green-900/30 dark:text-green-300">
          {formStatus.message}
        </div>
      )}
      
      {formStatus.isError && (
        <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-md dark:bg-red-900/30 dark:text-red-300">
          {formStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-secondary-700 dark:text-secondary-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-secondary-900 bg-white border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:border-dark-500 dark:text-white"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary-700 dark:text-secondary-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-secondary-900 bg-white border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:border-dark-500 dark:text-white"
          placeholder="Your email"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-secondary-700 dark:text-secondary-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-secondary-900 bg-white border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:border-dark-500 dark:text-white"
          placeholder="Subject of your message"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-secondary-700 dark:text-secondary-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 text-secondary-900 bg-white border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-600 dark:border-dark-500 dark:text-white"
          placeholder="Your message"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={formStatus.isSubmitting}
        className="flex items-center justify-center w-full px-6 py-3 text-white transition-colors bg-primary-500 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 dark:bg-primary-600 dark:hover:bg-primary-700"
      >
        {formStatus.isSubmitting ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
