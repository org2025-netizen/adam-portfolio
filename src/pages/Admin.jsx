import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Clock, RefreshCw, ArrowLeft, Inbox, LogOut } from 'lucide-react'
import Login from './Login'
import { api } from '../config/api'

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('adminToken'))
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMessages = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(api.contact, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 401) {
        localStorage.removeItem('adminToken')
        setToken(null)
        return
      }
      const data = await res.json()
      setMessages(data.data || [])
    } catch (err) {
      setError('Failed to load messages')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) fetchMessages()
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setToken(null)
    setMessages([])
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (!token) {
    return <Login onLogin={setToken} />
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <nav className="sticky top-0 z-50 bg-navy-900/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="p-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={20} />
            </a>
            <h1 className="text-lg font-semibold text-white">Contact Messages</h1>
            <span className="px-2 py-0.5 bg-primary-500/20 text-primary-400 text-xs rounded-full">
              {messages.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchMessages}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Refresh"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {loading && messages.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-20">
            <Inbox size={48} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No messages yet</p>
            <p className="text-gray-500 text-sm mt-1">Messages from the contact form will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                      <User size={18} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{msg.name}</h3>
                      <p className="text-gray-500 text-sm">{msg.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <Clock size={12} />
                    {formatDate(msg.created_at)}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300">
                    <Mail size={14} className="text-primary-400" />
                    {msg.subject}
                  </span>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <MessageSquare size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
