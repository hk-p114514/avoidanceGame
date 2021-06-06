"use strict";

import { drawObject } from "../functions/drawObject";
import { consts } from "../main";

/********************************
	Characterクラス　
	概要 {
		ゲーム上に出現する、あらゆるキャラクターに
		共通する部分（速度、加速度、大きさ等）を管理するクラス
	}
********************************/
class Character {
	x: number; // 現在のx座標
	y: number; // 現在のy座標
	vectorX: number; // x座標のベクトル
	vectorY: number; // y座標のベクトル
	radius: number; // ゲーム内での半径
	death: boolean; // 死判定
	constructor(
		x: number,
		y: number,
		vectorX: number,
		vectorY: number,
		radius: number,
	) {
		this.x = x;
		this.y = y;
		this.vectorX = vectorX;
		this.vectorY = vectorY;
		this.radius = radius;
		this.death = false;
	}
}

export { Character };
