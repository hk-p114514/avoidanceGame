"use strict";

import { consts, ctx } from "../main";

const printTextCanvas = (texts: string[], fontSize: number) => {
	let baseX: number = consts.canvasWidth - fontSize;
	let baseY: number = fontSize;

	if (ctx) {
		ctx.fillStyle = "#FF45cc";
		ctx.textAlign = "right";
		ctx.font = `bold ${fontSize}px verdana`;
		for (let i = 0; i < texts.length; i++) {
			ctx.fillText(texts[i], baseX, baseY);
		}
	}
};

export { printTextCanvas };
