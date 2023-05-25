




const CrazyLines2 = (props:any) => {
	const { svg } = props;
	let pathEls:any
	useEffect(() => {
		pathEls = document.querySelector("#" + svg.props.name)?.childNodes[0]?.childNodes[0]?.childNodes
	}, [svg])

	useEffect(() => {
		if (pathEls) {
		for (var i = 0; i < pathEls.length; i++) {
			var pathEl:any = pathEls[i];
			var offset = anime.setDashoffset(pathEl);
			pathEl.setAttribute("stroke", "#7DFDFE")
			pathEl.setAttribute('stroke-dashoffset', offset);
			anime({
				targets: pathEl,
				strokeDashoffset: [offset, 0],
				duration: anime.random(5000, 9000),
				easing: 'easeInOutSine',
				autoplay: true
			});
		}
		}
	},[])

	return (
		<div className="absolute  bottom-0 right-0" >
			{svg}
		</div>
	)
}
export { Box, FlyingBox, LineDrawing, CrazyLines, CrazyLines2, TextureTest };