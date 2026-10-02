import portrait from '../assets/photo.jpg'

const details = [
	{ number: '01', title: 'Thoughtful UI', text: 'Clear layouts and small details that make interfaces feel easy to use.' },
	{ number: '02', title: 'Responsive by default', text: 'Experiences shaped to work well on phones, laptops, and everything between.' },
	{ number: '03', title: 'Built to feel right', text: 'Modern frontend tools paired with care for performance and accessibility.' },
]

export default function About() {
	return (
		<section className="about-section relative isolate w-full overflow-hidden rounded-[28px] border border-(--border) bg-(--panel) px-5 py-8 text-(--text) shadow-lg sm:px-8 sm:py-12" id="about" aria-labelledby="about-title">
			<div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-12">
				<div className="about-portrait-wrap relative mx-auto w-full max-w-xs md:max-w-none">
					<div aria-hidden="true" className="absolute inset-x-5 bottom-0 top-5 rounded-2xl bg-amber-400/80" />
					<div className="relative flex h-72 items-end justify-center overflow-hidden rounded-2xl border border-(--border) bg-(--panel-alt) sm:h-80 md:h-100">
						<img className="about-portrait h-full w-full object-contain object-bottom" src={portrait} alt="Khann Khea, frontend developer and UI designer" loading="lazy" />
					</div>
					<div className="absolute -bottom-3 left-3 rounded-md border border-(--border) bg-(--panel) px-3 py-2 shadow-md sm:left-5">
						<p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-(--text-soft)">Frontend + UI Design</p>
					</div>
				</div>

				<div className="about-copy pt-3 md:pt-0">
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">A little about me</p>
					<h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" id="about-title">
						I turn thoughtful ideas into <span className="text-(--text-soft)">useful experiences.</span>
					</h2>
					<p className="mt-4 max-w-2xl text-sm leading-7 text-(--text-soft) sm:text-base">
						I’m Khann Khea, a frontend developer and UI designer who enjoys making the web feel clear, welcoming, and effortless to use. I work with React, JavaScript, and Tailwind CSS to bring designs to life across screen sizes.
					</p>
					<p className="mt-3 max-w-2xl text-sm leading-7 text-(--text-soft)">
						I care about the details users notice: a layout that makes sense, interactions that feel natural, and interfaces that stay polished on every device.
					</p>

					<div className="mt-7 divide-y divide-(--border) border-y border-(--border)">
						{details.map((detail) => (
							<div className="about-detail grid grid-cols-[2.5rem_1fr] gap-3 py-3 sm:grid-cols-[3rem_1fr] sm:gap-4" key={detail.number}>
								<span className="pt-0.5 text-xs font-semibold text-emerald-700">{detail.number}</span>
								<div>
									<h3 className="text-sm font-semibold">{detail.title}</h3>
									<p className="mt-1 text-xs leading-relaxed text-(--text-soft) sm:text-sm">{detail.text}</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
						<a className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2.5 text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600" href="#contact">
							Let’s talk <span aria-hidden="true">↗</span>
						</a>
						<a className="text-(--text-soft) transition hover:text-(--text)" href="#projects">See my projects</a>
					</div>
				</div>
			</div>
			<style>{`
				@keyframes about-enter {
					from { opacity: 0; transform: translateY(18px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.about-section .about-portrait-wrap,
				.about-section .about-copy {
					animation: about-enter 650ms cubic-bezier(.2,.7,.2,1) both;
				}
				.about-section .about-copy { animation-delay: 100ms; }
				.about-section .about-detail { animation: about-enter 500ms ease both; }
				.about-section .about-detail:nth-child(2) { animation-delay: 100ms; }
				.about-section .about-detail:nth-child(3) { animation-delay: 180ms; }
				@media (prefers-reduced-motion: reduce) {
					.about-section *, .about-section *::before, .about-section *::after {
						animation-duration: .01ms !important;
						animation-iteration-count: 1 !important;
						scroll-behavior: auto !important;
					}
				}
			`}</style>
		</section>
	)
}
