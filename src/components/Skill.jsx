const skills = [
	{ name: 'React', description: 'Building interactive user interfaces', icon: 'react' },
	{ name: 'JavaScript', description: 'Modern front-end logic and interactivity', icon: 'javascript' },
	{ name: 'HTML & CSS', description: 'Semantic structure and polished styling', icon: 'html' },
	{ name: 'Tailwind CSS', description: 'Fast UI development with utility classes', icon: 'tailwind' },
	{ name: 'Git & GitHub', description: 'Version control and collaborative workflows', icon: 'github' },
	{ name: 'Figma', description: 'Design exploration and UI prototyping', icon: 'figma' },
]

function SkillIcon({ type }) {
	if (type === 'javascript') {
		return (
			<svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12">
				<rect x="6" y="4" width="36" height="40" rx="5" fill="#e8edf2" />
				<text x="24" y="32" textAnchor="middle" fill="#263444" fontSize="15" fontWeight="700">.JS</text>
			</svg>
		)
	}

	if (type === 'tailwind') {
		return (
			<svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="h-12 w-12 text-slate-500">
				<path d="M9 19c3.2-4.2 7.2-6.3 12-6.3 7.2 0 8.1 5.4 11.7 5.4 1.9 0 3.4-.9 5.3-2.7-3.2 4.2-7.2 6.3-12 6.3-7.2 0-8.1-5.4-11.7-5.4-1.9 0-3.4.9-5.3 2.7Zm-1 12c3.2-4.2 7.2-6.3 12-6.3 7.2 0 8.1 5.4 11.7 5.4 1.9 0 3.4-.9 5.3-2.7-3.2 4.2-7.2 6.3-12 6.3-7.2 0-8.1-5.4-11.7-5.4-1.9 0-3.4.9-5.3 2.7Z" fill="currentColor" />
			</svg>
		)
	}

	if (type === 'html') {
		return (
			<svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12">
				<rect x="7" y="5" width="34" height="38" rx="5" fill="#e2e8f0" />
				<path d="M16 16h16l-1 18-7 3-7-3-1-18Zm2.4 4 1.3 8.8h5.5l1.4-8.8" fill="#0f172a" />
			</svg>
		)
	}

	if (type === 'github') {
		return (
			<svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12">
				<circle cx="24" cy="24" r="18" fill="#1e293b" />
				<path d="M24 13.5c-6 0-10.8 4.9-10.8 11 0 4.9 3.2 9.1 7.6 10.5.6.1.8-.2.8-.6v-2.2c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1.7 2.1 2.9 1.7.1-.7.4-1.2.8-1.5-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.7 11.7 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.2 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6a11 11 0 0 0 7.7-10.5c0-6.1-4.8-11-10.8-11Z" fill="#f8fafc" />
			</svg>
		)
	}

	if (type === 'figma') {
		return (
			<svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12">
				<circle cx="24" cy="24" r="18" fill="#e5e7eb" />
				<path d="M19 11c-3.3 0-6 2.7-6 6s2.7 6 6 6h5v-6c0-3.3-2.7-6-5-6Zm0 12h5v6c0 3.3-2.7 6-5 6s-6-2.7-6-6 2.7-6 6-6Zm12-12c0 3.3-2.7 6-6 6h-5v-6c0-3.3 2.7-6 6-6s5 2.7 5 6Zm-5 12h5c3.3 0 6 2.7 6 6s-2.7 6-6 6-5-2.7-5-6v-6Z" fill="#0f172a" />
			</svg>
		)
	}

	return (
		<svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="h-12 w-12 text-slate-500">
			<ellipse cx="24" cy="24" rx="6" ry="19" stroke="currentColor" strokeWidth="2.5" />
			<ellipse cx="24" cy="24" rx="6" ry="19" stroke="currentColor" strokeWidth="2.5" transform="rotate(60 24 24)" />
			<ellipse cx="24" cy="24" rx="6" ry="19" stroke="currentColor" strokeWidth="2.5" transform="rotate(120 24 24)" />
			<circle cx="24" cy="24" r="3" fill="currentColor" />
		</svg>
	)
}

export default function Skill() {
	return (
		<section className="w-full rounded-[28px] border border-(--border) bg-(--panel) px-5 py-10 text-(--text) shadow-lg sm:px-8 sm:py-12" id="skills" aria-labelledby="skills-title">
			<div className="mx-auto max-w-5xl">
				<header className="text-center">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl" id="skills-title">My Skills</h2>
					<p className="mt-2 text-sm text-(--text-soft)">Tools and technologies I use to craft digital experiences</p>
				</header>

				<div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">
					{skills.map((skill) => (
						<article className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-(--border) bg-(--panel-alt) px-3 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-md sm:min-h-48 sm:px-4" key={skill.name}>
							<SkillIcon type={skill.icon} />
							<h3 className="mt-3 text-sm font-bold sm:text-base">{skill.name}</h3>
							<p className="mt-1.5 max-w-40 text-xs leading-relaxed text-(--text-soft)">{skill.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
