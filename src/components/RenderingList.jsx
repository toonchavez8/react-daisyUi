import { useState, useEffect } from "react";
import ReactCodeBox from "./atoms/ReactCodeBox/ReactCodeBox";

export default function RenderingList() {
	const [viewList, setViewList] = useState(false);
	const [foodList, setFoodList] = useState([]);

	useEffect(() => {
		const savedList = sessionStorage.getItem("foodList");
		if (savedList) {
			setFoodList(JSON.parse(savedList));
		}
	}, []);

	const codeSnippet = `Code in progress`;

	const fileName = "RenderingList.jsx";

	const [newItem, setNewItem] = useState("");

	const handleInputChange = (event) => {
		setNewItem(event.target.value);
	};

	const handleAddItem = () => {
		if (newItem.trim() !== "") {
			const newItemObject = {
				name: newItem,
				id: Date.now(),
				comprado: false,
			};
			const updatedList = [...foodList, newItemObject];
			setFoodList(updatedList);
			setNewItem("");
			sessionStorage.setItem("foodList", JSON.stringify(updatedList));
		}
	};

	const handleInputKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault(); // Prevent form submission
			handleAddItem();
		}
	};
	const handleToggle = (id) => {
		const newList = foodList.map((item) => {
			if (item.id === id) {
				return { ...item, comprado: !item.comprado };
			}
			return item;
		});
		setFoodList(newList);
		sessionStorage.setItem("foodList", JSON.stringify(newList));
	};

	const foodItems = foodList.map((item) => (
		<li
			key={item.id}
			className={`list-none cursor-pointer flex flex-grow gap-4  items-start capitalize text-lg w-full border-b-2 pb-6 border-primary border-opacity-20${
				item.comprado ? "line-through" : ""
			}`}
		>
			<input
				type="checkbox"
				checked={item.comprado}
				className="checkbox checkbox-success"
				onClick={() => handleToggle(item.id)}
			/>
			<span className={`flex-1 ${item.comprado ? "line-through" : ""}`}>
				{item.name}
			</span>

			<button
				className="btn btn-circle btn-sm btn-outline hover:bg-primary hover:bg-opacity-100 hover:text-accent hover:border-accent justify-self-end self-end"
				onClick={() => {
					const newList = foodList.filter((food) => food.id !== item.id);
					setFoodList(newList);
					sessionStorage.setItem("foodList", JSON.stringify(newList));
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</li>
	));

	const listaCompras = (
		<div className="flex w-full flex-col items-center gap-2 bg-base-100 rounded-md px-8">
			<h3 className="text-lg font-medium mb-10  mt-5">Lista de compras</h3>
			<div className="flex w-full">
				<input
					type="text"
					placeholder="Que vamos a comprar?"
					className="input input-bordered input-accent w-full"
					value={newItem}
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
				/>
				<button className="btn btn-primary ml-2" onClick={handleAddItem}>
					Agregar
				</button>
			</div>
			<ul className="list-none form-control w-full mb-10">{foodItems}</ul>
		</div>
	);

	return (
		<section
			tabIndex={0}
			className={`collapse collapse-arrow bg-base-200 w-full max-w-4xl rounded-lg prose `}
		>
			<input type="checkbox" className="peer m-0 p-0" />
			<h2 className="collapse-title text-xl font-medium mb-0 mt-0">
				RenderingList
			</h2>
			<div className="collapse-content px-6 sm:px-10 md:px-16  ">
				<p className="">
					Para renderiar dentro de react podemos usar JavaScript features como{" "}
					<kbd className="kbd kbd-sm">for</kbd> y{" "}
					<kbd className="kbd kbd-sm">while</kbd> loops,{" "}
					<kbd className="kbd kbd-sm">if</kbd> statements, operadores lógicos
					como <kbd className="kbd kbd-sm">||</kbd> y{" "}
					<kbd className="kbd kbd-sm">&&</kbd>, y el operador condicional{" "}
					<kbd className="kbd kbd-sm">?</kbd>. Estos pueden ser usados para
					crear elementos de React dinámicamente.
				</p>

				<p>
					En el siguiente ejemplo, vamos a crear una lista de comidas usando
					<kbd className="kbd kbd-sm">map()</kbd>. El método{" "}
					<kbd className="kbd kbd-sm">map()</kbd> toma una función y la aplica a
					cada elemento de la lista, retornando una nueva lista con los
					resultados.
				</p>

				<p>
					En este caso vamos a crear una lista de super mercado, donde cada item
					de la lista es un objeto con 3 propiedades:{" "}
					<kbd className="kbd kbd-sm">name</kbd> y{" "}
					<kbd className="kbd kbd-sm">id</kbd> y{" "}
					<kbd className="kbd kbd-sm">comprado</kbd>.
				</p>

				<button
					className="btn btn-primary w-full mt-4 mb-8"
					onClick={() => setViewList(!viewList)}
				>
					{viewList ? "Ocultar lista" : "Ver lista"}
				</button>

				{viewList && listaCompras}

				<div className="flex w-full justify-end">
					<ReactCodeBox codeSnippet={codeSnippet} fileName={fileName} />
				</div>
			</div>
		</section>
	);
}
