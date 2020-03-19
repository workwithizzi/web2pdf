import React from "react";
import * as jsPDF from "jspdf";

function DownloadPDF(props) {
	const content = React.createRef();
	function getPDF() {
		const doc = new jsPDF("p", "px", "a4");

		const margin = {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		};

		//This will eliminate html which you don't want to convert into pdf.
		const specialElementHandlers = {
			".doNotInclude": function(element, renderer) {
				return true;
			},
		};

		/**
		 * fromHTML(HTML,x,y,settings, callback, margins)
		 * HTML: HTML formatted text that is to be rendered into PDF.
		 * x-axis (Number): coordinate starting from x (i.e. from left)
		 * y-axis (Number): coordinate starting from y (i.e. from top)
		 * settings (Object): Optional/ Additional variables .
		 */
		doc.fromHTML(
			content.current.innerHTML,
			0,
			0,
			{
				"width": 400,
				"elementHandlers": specialElementHandlers,
			},
			function() {
				doc.save("proposal.pdf");
			},
			margin
		);
	}

	return (
		<>
			<div id="content" ref={content}>
				{props.children}
			</div>
			<button onClick={getPDF}>Download PDF</button>
		</>
	);
}

export default DownloadPDF;
