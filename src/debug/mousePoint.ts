"use strict";

import { point } from "../main";

const ballPoint = (canvas: HTMLCanvasElement) => {
	canvas.addEventListener("mousemove", (e) => {
		if (point) {
			point.innerHTML = `X : ${e.clientX} , Y : ${e.clientY}`;
		}
	});
};

export { ballPoint as mousePoint };
