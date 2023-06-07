import { useState } from "react";
import StatsBox from "./atoms/StatsBox.jsx";
import ReactCodeBox from "./atoms/ReactCodeBox/ReactCodeBox.jsx";

export default function ConditionalRendering() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [showStats, setShowStats] = useState(false);

	const handleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	const code = `<button
	className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:px-6 lg:py-4 "
	onClick={() => setShowStats(!showStats)}
	onMouseDown={(e) => e.preventDefault()}>
	{showStats ? "Ocultar Stats" : "Mostrar Stats"}
</button>
{showStats && <StatsBox />}`;

	let fileName = `ConditionalRendering.jsx`;
	return (
		<section
			tabIndex={0}
			className={`collapse collapse-arrow bg-base-200 w-full max-w-4xl rounded-lg prose `}
			onClick={() => handleCollapse()}
		>
			<input type="checkbox" className="peer m-0 p-0" />
			<h2
				className={`collapse-title text-xl font-medium mb-0 mt-0 ${
					isCollapsed ? "text-primary" : ""
				}`}
			>
				ConditionalRendering
			</h2>
			<div className="collapse-content px-6 sm:px-10 md:px-16  ">
				<p className="">
					En React, podemos utilizar técnicas de JavaScript estándar para
					escribir condiciones. Podemos usar una declaración if-else para
					incluir JSX de forma condicional o el operador condicional
					<kbd className="kbd kbd-sm m-1 px-2">?</kbd> para lograr un código más
					compacto. También podemos utilizar la sintaxis
					<kbd className="kbd kbd-sm m-1 px-2">&&</kbd> cuando no necesites una
					rama else. Estas opciones te permiten decidir qué contenido JSX
					mostrar en función de una condición, ya sea para componentes o
					atributos.
				</p>

				<div className="flex flex-col gap-4 justify-center my-4 max-w-4xl w-full">
					<button
						className="btn btn-outline btn-primary btn-sm sm:btn-md  md:btn-md md:py-3 lg:px-6 lg:py-4 "
						onClick={() => setShowStats(!showStats)}
						// prevent default behavior
						onMouseDown={(e) => e.preventDefault()}
					>
						{showStats ? "Ocultar Stats" : "Mostrar Stats"}
					</button>
					{showStats && <StatsBox />}

					<ReactCodeBox codeSnippet={code} fileName={fileName} />

					<div className="flex flex-col gap-4 justify-center my-4 max-w-4xl w-full">
						<h3 className="text-lg font-medium">Ejemplo</h3>
						<p className="">
							En el siguiente ejemplo, declaramos una variable llamada
							<kbd className="kbd kbd-sm m-1 px-2">showStats</kbd> y luego,
							dependiendo de su valor, este bloque de código crea un botón que
							alterna la visibilidad de las estadísticas cuando se hace clic en
							él. Si las estadísticas están ocultas, el botón mostrará el texto
							&quot;Mostrar Stats&quot;, y si las estadísticas están visibles,
							el botón mostrará el texto &quot;Ocultar Stats&quot;.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
