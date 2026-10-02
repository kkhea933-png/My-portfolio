import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skill from './components/Skill.jsx'

function HomePage() {
	return (
		<div className="min-h-screen space-y-5 bg-(--bg) p-4 text-(--text) sm:p-6">
			<Navbar />
			<Hero />
			<Skill />
			<Projects />
			<Contact />
		</div>
	)
}

function SkillsPage() {
	return (
		<div className="min-h-screen bg-(--bg) p-4 text-(--text) sm:p-6">
			<Navbar />
			<Skill />
		</div>
	)
}

function NotFoundPage() {
	return (
		<main className="grid min-h-screen place-items-center bg-(--bg) px-6 text-center text-(--text)">
			<div className="rounded-2xl border border-(--border) bg-(--panel) px-8 py-10 shadow-lg">
				<p className="text-sm font-semibold uppercase tracking-widest text-(--text-soft)">404</p>
				<h1 className="mt-2 text-3xl font-bold text-(--text)">Page not found</h1>
				<Link className="mt-5 inline-block rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700" to="/">Back to Home</Link>
			</div>
		</main>
	)
}

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/skills" element={<SkillsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</HashRouter>
	)
}

export default App