"use strict";

import { consts, ctx, enemy } from "../main";
import { printTextCanvas } from "./printTextCanvas";

// 経過時間等の情報を表示する
const infoPrint = () => {
	consts.gameTime++;
	let time: number = consts.gameTime / consts.fps;

	// 敵キャラクターの残数を表示
	const canvasMessages = [
		`STAGE : ${consts.stage + 1}`,
		`enemies : ${enemy.length}`,
		`${time.toFixed(2)} s`,
	];
	printTextCanvas(canvasMessages, 20);
};

export { infoPrint };
