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

		"short-duration": 5000,
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

			anime({
				targets: pathEl,
				strokeDashoffset: [offset, 0],
				duration: anime.random(OPTIONS["short-duration"], OPTIONS["long-duration"]),
				easing: OPTIONS["easing"],
				autoplay: OPTIONS["autoplay"]
			});
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