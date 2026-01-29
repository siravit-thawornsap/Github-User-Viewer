import type { GitHubRepo } from "../services/github"
import { useEffect, useRef, useState } from "react"

interface Props {
  repos: GitHubRepo[]
}

export default function RepoList({ repos }: Props) {
  const [openRepoId, setOpenRepoId] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    if(openRepoId !== null && !ref.current.open) {
        ref.current.showModal();
    }
    // ถ้า openRepoId ไม่มีอยู่จะทำให้ selectedRepo ไม่มีทำให้เกิดการ unmount เองไม่ต้องสั่งปิด
  }, [openRepoId]);

  const selectedRepo = repos.find(r => r.id === openRepoId);

  return (
    <>
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
            <button
              onClick={() => setOpenRepoId(r.id)}
              className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white outline outline-1 outline-white/5 hover:bg-white/20 mt-4"
            >
              More Detail
            </button>
          </li>
        ))}
      </ul>

      {selectedRepo && (
        <dialog
          ref={ref}
          aria-labelledby={`dialog-title-${selectedRepo.id}`}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 max-h-none max-w-none bg-transparent w-2xl h-3xl min-h-xl min-w-2xl backdrop:bg-gray-900/50 open:flex open:items-center open:justify-center"
          onClose={() => setOpenRepoId(null)}
        >
          <div tabIndex={0} className="relative w-full max-w-lg overflow-hidden rounded-lg bg-gray-800 text-white shadow-xl outline outline-1 outline-white/10">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex items-center space-x-4">
                <img src={selectedRepo.owner.avatar_url} className="w-12 h-12 rounded-full" />
                <div>
                  <a href={selectedRepo.html_url} target="_blank" className="text-xl font-semibold hover:underline">
                    {selectedRepo.name}
                  </a>
                  <p className="text-gray-400">@{selectedRepo.owner.login}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{selectedRepo.description || "No description provided."}</p>

              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-gray-600 px-2 py-1 rounded-xl">Star : {selectedRepo.stargazers_count}</span>
                <span className="bg-gray-600 px-2 py-1 rounded-xl">Fork : {selectedRepo.forks_count}</span>
                <span className="bg-gray-600 px-2 py-1 rounded-xl">Issue : {selectedRepo.open_issues_count}</span>
                {selectedRepo.language && <span className="bg-gray-600 px-2 py-1 rounded-xl">{selectedRepo.language}</span>}
              </div>

              {/* Topics */}
              {selectedRepo.topics && selectedRepo.topics.length > 0 && (
                <div className="mt-3">
                  <p className="text-gray-400 text-xs mb-1">Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.topics.map((topic: string) => (
                      <span key={topic} className="bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                <div>
                  <p className="text-gray-500">Created</p>
                  <p className="text-gray-300">{new Date(selectedRepo.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Updated</p>
                  <p className="text-gray-300">{new Date(selectedRepo.updated_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Size</p>
                  <p className="text-gray-300">{(selectedRepo.size ? selectedRepo.size / 1024 : 0).toFixed(2)} MB</p>
                </div>
                <div>
                  <p className="text-gray-500">Default Branch</p>
                  <p className="text-gray-300">{selectedRepo.default_branch}</p>
                </div>
                {selectedRepo.license && (
                  <div>
                    <p className="text-gray-500">License</p>
                    <p className="text-gray-300">{selectedRepo.license.name}</p>
                  </div>
                )}
                {selectedRepo.homepage && (
                  <div className="col-span-2">
                    <p className="text-gray-500">Homepage</p>
                    <a href={selectedRepo.homepage} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline break-all">
                      {selectedRepo.homepage}
                    </a>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                {selectedRepo.has_wiki && <span className="bg-green-600/20 text-green-300 px-2 py-0.5 rounded">📖 Wiki</span>}
                {selectedRepo.has_projects && <span className="bg-green-600/20 text-green-300 px-2 py-0.5 rounded">📊 Projects</span>}
                {selectedRepo.has_pages && <span className="bg-green-600/20 text-green-300 px-2 py-0.5 rounded">📄 Pages</span>}
                {selectedRepo.fork && <span className="bg-purple-600/20 text-purple-300 px-2 py-0.5 rounded">🔱 Forked</span>}
                {selectedRepo.archived && <span className="bg-red-600/20 text-red-300 px-2 py-0.5 rounded">📦 Archived</span>}
              </div>

              <p className="text-gray-400 mt-3 text-xs">Created: {new Date(selectedRepo.created_at).toLocaleDateString()}</p>
              <p className="text-gray-400 mt-3 text-xs">Updated: {new Date(selectedRepo.updated_at).toLocaleDateString()}</p>
            </div>

            <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpenRepoId(null)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white outline outline-1 outline-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}