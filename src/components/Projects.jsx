const projects = [
	{
		name: 'E-Commerce Book store',
		category: 'Brand Website',
		description: 'A clean portfolio experience focused on storytelling, strong typography, and conversion-driven layout.',
		url:'https://kkhea933-png.github.io/Khann_Khea88/',
		style: 'studio',
		image: 'https://i.pinimg.com/736x/ba/af/fa/baaffae3e5b1f74a1d3f5e20c92c120c.jpg',
		imageAlt: 'Creative team working together',
		label: 'Brand Launch',
		stack: ['React', 'UI/UX'],
	},
	{
		name: 'E-Commerce Cafe shop',
		category: 'Product Design',
		description: 'High-converting landing page with product highlights, trust signals, and mobile-first responsiveness.',
		url: 'https://sonbopharatanak-rgb.github.io/Cofee_shop/',
		style: 'invoice',
		image: 'https://i.pinimg.com/1200x/ba/2c/0c/ba2c0c97a0d8617868cbfe0c10150b4c.jpg',
		imageAlt: 'Online shopping and digital storefront',
		label: 'Shop Flow',
		stack: ['React', 'Tailwind'],
	},
	{
		name: 'Task Dashboard',
		category: 'Dashboard UI',
		description: 'Analytics-focused dashboard with clear data visualizations, filters, and smooth user interactions.',
		style: 'fieldnotes',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
		imageAlt: 'Analytics dashboard on laptop screen',
		label: 'Productivity',
		stack: ['React', 'Charts'],
	},
]

function ProjectPreview({ project }) {
	return (
		<div className="relative flex h-36 overflow-hidden p-3 sm:h-32">
			<img className="absolute inset-0 size-full object-cover" src={project.image} alt={project.imageAlt} loading="lazy" />
			<div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/35 to-transparent" />
			<div className="relative z-10 flex w-[60%] flex-col items-start gap-2 text-white">
				<span className="text-[9px] font-semibold uppercase tracking-wider opacity-80">{project.label}</span>
				<strong className="text-lg leading-tight">{project.style === 'invoice' ? 'SHOP' : project.style === 'studio' ? 'BUILD' : 'TRACK'}</strong>
				<div className="flex flex-wrap gap-1">
					{project.stack.map((item) => (
						<span className="rounded-sm bg-white/20 px-1.5 py-0.5 text-[7px] font-medium" key={item}>{item}</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default function Projects() {
	return (
		<section className="w-full rounded-[28px] border border-(--border) bg-(--panel) px-5 py-8 text-(--text) shadow-lg sm:px-8 sm:py-10" id="projects" aria-labelledby="projects-title">
			<div className="mx-auto max-w-5xl">
				<header className="flex items-end justify-between gap-4">
					<div>
						<h2 className="text-2xl font-bold tracking-tight sm:text-3xl" id="projects-title">My Projects</h2>
						<p className="mt-1 text-sm text-(--text-soft)">Selected work that highlights my design and development process</p>
					</div>
					<a className="shrink-0 text-xs font-semibold text-(--text-soft) transition hover:text-(--text)" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
				</header>

				<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<article className="overflow-hidden rounded-lg border border-(--border) bg-(--panel) shadow-sm transition hover:-translate-y-1 hover:shadow-md" key={project.name}>
							<ProjectPreview project={project} />
							<div className="p-4">
								<p className="text-[10px] font-medium text-(--text-soft)">{project.category}</p>
								<h3 className="mt-1 text-base font-bold text-(--text)">{project.name}</h3>
								<p className="mt-2 min-h-10 text-xs leading-relaxed text-(--text-soft)">{project.description}</p>
								<a className="mt-3 flex items-center justify-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700" href={project.url ?? '#contact'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noreferrer' : undefined}>
									<span aria-hidden="true" className="text-white">View Details↗</span>
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
			<style>{`
				@media (prefers-reduced-motion: reduce) {
					#projects * { scroll-behavior: auto !important; transition-duration: .01ms !important; }
				}
			`}</style>
		</section>
	)
}
