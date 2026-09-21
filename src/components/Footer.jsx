import { Github, Linkedin, Mail, Heart, Download } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-navy-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">AM</span>
            </div>
            <h3 className="text-xl font-bold text-white">Adam Munyendo</h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Building technology. Learning continuously. Solving real problems.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://github.com/org2025-netizen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-munyendo-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@adammunyendo.dev"
              className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/Adam_Munyendo_Resume.pdf"
              download
              className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Download Resume"
            >
              <Download size={20} />
            </a>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-1">
            &copy; {currentYear} Adam Munyendo. All rights reserved. Built with
            <Heart size={14} className="text-red-500 mx-1" />
            and dedication.
          </div>
          <a href="#admin" className="text-xs text-gray-700 hover:text-gray-500 mt-4 transition-colors">
            Admin
          </a>
        </div>
      </div>
    </footer>
  )
}
