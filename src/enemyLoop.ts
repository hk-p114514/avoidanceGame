"use strict";

import { checkHit } from "./functions/checkHit";
import { gameClear } from "./functions/gameClear";
import { makeEnemy } from "./functions/makeEnemy";
import { consts, enemy } from "./main";

const enemyLoop = () => {
	for (let i = enemy.length - 1; i >= 0; i--) {
		enemy[i].update(); // EnemyクラスからenemyMove?()を呼び出す
		if (checkHit(enemy[i])) {
			// 敵が当たったら、その敵を除外する
			enemy.splice(i, 1);
		}
	}

	for (let i = 0; i < enemy.length; i++) {
		enemy[i].draw(); // CharacterクラスからdrawObject()を呼び出す
	}

	if (enemy.length <= 0 && consts.stage < consts.maxStage) {
		consts.maxEnemyCount += consts.maxEnemyCount / 2;
		consts.stage++;
		makeEnemy(consts.maxEnemyCount);
	} else if (consts.stage >= consts.maxStage) {
		consts.gameClear = true;
		gameClear();
	}
};

export { enemyLoop };
