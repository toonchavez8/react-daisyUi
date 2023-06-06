import "./App.css";
import Header from "./components/Header";
import UserBento from "./components/UserBento";

function App() {
	const userName = "miguel";
	return (
		<>
			<Header />

			<main className="container mx-auto px-4">
				<UserBento userName={userName} />
			</main>
		</>
	);
}

export default App;
