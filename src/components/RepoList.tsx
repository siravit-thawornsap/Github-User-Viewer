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
          <button command="show-modal" commandfor={`dialog-${r.id}`} class="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 mt-4">More Detail</button>
          <el-dialog>
            <dialog id={`dialog-${r.id}`} aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
              <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>
              <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                  <div  class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white">
                    <div className="flex items-center space-x-4">
                      <img src={r.owner.avatar_url} className="w-12 h-12 rounded-full" />
                      <div>
                        <a href={r.html_url} target="_blank" className="text-xl font-semibold">
                          {r.name}
                        </a>
                        <p className="text-gray-400">@{r.login}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-300">
                      {r.description || "No description provided."}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4 text-sm">
                      <span className="bg-gray-600 px-2 py-1 rounded-xl">⭐ {r.stargazers_count}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-xl">🍴 {r.forks_count}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-xl">💬 {r.open_issues_count}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-xl">{r.language}</span>
                    </div>

                    <p className="text-gray-400 mt-3 text-xs">
                      Created: {new Date(r.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-400 mt-3 text-xs">
                      Updated: {new Date(r.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor={`dialog-${r.id}`} class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Close</button>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </li>
      ))}
    </ul>
  )
}
