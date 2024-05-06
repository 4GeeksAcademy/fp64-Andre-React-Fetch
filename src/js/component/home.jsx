import React, { useState } from "react";


const Home = () => {
	
	const [inputValue, setInputValue] = useState("");
	const [toDos, setToDos] = useState([]);
	fetch('https://redesigned-space-xylophone-wgwr6w455pjh5wg9-3000.app.github.dev/', {
		method: "PUT",
		body: JSON.stringify(inputValue),
		headers: {
		  "Content-Type": "application/json"
		}
	  })
	  .then(resp => {
		  console.log(resp.ok); // Will be true if the response is successful
		  console.log(resp.status); // The status code=200 or code=400 etc.
		  console.log(resp.text()); // Will try to return the exact result as a string
		  return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
	  })
	  .then(data => {
		  // Here is where your code should start after the fetch finishes
		  console.log(data); // This will print on the console the exact object received from the server
	  })
	  .catch(error => {
		  // Error handling
		  console.error(error);
	  });
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
