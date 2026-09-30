import heroImage from '../assets/photo.jpg'

const stats = [
	{ label: 'Experience', value: '2+ Years' },
	{ label: 'Projects', value: '12+' },
	{ label: 'Clients', value: '5+' },
]

export default function Hero() {
	return (
		<section className="relative isolate w-full overflow-hidden rounded-[28px] border border-(--border) bg-(--panel) px-5 py-7 text-(--text) shadow-lg" id="home">
			<div className="mx-auto grid max-w-6xl items-center gap-3 lg:grid-cols-[.9fr_1.1fr]">
				<div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
					<p className="text-xs font-semibold uppercase tracking-[.14em] text-(--text-soft)">Available for new projects</p>
					<h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
						Hello, I’m <span className="text-(--text-soft)">Khann Khea</span>
					</h1>
					<p className="mt-2 text-xl font-bold text-(--text-soft) sm:text-2xl">Frontend Developer & UI Designer</p>
					<p className="mx-auto mt-4 max-w-md text-sm leading-6 text-(--text-soft) lg:mx-0">
						I build modern, responsive, and user-friendly web experiences with React, JavaScript, and Tailwind CSS.
					</p>
					<div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
						<a className="rounded-md bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700" href="#projects">
							<span className="text-white">View Projects</span>
						</a>
						<a className="rounded-md border border-(--border) bg-(--panel) px-4 py-2.5 text-sm font-semibold text-(--text) transition hover:bg-(--panel-alt)" href="#contact">Contact Me</a>
					</div>
				</div>

				<div className="relative order-1 flex min-h-56 items-center justify-center lg:order-2 lg:min-h-96">
					<img className="max-h-80 w-full max-w-xl object-contain sm:max-h-96" src={heroImage} alt="Illustration of Khann Khea, a frontend developer" />
					<aside className="mt-2 grid w-full max-w-md grid-cols-3 gap-2 rounded-lg border border-(--border) bg-white/90 p-3 text-left shadow-sm sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:w-auto sm:min-w-52 sm:-translate-y-1/2 sm:grid-cols-1 sm:gap-1 sm:p-4 lg:-right-2">
						{stats.map((stat) => (
							<div className="flex flex-col justify-between gap-1 border-r border-(--border) pr-2 last:border-0 last:pr-0 sm:flex-row sm:items-center sm:border-0 sm:py-1 sm:pr-0" key={stat.label}>
								<span className="text-[10px] text-(--text-soft) sm:text-xs">{stat.label}</span>
								<strong className="text-xs text-(--text) sm:text-sm">{stat.value}</strong>
							</div>
						))}
						<div className="col-span-3 mt-1 flex justify-between gap-2 border-t border-(--border) pt-2 text-[9px] sm:col-span-1 sm:text-[10px]">
							<span className="text-(--text-soft)">Availability</span>
							<strong className="text-emerald-600">Available for Work</strong>
						</div>
					</aside>
				</div>
			</div>
		</section>
	)
}
