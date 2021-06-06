"use strict";
const DEBUG: boolean = true;

import { getCanvas } from "./init/getCanvas";
import { getContext } from "./init/getContext";
import { gameLoop } from "./gameLoop";
import { Enemy } from "./class/Enemy";
import { Player } from "./class/Player";
import { rand } from "./functions/rand";
import { makeEnemy } from "./functions/makeEnemy";

// html要素の取得
const canvas: HTMLCanvasElement = getCanvas();
const ctx = getContext(canvas);
const point = document.getElementById("point");
// 各種定数の宣言
const consts = {
	fps: 1000 / 30,
	canvasWidth: 500,
	canvasHeight: 500,
	//- プレイヤー色
	playerColor: "#E31212",
	//- 敵キャラクターの最大数
	maxEnemyCount: 10,
	//- 敵キャラクターの色
	enemyColor: "#6638f0",
};

const keysProperty = {
	up: false,
	right: false,
	down: false,
	left: false,
};

// インスタンスの宣言
//- プレイヤークラスのインスタンス
const player = new Player(
	consts.canvasWidth / 2,
	consts.canvasHeight - 10,
	10,
	10,
	10,
);

//- 敵キャラクターのインスタンス
const enemy: Enemy[] = [];
makeEnemy(consts.maxEnemyCount);

// canvasのサイズ指定
canvas.width = consts.canvasWidth;
canvas.height = consts.canvasHeight;

// ゲームループ
setInterval(gameLoop, consts.fps);

// 変数、定数のエクスポート
export { consts, keysProperty, player, point, DEBUG, ctx, enemy };
