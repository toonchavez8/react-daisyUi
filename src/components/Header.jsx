export default function Header() {
	return (
		<header className="hero bg-base-200 rounded-lg">
			<div className="hero-content text-center">
				<div className="max-w-md prose">
					<h1 className="text-4xl primary font-bold text-secondary">
						⚛ Reading React Docs with Daisy Ui 🌼
					</h1>
					<p className="py-6">
						React is a JavaScript library for building user interfaces. Daisy UI
						is a CSS framework that provides you with a set of classes to use in
						your HTML to make your design responsive.
					</p>
					<div className="flex gap-2 justify-center ">
						<button className="badge badge-primary">#react</button>
						<button className="badge badge-secondary">#DaisyUi</button>
						<button className="badge badge-accent">accent</button>
					</div>
				</div>
			</div>
		</header>
	);
}
