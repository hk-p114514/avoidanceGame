"use strict";

import { enemyLoop } from "./enemyLoop";
import { keyMove } from "./init/keyMove";
import { ctx, player, consts } from "./main";

const gameLoop = () => {
	keyMove();
	if (ctx) {
		ctx.clearRect(0, 0, consts.canvasWidth, consts.canvasHeight);
	}
	enemyLoop();
	player.update();
	player.draw();
};

export { gameLoop };
