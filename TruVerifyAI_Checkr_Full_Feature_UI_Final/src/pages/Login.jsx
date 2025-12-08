import { Link } from 'react-router-dom'

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Demo-only login UI. Later you can connect to your auth backend.')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-10 text-sm">
      <div className="card-soft p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-1">Log in</h1>
        <p className="text-xs text-slate-600 mb-4">Access your TruVerifyAI workspace.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium mb-1">Work email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md text-sm" required />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-1 rounded-full bg-brand-primary text-white text-sm"
          >
            Log in
          </button>
        </form>

        <div className="mt-4 flex justify-between text-xs text-slate-500">
          <button>Forgot password?</button>
          <Link to="/signup" className="text-brand-primary hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}