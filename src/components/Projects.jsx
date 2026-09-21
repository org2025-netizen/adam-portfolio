import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Lock, Cloud, ShoppingCart, MessageSquare, GraduationCap, Brain, Code2, ArrowRight, Building2, Monitor } from 'lucide-react'
import { projects } from '../data/projects'

const iconMap = {
  Lock,
  Cloud,
  ShoppingCart,
  MessageSquare,
  GraduationCap,
  Brain,
  Building2,
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/98 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                {project.status === 'in-development' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full border border-amber-500/30">
                      In Development
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon size={24} className="text-white" />}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-400 font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.features.map((feature, j) => (
                    <span key={j} className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="w-1 h-1 bg-primary-500 rounded-full" />
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.status === 'in-development' ? (
                    <span className="px-4 py-2 glass text-gray-400 text-sm rounded-lg flex items-center gap-2">
                      <Brain size={14} />
                      Coming Soon
                    </span>
                  ) : (
                    <>
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 glass glass-hover text-white text-sm rounded-lg flex items-center gap-2"
                        >
                          <Monitor size={14} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 glass glass-hover text-white text-sm rounded-lg flex items-center gap-2"
                      >
                        <Code2 size={14} />
                        View Code
                      </a>
                      <a
                        href={project.links.details}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded-lg flex items-center gap-2 transition-all duration-300"
                      >
                        <ArrowRight size={14} />
                        Project Details
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/org2025-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover text-white font-medium rounded-xl transition-all duration-300"
          >
            <ExternalLink size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
