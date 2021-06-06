"use strict";

const getContext = (canvas: HTMLCanvasElement | null) => {
	let ctx = null;
	if (canvas) {
		ctx = canvas.getContext("2d");
	}

	return ctx;
};

export { getContext };
