import { PropTypes } from "prop-types";

// prop validation
UserBento.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default function UserBento(
	{ userName } // Destructuring
) {
	const usernameSlice = userName.slice(0, 1).toUpperCase();

	// create a array of saludos and use the index to get the saludo

	const saludos = ["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "Aloha"];

	const randomSaludo = saludos[Math.floor(Math.random() * saludos.length)];

	return (
		<section className="bg-base-200 rounded-lg max-w-4xl flex flex-row-reverse justify-between px-4 py-4 items-center w-full">
			<h2 className="no-count text-2xl font-bold mb-2 capitalize flex-1 w-full px-2">
				{randomSaludo}{" "}
				<span className="text-secondary capitalize">{userName}! </span>
			</h2>

			<div className="avatar placeholder">
				<div className="bg-neutral-focus text-neutral-content rounded-full w-12 ">
					<span className="text-3xl">{usernameSlice}</span>
				</div>
			</div>

			<div className="flex flex-row gap-4 order-first  ">
				<button className="btn btn-outline btn-primary  btn-xs sm:btn-sm md:btn-md lg:px-6 lg:py-4 ">
					Follow
				</button>
				<button className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:px-6 lg:py-4 ">
					Message
				</button>
			</div>
		</section>
	);
}
