import contactPhoto from '../assets/photo.jpg'

export default function Contact() {
	return (
		<section className="w-full rounded-[28px] border border-(--border) bg-(--panel) px-5 py-10 text-(--text) shadow-lg sm:px-8 sm:py-12" id="contact" aria-labelledby="contact-title">
			<div className="mx-auto max-w-5xl">
				<header className="text-center">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl" id="contact-title">Let’s build something great</h2>
					<p className="mt-2 text-sm text-(--text-soft)">Available for freelance projects, collaborations, and product design work</p>
				</header>

				<div className="mt-7 grid items-center gap-6 sm:mt-9 md:grid-cols-2 md:gap-10">
					<form className="rounded-xl bg-(--panel-alt) p-5 sm:p-6" action="mailto:hello@khannkhea.dev" method="post" encType="text/plain">
						<h3 className="mb-5 text-base font-bold">Send a message</h3>
						<label className="sr-only" htmlFor="contact-name">Your Name</label>
						<input className="mb-3 w-full rounded-md border border-(--border) bg-(--panel) px-3 py-3 text-sm text-(--text) outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200" id="contact-name" name="name" placeholder="Your Name" autoComplete="name" required />
						<label className="sr-only" htmlFor="contact-email">Your Email</label>
						<input className="mb-3 w-full rounded-md border border-(--border) bg-(--panel) px-3 py-3 text-sm text-(--text) outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200" id="contact-email" name="email" type="email" placeholder="Your Email" autoComplete="email" required />
						<label className="sr-only" htmlFor="contact-message">Your Message</label>
						<textarea className="mb-4 min-h-28 w-full resize-y rounded-md border border-(--border) bg-(--panel) px-3 py-3 text-sm text-(--text) outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200" id="contact-message" name="message" placeholder="Your Message" required />
						<button className="w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700" type="submit">Send Message</button>
					</form>

					<div className="relative mx-auto flex min-h-64 w-full max-w-md items-end justify-center sm:min-h-80">
						<div aria-hidden="true" className="absolute bottom-1 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-[48%_45%_8%_40%] bg-slate-200" />
						<span className="absolute right-[12%] top-[7%] z-10 rounded-full bg-slate-700 px-4 py-2 text-2xl font-bold text-white shadow-sm sm:text-3xl">Hi!</span>
						<img className="relative z-1 max-h-80 w-full object-contain object-bottom" src={contactPhoto} alt="Portfolio owner greeting visitors" />
					</div>
				</div>
			</div>
		</section>
	)
}
