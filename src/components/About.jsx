import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Globe, Rocket, Brain, ArrowRight } from 'lucide-react'

const timelineSteps = [
  { icon: Globe, label: 'Business & Entrepreneurship' },
  { icon: Cpu, label: 'Education & ICT' },
  { icon: Code2, label: 'Programming' },
  { icon: Rocket, label: 'Software Projects' },
  { icon: Brain, label: 'AI' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/98 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer on a journey to build meaningful technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a Computer Science student and software developer passionate about building practical technology solutions. I enjoy turning ideas into functional software and continuously exploring artificial intelligence, automation, web development, and modern software engineering.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                My journey began with a foundation in business entrepreneurship and education technology, where I developed a deep appreciation for how technology can transform real-world processes. This led me to pursue Computer Science, where I combine my analytical skills with creative problem-solving.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in continuous learning and building solutions that matter. Whether it's a secure desktop application, a web-based system, or exploring the frontiers of AI, I approach every project with curiosity and determination.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Rocket className="text-primary-400" size={20} />
                Developer Journey
              </h3>
              <div className="space-y-4">
                {timelineSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <step.icon size={18} className="text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-medium">{step.label}</p>
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <ArrowRight size={16} className="text-gray-600" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gradient">CS</p>
                <p className="text-xs text-gray-400 mt-1">Student</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gradient">AI</p>
                <p className="text-xs text-gray-400 mt-1">Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
