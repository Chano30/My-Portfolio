import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CONTACT } from '../../../data'

function Contact() {
  // Store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Check if section is visible on screen
  const { ref, inView } = useInView({
    threshold: 0.1
  })

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Fake API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative py-32 bg-blue overflow-hidden"
    >
      {/* Moving dots in background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${inView}`}
      >
        {/* Animated dot pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={inView ? {
            backgroundPosition: ['0% 0%', '100% 100%']
          } : {}}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, type: "spring" }}
          key={`header-${inView}`}
        >
          <h2 className="mb-4 text-5xl font-bold text-center text-white lg:text-6xl">
            Let&apos;s <span className="text-[#576CBC]">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-center text-white/70">
            Have a project in mind? We&apos;d love to hear from you! Drop us a message 
            and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="relative max-w-2xl w-full mx-auto">
          {/* Contact info and map */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            key={`info-${inView}`}
          >
            {/* Contact details with icons */}
            <div className="space-y-4">
              {CONTACT.map((info, index) => (
                <motion.a
                  key={`${info.title}-${inView}`}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 
                    backdrop-blur-sm hover:border-[#576CBC]/50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="p-3 rounded-full bg-[#576CBC]/20 group-hover:bg-[#576CBC]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#576CBC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#6DBE45] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Google Maps embed */}
            <motion.div 
              className="mt-8 overflow-hidden border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              key={`map-${inView}`}
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Cabuyao%20City%20Laguna&zoom=10&maptype=roadmap"
                className="w-full h-[350px] border-0 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 