'use client'

import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">I'm always open to new opportunities and collaborations.</p>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:developer@example.com" className="text-2xl">
          <FaEnvelope />
        </a>
      </div>
      {submitted ? (
        <p className="text-green-500">Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="w-full px-3 py-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact

