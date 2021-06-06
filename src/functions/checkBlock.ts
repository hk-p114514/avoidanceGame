"use strict";

import { Character } from "../class/Character";
import { consts } from "../main";
import { Block } from "../type/block";

const checkBlock = (
	object: Character,
	x: number,
	y: number,
	radius: number,
) => {
	// フィールド上において、1(左上) 2(右上) 3(右下) 4(左下)のどこに居るかを判定する
	let block: Block = 0;

	if (radius < y && y < consts.canvasHeight / 2) {
		//? 上
		if (radius < x && x < consts.canvasWidth / 2) {
			//- 左上
			block = 1;
		} else {
			//- 右上
			block = 2;
		}
	} else if (consts.canvasHeight / 2 < y && y < consts.canvasHeight) {
		//? 下
		if (radius < x && x < consts.canvasWidth / 2) {
			//- 左下
			block = 3;
		} else {
			//- 右下
			block = 4;
		}
	}

	return block;
};

export { checkBlock };
