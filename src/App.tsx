import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"
import RepoList from "./components/RepoList"
import { fetchUser, fetchRepos } from "./services/github"
import type { GitHubUser, GitHubRepo} from "./services/github"

export default function App() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSearch(name: string) {
    const trimmed = name.trim()
    if (!trimmed) {
      setError("Enter GitHub username")
      setUser(null)
      setRepos([])
      return
    }

    setError("")
    setLoading(true)
    setUser(null)
    setRepos([])

    try {
      const [u, r] = await Promise.all([fetchUser(trimmed), fetchRepos(trimmed)])
      setUser(u)
      setRepos(r)
    } catch (err) {
      if(err instanceof Error){
        setError(err.message || "Error")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">GitHub Profile Viewer</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="mt-3 rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 animate-pulse">
          กำลังค้นหา...
        </div>
      )}

      {error && (
        <div className="mt-3 rounded-lg bg-rose-900/40 border border-rose-800 px-3 py-2">
          {error}
        </div>
      )}

      {user && <ProfileCard user={user} />}
      {user && repos.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Repositories</h2>
          <RepoList repos={repos} />
        </>
      )}
    </div>
  )
}
