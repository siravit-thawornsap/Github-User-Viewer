import type { GitHubRepo } from "../services/github"

interface Props {
  repos: GitHubRepo[]
}

export default function RepoList({ repos }: Props) {
  return (
    <ul className="grid gap-4 mb-8">
      {repos.map((r) => (
        <li key={r.id} className="rounded-xl border-3 border-slate-800 bg-slate-900 p-4 hover:bg-slate-800/80 transition">
          <a href={r.html_url} target="_blank" rel="noreferrer" className="font-bold hover:underline">
            {r.name}
          </a>
          {r.description ? <p className="text-slate-400 mt-1">{r.description}</p> : <p className="text-slate-400 mt-1">No Description</p>}
          <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
            {r.language && (
              <span className="inline-block rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5">
                {r.language}
              </span>
            )}
            <span className="inline-block rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5">
              ★ {r.stargazers_count}
            </span>
            <span className="inline-block rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5">
              Updated {new Date(r.updated_at).toLocaleDateString()}
            </span>
            <span className="inline-block rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5">
              {r.visibility}
            </span>

          </div>
        </li>
      ))}
    </ul>
  )
}
