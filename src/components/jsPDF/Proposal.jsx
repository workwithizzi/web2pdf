import React, { useEffect, useState } from "react";

import "../../styles/proposal.css";
import logo from "../../images/izzi-logo@2x.png";

// Convert Image to the base64
function toDataURL(src, callback, outputFormat) {

	const img = new Image();
	img.crossOrigin = "Anonymous";
	img.onload = function() {
		const canvas = document.createElement("CANVAS");
		const ctx = canvas.getContext("2d");
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
		const dataURL = canvas.toDataURL(outputFormat);
		callback(dataURL);
	};
	img.src = src;
	if (img.complete || img.complete === undefined) {
		img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		img.src = src;
	}
}

function Proposal({ title, date }) {

	const [logoBase64, setLogoBase64] = useState("");

	useEffect(() => {
		toDataURL(
			logo,
			function(dataUrl) {
				setLogoBase64(dataUrl);
			}
		);
	}, []);

	return (
		<div className="proposal-body">
			<div>
				<img style={{ width: "54px", height: "54px" }} className="logo" src={logoBase64} alt="IZZI Logo" />
				<h1>{title}</h1>
				<p className="date">Sent <span>{date}</span></p>
			</div>
			<hr />
			<div className="from-to">
				<div>
					<p>FROM</p>
					<p>Izzi Software Laboratories</p>
					<p>info@workwithizzi.com</p>
				</div>
				<div>
					<p>TO</p>
					<p>Trawick Gardens &amp; Landscaping</p>
					<p>lindsey@trawickgardens.com</p>
					<p>4815 Hwy 51</p>
					<p>New Brockton, Alabama, 36351</p>
					<p>United States</p>
				</div>
			</div>
			<hr />
			<div className="intro">
				<p>Hi Lindsey,
					<br />
					It was great speaking with you about the needs your business has for a new website. As hard as you have worked to showcase your professional image to the local community, we want to work hard and build a custom website to match.
					<br />
					I've put together some information about our process, recommendations, pricing and timeline for the project so that you would understand how we work and be able to make the best decision for your business! If you have any questions while you are going through it, you can let us know by commenting right here in the proposal. You can also email or call us too if you prefer!
				</p>
			</div>
			<hr />
			<div className="process">
				<h2>Our Process</h2>

				<p>Our website design &amp; development process is a bit different than most as we value good communication and want make sure you stay "in the loop" through the whole experience.</p>
				<br />
				<h3>Discovery:</h3>

				<p>We kick off every project with a discovery meeting. The goal for this meeting is to work out the finer details of the project together and make sure nothing important is overlooked. Discovery meetings act as a starting point for the design and allow us to better prepare for any potential obstacles or delays that could come up during development.</p>

				<h3>Design:</h3>
				<p>We try to make our design process as collaborative as possible. The goal here is that you are never surprised or unsure about where things are at with your website! We've found that clients who are involved in the design process tend to be much happier with the final-result and, we don't end up wasting time designing something that didn't work for them. Call it a win-win! That said, we do budget for a few revisions just in case they are needed.</p>

				<h3>Development:</h3>
				<p>Once everyone is happy with the design and ready to move forward with it, we start development. A website will not look exactly like the designs on every device, computer, or browser, and that's ok! We develop our sites so that they are optimized for the device they are being used on. This means they work great on phones, computers, and even devices that don't have screens (like screen-readers for people who are visually impaired). This also means you're going to have the best search engine results you can get.</p>

				<p>For what you are needing, we recommend a static website. It's called "static" because it's not really meant to be updated that often since all of the content is manually coded into it by a developer. This can be seen as a downside if you want to be able to login and update your content frequently on your own. But since you are not needing that, you get to benefit from a much faster and more-secure website than normal. It also means that you can save some money on development costs because we don't have to integrate it into a content management system. And when you do want to make changes, all you have to do it shoot us a quick email!</p>

				<h3>Launch &amp; Review:</h3>
				<p>Once development is finished: We'll go through your site one more time with you to make any final changes to your content to make sure it's ready to share with the world.</p>

				<p>Occasionally, a site will need some minor tweaks that are only noticeable after it's been "out in the wild" for a little while. Our goal is to build websites that provide long-term value so we'll schedule a review session with you after your site has launched to offer any additional support and make any minor adjustments that are needed.</p>

				<h3>Pricing and Timeline</h3>
				<p>Price: $5200</p>
				<p>Timeline:</p>
				<ul>

					<li>Design, develop, and launch: 4-6 Weeks</li>
					<li>Review Session: Usually about 4 Weeks after launch</li>
				</ul>

				<h3>Next Steps</h3>
				<p>Thank you for taking the time to review this proposal! If you have any questions, concerns, or even feel like we missed something in the proposal, please feel free to let us know so that we can help or make changes to the proposal. If you are ready to move forward with what we have proposed, then all you have to do is hit the "Accept" button at the top. Then we'll send over the "official" agreement and kick things off.</p>

				<p>Thanks!</p>
			</div>
		</div>
	);
}

export default Proposal;
