import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ExternalLink, Terminal, Code2, Sparkles, Download } from 'lucide-react'

const codeLines = [
  { text: 'const adam = {', indent: 0 },
  { text: '  name: "Adam Munyendo",', indent: 1, color: 'text-emerald-400' },
  { text: '  role: "Software Developer",', indent: 1, color: 'text-blue-400' },
  { text: '  passion: "AI & Technology",', indent: 1, color: 'text-purple-400' },
  { text: '  building: true,', indent: 1, color: 'text-orange-400' },
  { text: '  learning: true', indent: 1, color: 'text-cyan-400' },
  { text: '};', indent: 0 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Adam Munyendo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gradient font-semibold mb-6"
            >
              Software Developer & AI Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building practical software solutions while exploring the future of artificial intelligence and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                View My Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3 glass glass-hover text-white font-medium rounded-xl flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/org2025-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-xl text-gray-400 hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-munyendo-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-xl text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="/Adam_Munyendo_Resume.pdf"
                download
                className="p-3 glass glass-hover rounded-xl text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-400 font-mono">adam.js</span>
                  </div>
                </div>
                <div className="font-mono text-sm space-y-1">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex"
                      style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                    >
                      <span className="text-gray-600 w-6">{i + 1}</span>
                      <span className={line.color || 'text-gray-300'}>{line.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="mt-4 flex items-center gap-2 text-gray-500"
                >
                  <Code2 size={14} />
                  <span className="text-xs font-mono">Building the future, one line at a time</span>
                  <Sparkles size={14} className="text-primary-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
