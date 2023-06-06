import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Header from "./components/Header";
import RenderingList from "./components/RenderingList";
import UserBento from "./components/UserBento";

function App() {
	const userName = "Miguel";

	return (
		<>
			<UserBento userName={userName} />

			<main className="w-full  max-w-4xl flex  flex-col gap-4">
				<Header />
				<ConditionalRendering />
				<RenderingList />
			</main>
		</>
	);
}

export default App;
