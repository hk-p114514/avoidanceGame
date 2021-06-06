"use strict";

import { enemy } from "./main";

const enemyLoop = () => {
	for (let i = 0; i < enemy.length; i++) {
		if (enemy[i].death) {
			return;
		}

		enemy[i].draw(); // CharacterクラスからdrawObject()を呼び出す
		enemy[i].update(); // EnemyクラスからenemyMove?()を呼び出す
	}
};

export { enemyLoop };
