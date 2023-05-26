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


	useEffect(() => {// eslint-disable-next-line
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

				strokeWidth: 1,

				duration: anime.random(OPTIONS["short-duration"], OPTIONS["long-duration"]),
				easing: OPTIONS["easing"],
				autoplay: OPTIONS["autoplay"]
			});

			if (rNum > 0.7) {
				anime({
					targets: pathEl,
					strokeWidth: [1, 3],

					duration: 5000,
					delay: anime.random(4000, 20000),
					easing: "easeOutBack",
					loop: true,
					autoplay: true,
				});
			}
		}
		}// eslint-disable-next-line
	},[])

	return (
		<div>
			{svgGrid}
		</div>
	)
}
export { TronGrid }