import React from "react";
import { Link } from "gatsby";


function Header() {
	return (
		<header style={{ display: "flex", justifyContent: "space-between" }}>
			<Link to="/">jsPDF</Link>
			<Link to="/web-api">Web API</Link>
			<Link to="/md-to-pdf">md-to-pdf</Link>
		</header>
	);
}

export default Header;
