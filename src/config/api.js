const API_BASE = import.meta.env.VITE_API_URL || ''

export const api = {
  contact: `${API_BASE}/api/contact`,
  auth: `${API_BASE}/api/auth`,
}
