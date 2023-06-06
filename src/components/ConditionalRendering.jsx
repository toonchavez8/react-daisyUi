import { useState, useRef } from "react";
import StatsBox from "./atoms/StatsBox.jsx";
import ReactCodeBox from "./atoms/ReactCodeBox/ReactCodeBox.jsx";

export default function ConditionalRendering() {
	const [isCollapse, setIsCollapse] = useState(false);
	const [showCode, setShowCode] = useState(false);

	const handleCollapse = () => {
		setIsCollapse(!isCollapse);
	};

	const sectionRef = useRef(null);

	const code = `	<button
	className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:px-6 lg:py-4 "
	onClick={() => setShowCode(!showCode)}
	onMouseDown={(e) => e.preventDefault()}
>
	{showCode ? "Ocultar Stats" : "Mostrar Stats"}
</button>
{showCode && <StatsBox />}`;

	return (
		<section
			ref={sectionRef}
			tabIndex={0}
			className={`collapse collapse-arrow bg-base-200 w-full max-w-4xl rounded-lg prose `}
			onClick={() => handleCollapse()}
		>
			<h2
				className={`collapse-title text-xl font-medium mb-0 ${
					isCollapse ? "text-primary" : ""
				}`}
			>
				ConditionalRendering
			</h2>
			<div className="collapse-content">
				<p className="">
					En React, podemos utilizar técnicas de JavaScript estándar para
					escribir condiciones. Podemos usar una declaración if-else para
					incluir JSX de forma condicional o el operador condicional ? para
					lograr un código más compacto. También podemos utilizar la sintaxis &&
					cuando no necesites una rama else. Estas opciones te permiten decidir
					qué contenido JSX mostrar en función de una condición, ya sea para
					componentes o atributos.
				</p>

				<div className="flex flex-col gap-4 justify-center my-4 max-w-4xl w-full">
					<button
						className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:px-6 lg:py-4 "
						onClick={() => setShowCode(!showCode)}
						// prevent default behavior
						onMouseDown={(e) => e.preventDefault()}
					>
						{showCode ? "Ocultar Stats" : "Mostrar Stats"}
					</button>
					{showCode && <StatsBox />}

					<ReactCodeBox codeSnippet={code} />
				</div>
			</div>
		</section>
	);
}
