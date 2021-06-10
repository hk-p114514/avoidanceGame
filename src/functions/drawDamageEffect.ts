"use strict";

import { consts, ctx } from "../main";

const drawDamageEffect = (damageColor: string) => {
	if (ctx) {
		ctx.rect(0, 0, consts.canvasWidth, consts.canvasHeight);
		ctx.fillStyle = damageColor;
		ctx.fill();
	}
};

export { drawDamageEffect };
