"use strict";

import { Enemy } from "../class/Enemy";
import { player } from "../main";

const checkHit = (enemy: Enemy): boolean => {
	// 当たり判定
	let isHit: boolean = false;
	if (enemy.block === player.block) {
		//底辺
		let distanceX = player.x - enemy.x;
		//高さ
		let distanceY = player.y - enemy.y;
		//半径足す半径
		let sumRadius = player.radius + enemy.radius;
		if (
			sumRadius * sumRadius >=
			distanceX * distanceX + distanceY * distanceY
		) {
			isHit = true;
		}
	}
	return isHit;
};

export { checkHit };
