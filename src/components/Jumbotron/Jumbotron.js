//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";


const Jumbotron = () => (
	<header className = "header">
		<h1>"Winnie the Pooh" Memory Game</h1>
		<h2>Click on any character's image to earn a point; but don't click on the same character more than once! Click all 12 pics only once, and you win!</h2>
	</header>
);


export default Jumbotron;
