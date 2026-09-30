import { useEffect, useState } from 'react'

const links = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

function SocialIcon({ name }) {
	if (name === 'GitHub') {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4">
				<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.91 2.12 3.4 1.5.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3 0 4.3-2.62 5.23-5.11 5.5.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
			</svg>
		)
	}

	if (name === 'LinkedIn') {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4">
				<path d="M5.2 3.4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.4h-3.7v-5.7c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1v5.8H9.3V9Z" />
			</svg>
		)
	}

	return null
}

function ThemeIcon({ isDark }) {
	if (isDark) {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
			</svg>
		)
	}

	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
	}, [isDark])

	return (
		<header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
			<div className="mx-auto flex min-h-12 w-full max-w-5xl items-center justify-between gap-3 px-3">
				<a href="#home" className="flex shrink-0 items-center gap-2 text-[15px] font-bold text-slate-900" aria-label="Portfolio home">
					<span aria-hidden="true" className="text-[17px] text-black font-semibold tracking-[-.08em]">〈/〉</span>
					<span className="text-black">KHANN KHEA</span>
				</a>

				<nav className="hidden items-center gap-5 text-[13px] font-medium text-slate-700 md:flex" aria-label="Main navigation">
					{links.map((link) => (
						<a className="transition-colors hover:text-sky-800" href={link.href} key={link.label}>{link.label}</a>
					))}
				</nav>

				<div className="hidden shrink-0 items-center gap-3 text-slate-600 sm:flex">
					<a href="https://github.com/khannkhea" aria-label="GitHub" className="transition-colors hover:text-sky-800"><SocialIcon name="GitHub" /></a>
					<a href="https://www.linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-sky-800"><SocialIcon name="LinkedIn" /></a>
					<button
						type="button"
						aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
						onClick={() => setIsDark((value) => !value)}
						className="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200"
					>
						<ThemeIcon isDark={isDark} />
					</button>
				</div>

				<button
					aria-expanded={menuOpen}
					aria-controls="portfolio-mobile-menu"
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					className="grid size-9 place-items-center rounded-md text-slate-700 transition hover:bg-white/70 md:hidden"
					onClick={() => setMenuOpen((open) => !open)}
					type="button"
				>
					<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5">
						{menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
					</svg>
				</button>
			</div>

			{menuOpen && (
				<nav className="absolute inset-x-0 top-full z-30 mt-1 grid gap-1 rounded-lg border border-slate-200 bg-white p-2 text-sm font-medium text-slate-700 shadow-lg md:hidden" id="portfolio-mobile-menu" aria-label="Mobile navigation">
					{links.map((link) => (
						<a className="rounded px-3 py-2 transition-colors hover:bg-slate-100" href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</a>
					))}
					<div className="mt-1 flex items-center justify-between gap-4 border-t border-slate-100 px-3 pt-3 text-slate-600">
						<div className="flex gap-4">
							<a href="https://github.com/khannkhea" aria-label="GitHub"><SocialIcon name="GitHub" /></a>
							<a href="https://www.linkedin.com" aria-label="LinkedIn"><SocialIcon name="LinkedIn" /></a>
						</div>
						<button
							type="button"
							aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
							onClick={() => setIsDark((value) => !value)}
							className="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200"
						>
							<ThemeIcon isDark={isDark} />
						</button>
					</div>
				</nav>
			)}
		</header>
	)
}
