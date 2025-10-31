import type { GitHubUser } from "../services/github"

interface Props{
  user: GitHubUser
}

export default function ProfileCard({ user }: Props) {
  const create = new Date(user.created_at)
  const now = new Date()
  const joinDays = Math.floor((now.getTime() - create.getTime()) / (1000 * 60 * 60 * 24))
  return (
    <section className="mt-4 grid md:grid-cols-[96px_1fr] grid-cols-1 gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        width={96}
        height={96}
        className="rounded-full border-2 border-slate-700 mx-auto md:mx-0"
      />
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">
          {user.name || user.login}{" "}
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-cyan-400 font-semibold hover:underline"
          >
            @{user.login}
          </a>
        </h2>
        {user.bio && <p className="text-slate-400 mt-1">{user.bio}</p>}
        <ul className="flex justify-center md:justify-start gap-5 text-slate-400 mt-2">
          <li>
            Followers: <strong className="text-slate-200">{user.followers}</strong>
          </li>
          <li>
            Following: <strong className="text-slate-200">{user.following}</strong>
          </li>
          <li>
            Repos: <strong className="text-slate-200">{user.public_repos}</strong>
          </li>
          <li>
            Join : <strong className="text-slate-200">{user.created_at.split("T")[0]}</strong>
          </li>
          <li>
            Join : <strong className="text-slate-200">{joinDays} {joinDays <= 1? "Day": "Days"}</strong>
          </li>
        </ul>
      </div>
    </section>
  )
}
