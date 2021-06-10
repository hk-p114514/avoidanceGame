"use strict";

import { enemyLoop } from "./enemyLoop";
import { printTextCanvas } from "./functions/printTextCanvas";
import { keyMove } from "./init/keyMove";
import { ctx, player, consts, enemy } from "./main";

const gameLoop = () => {
	keyMove();
	//- 画面をクリア
	if (ctx) {
		ctx.clearRect(0, 0, consts.canvasWidth, consts.canvasHeight);
	}
	enemyLoop();
	player.update();
	player.draw();

	const canvasMessages = [`enemies : ${enemy.length}`];
	printTextCanvas(canvasMessages, 20);
};

export { gameLoop };
