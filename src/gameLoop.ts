"use strict";

import { enemyLoop } from "./enemyLoop";
import { infoPrint } from "./functions/infoPrint";
import { keyMove } from "./init/keyMove";
import { ctx, player, consts, enemy } from "./main";

const gameLoop = () => {
	//- 画面をクリア
	if (ctx) {
		ctx.clearRect(0, 0, consts.canvasWidth, consts.canvasHeight);
	}
	if (!consts.gameClear) {
		keyMove();

		// 敵キャラ全てのアップデートと描画を行う
		enemyLoop();
		player.update();
		player.draw();

		infoPrint();
	}
};

export { gameLoop };
