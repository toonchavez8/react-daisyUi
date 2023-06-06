export default function Header() {
	return (
		<header className="hero bg-base-200 rounded-lg max-w-4xl">
			<div className="hero-content text-center">
				<div className="max-w-md prose">
					<h1 className="text-4xl primary font-bold text-primary">
						⚛ Usando React con DaisyUI 🌼
					</h1>
					<p className="py-6">
						Daisy UI es un framework de componentes de interfaz de usuario
						usando tailwind css en el fondo, pero con clases de utilidad, como
						Bootstrap, Bulma, etc.
					</p>
					<div className="flex gap-2 justify-center ">
						<button className="badge badge-primary">#react</button>
						<button className="badge badge-secondary">#DaisyUi</button>
					</div>
				</div>
			</div>
		</header>
	);
}
