"use strict";

import { Enemy } from "../class/Enemy";
import { consts, enemy } from "../main";
import { rand } from "./rand";

const makeEnemy = (enemyCount: number) => {
	for (let i = 0; i < enemyCount; i++) {
		enemy.push(
			new Enemy(
				rand(0, consts.canvasWidth),
				rand(0, consts.canvasHeight),
				rand(1, 10),
				rand(1, 10),
				consts.enemyRadius,
			),
		);
	}
};

export { makeEnemy };
