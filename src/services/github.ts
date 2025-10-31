export interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string | null
  bio: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
}

export interface GitHubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
  visibility: string
}

const BASE = "https://api.github.com"

export async function fetchUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${BASE}/users/${encodeURIComponent(username)}`)
  if (res.status === 404) throw new Error("ไม่พบผู้ใช้")
  if (!res.ok) throw new Error(`โหลดข้อมูลผู้ใช้ล้มเหลว (status ${res.status})`)
  return res.json()
}

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${BASE}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`
  )
  if (!res.ok) throw new Error(`โหลดรายการ repo ล้มเหลว (status ${res.status})`)
  const data = await res.json()
  // return data.filter((r: GitHubRepo) => !r.fork)
  return data
}
