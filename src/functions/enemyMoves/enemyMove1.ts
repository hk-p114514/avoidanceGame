"use strict";

import { Enemy } from "../../class/Enemy";
import { consts } from "../../main";
import { rand } from "../rand";

/********************************
 * enemyMove1()関数
 * - 敵キャラクターの動き（デフォルト）
 ********************************/
const enemyMove1 = (object: Enemy) => {
	/********************************/

	// 範囲チェック
	// 範囲外に出ていたら、ベクトルを逆向きにする
	if (!(object.x >= object.radius && object.x <= consts.canvasWidth)) {
		object.vectorX = -1 * object.vectorX;
	}
	if (object.y >= object.radius && object.y <= consts.canvasHeight) {
		object.vectorY = -1 * object.vectorY;
	}

	/********************************/
	const gapX = 1;
	const gapY = 5;
	object.x += object.vectorX + rand(-gapX, gapX);
	object.y += object.vectorY + rand(-gapY, gapY);
};

export { enemyMove1 };
