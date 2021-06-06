"use strict";

import { Character } from "../class/Character";
import { consts, ctx } from "../main";

const drawObject = (object: Character, color: string) => {
	if (ctx) {
		ctx.beginPath();
		ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
};

export { drawObject };
