import anime from 'animejs'
import { useEffect } from "react"

import { svgGrid } from '../svgs';

const TronGrid = () => {
	const svg = svgGrid;
	let pathEls:any

	const OPTIONS = {
		"stroke-color" : "#7DFDFE",
		"stroke-width": "6",

		"easing": 'easeInOutSine',
		
		"autoplay": true,

		"short-duration": 4000,
		"long-duration": 9000,

	}


	useEffect(() => {
		pathEls = document.querySelector("#" + svg.props.name)?.childNodes[0]?.childNodes[0]?.childNodes
	}, [svg])

	useEffect(() => {
		if (pathEls) {
		for (var i = 0; i < pathEls.length; i++) {
			var pathEl:any = pathEls[i];
			var offset = anime.setDashoffset(pathEl);

			pathEl.setAttribute("stroke-width", OPTIONS["stroke-width"])
			pathEl.setAttribute("stroke", OPTIONS["stroke-color"])
			pathEl.setAttribute('stroke-dashoffset', offset);

			const rNum = Math.random()

			anime({
				targets: pathEl,
				strokeDashoffset: [offset, 2],

				strokeWidth: 6,

				duration: anime.random(OPTIONS["short-duration"], OPTIONS["long-duration"]),
				easing: OPTIONS["easing"],
				autoplay: OPTIONS["autoplay"]
			});

			if (rNum > 0.5) {
				anime({
					targets: pathEl,
					strokeWidth: 10,

					duration: anime.random(400, 800),
					delay: 9000,
					easing: "linear",
					loop: true,
					autoplay: true,
				});
			}
		}
		}
	},[])

	return (
		<div>
			{svgGrid}
		</div>
	)
}
export { TronGrid }