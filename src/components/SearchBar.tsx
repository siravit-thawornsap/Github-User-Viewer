import type { FormEvent } from "react"
import { useState } from "react"

interface Props {
  onSearch?: (username: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if(onSearch){
      onSearch(value)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="ระบุ GitHub username เช่น torvalds"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
      />
      <button
        type="submit"
        className="rounded-lg bg-cyan-400 text-slate-900 font-semibold px-4 py-2 hover:bg-cyan-300 active:scale-[0.98] transition"
      >
        ค้นหา
      </button>
    </form>
  )
}
