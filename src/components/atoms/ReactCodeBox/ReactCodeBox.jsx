import { useState } from "react";
import Editor from "react-simple-code-editor";
import { PropTypes } from "prop-types";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import "./vsc-dark.css";
import "./editor.css";

// prop validation
ReactCodeBox.propTypes = {
	codeSnippet: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired,
};

export default function ReactCodeBox({ codeSnippet, fileName }) {
	const [code, setCode] = useState(codeSnippet);

	console.log(fileName);

	const minimize = () => {
		const window = document.querySelector(".editor_wrap");

		// prevent default

		window.classList.toggle("hidden");
	};

	const close = () => {
		const window = document.querySelector(".App");
		window.classList.toggle("hidden");
	};

	const fullScreenToggle = () => {
		// on class .colapse remove position relative

		const window = document.querySelector(".window");
		window.classList.toggle("absolute");
		window.classList.toggle("inset-0");
	};

	return (
		<div className="App w-full">
			<div className="window ">
				<div className="title-bar">
					<div className="title-buttons flex flex-row">
						<button
							className="title-button"
							onMouseDown={(e) => e.preventDefault()}
							onClick={close}
						></button>
						<button
							className="title-button"
							onMouseDown={(e) => e.preventDefault()}
							onClick={minimize}
						></button>
						<button
							className="title-button"
							onMouseDown={(e) => e.preventDefault()}
							onClick={fullScreenToggle}
						></button>
						<p className="prose px-2">{fileName}</p>
					</div>
				</div>
				<div className="editor_wrap bg-base-100">
					<Editor
						value={code}
						onValueChange={(code) => setCode(code)}
						// high code jsx
						highlight={(code) => highlight(code, languages.js)}
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 12,
						}}
					/>
				</div>

				<div className="absolute inset-0 -z-10 bg-primary w-full h-full bg-repeat"></div>
			</div>
		</div>
	);
}
