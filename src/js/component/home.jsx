import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, setToDos] = useState([]);
	return (
		<div className="container">
			<h1>My Task List</h1>
			<ul>
				<li><input type="text" placeholder="Type your task..."
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setToDos(toDos.concat(inputValue));
							setInputValue("");
						}
					}}
				/> </li>

				<div>

					{toDos.map((item, index) => (

						<li>{item} <i className="fa-solid fa-skull" onClick={() => setToDos(
							toDos.filter(
								(t, currentIndex) => index != currentIndex))} ></i> </li>

					))}
				</div>

			</ul>
			<div>{toDos.length} task</div>
		</div>
	);
};

export default Home;
