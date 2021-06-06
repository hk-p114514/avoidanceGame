import { drawObject } from "../functions/drawObject";
import { enemyMove1 } from "../functions/enemyMoves/enemyMove1";
import { consts } from "../main";
import { Character } from "./Character";

/********************************
    Enemyクラス
    - ゲームに登場する敵キャラクターを管理するクラス
********************************/
class Enemy extends Character {
	update() {
		super.update();
		enemyMove1(this);
	}

	draw() {
		drawObject(this, consts.enemyColor);
	}
}

export { Enemy };
