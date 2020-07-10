import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else setShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<a href='https://netflix.com'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
					alt='netflix logo'
					className='nav__logo'
				/>
			</a>
			<a href='https://netflix.com/in/login'>
				<img
					src='https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg'
					alt='netflix profile'
					className='nav__profile'
				/>
			</a>
		</div>
	);
};

export default Nav;
