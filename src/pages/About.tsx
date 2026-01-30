export default function About() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-slate-200 p-8 md:p-12 font-sans">
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Hello, I'm a WEB Developer
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            I'm a 3rd-year Computer Science student passionate about building fluid and aesthetic web applications. 
                            Currently focused on Full-stack development and writing clean, maintainable code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">My Journey</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                My journey began with game development, which led me to fall in love with Web Technologies. 
                                I am currently studying at Thammasat University, focusing primarily on the React ecosystem.
                            </p>
                        </div>
                        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "TypeScript",
                                    "Tailwind",
                                    "Node.js",
                                    "Prisma",
                                    "PostgreSQL",
                                    "Git",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800">
                            <div className="text-3xl font-bold text-white">Year 3</div>
                            <div className="text-sm text-slate-400">Computer Science</div>
                        </div>
                        <div className="md:col-span-1 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800/80 transition-colors">
                            <h4 className="font-bold text-white">Interests</h4>
                            <ul className="text-sm text-slate-400 mt-2 space-y-1">
                                <li>• Coding</li>
                                <li>• Design</li>
                                <li>• Coffee</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600/20 transition-colors cursor-pointer group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-300 group-hover:text-indigo-200">
                                        Let's Connect
                                    </h3>
                                    <p className="text-sm text-indigo-400/80">
                                        Open to internship opportunities and new projects.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a href="https://github.com/siravit-thawornsap" target="_blank" className="col-span-4">
                            <div className="flex items-center justify-center p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600/20 transition-colors cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-300 group-hover:text-indigo-200">
                                        GITHUB
                                    </h3>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}